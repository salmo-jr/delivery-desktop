import React, { useCallback, useEffect, useState } from 'react';
import PersonCard from '../../components/PersonCard';
import api from '../../services/api';

const DeliverymenList = () => {
    const [deliverymen, setDeliverymen] = useState([]);
    const [perPage, setPerPage] = useState(5);

    const loadingDeliverymenList = useCallback(async () => {
        try {
            const response = await api.get(`/users?per_page=${perPage}`);
            if (response.data) setDeliverymen(response.data);

        } catch (error) {
            console.log("Erro ao acessar a API");
        }
    }, [perPage]);

    useEffect(() => {
        loadingDeliverymenList();
    }, [loadingDeliverymenList]);

    return (
        <>
            <h1>Lista de Entregadores</h1>
            <ul>
                {deliverymen.map(d => {
                    return (
                        <PersonCard key={d.id.toString()} data={d} />
                    );
                })}
            </ul>
        </>
    );
}

export default DeliverymenList;