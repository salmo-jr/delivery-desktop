import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import api from '../../services/api';
import * as Yup from 'yup';
import GlobalMenu from '../../components/GlobalMenu';

const Register = () => {
    const [user, setUser] = useState({});
    /* const validate = values => {
        const errors = {};
        // VALIDATES NAME
        if (!values.name) {
            errors.name = 'O Nome é obrigatório';
        }

        // VALIDATES CPF
        if (!values.cpf) {
            errors.cpf = 'O CPF é obrigatório';
        } else if (values.cpf.length !== 14) {
            errors.cpf = 'CPF inválido';
        }

        // VALIDATES EMAIL
        if (!values.email) {
            errors.email = 'O E-mail é obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'E-mail inválido'
        }
        return errors;
    } */

    const loadingUser = useCallback(async () => {
        try {
            const response = await api.get(`/users/salmo-jr`);
            if (response.data) setUser(response.data);

        } catch (error) {
            console.log("Erro ao acessar a API");
        }
    }, []);

    useEffect(() => {
        loadingUser();
    }, [loadingUser]);

    const formik = useFormik({
        initialValues: {
            name: user.name || '',
            cpf: user.id || '',
            email: user.email || '',
            tel: user.public_repos || '',
            obs: user.location || '',
        },
        enableReinitialize: true,
        /* validate: validate, */
        validationSchema: Yup.object({
            name: Yup.string()
                .required('O Nome é obrigatório'),
            cpf: Yup.string()
                .required('O CPF é obrigatório')
                /* .length(14, 'CPF inválido'), */
                .matches(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/, { message: 'CPF inválido' }),
            email: Yup.string()
                .required('O e-mail é obrigatório')
                .email('E-mail inválido'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <GlobalMenu />
            <h1>Cadastro de Entregadores</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        {...formik.getFieldProps('name')}
                    /* name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} */
                    />
                    {
                        formik.errors.name && formik.touched.name
                            ? <span>{formik.errors.name}</span>
                            : null
                    }
                </div>
                <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        {...formik.getFieldProps('cpf')}
                    /* name="cpf"
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} */
                    />
                    {
                        formik.errors.cpf && formik.touched.cpf
                            ? <span>{formik.errors.cpf}</span>
                            : null
                    }
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        {...formik.getFieldProps('email')}
                    /* name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} */
                    />
                    {
                        formik.errors.email && formik.touched.email
                            ? <span>{formik.errors.email}</span>
                            : null
                    }
                </div>
                <div>
                    <label htmlFor="tel">Telefone:</label>
                    <input
                        type="tel"
                        id="tel"
                        {...formik.getFieldProps('tel')}
                    /* name="tel"
                    value={formik.values.tel}
                    onChange={formik.handleChange} */
                    />
                </div>
                <div>
                    <label htmlFor="obs">Observação:</label>
                    <input
                        type="text"
                        id="obs"
                        {...formik.getFieldProps('obs')}
                    /* name="obs"
                    value={formik.values.obs}
                    onChange={formik.handleChange} */
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    );
}

export default Register;