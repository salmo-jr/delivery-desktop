import React, { useCallback, useEffect, useState } from 'react';
import { remote } from 'electron';
import path from 'path';
import fs from 'fs';
import PersonCard from '../../components/PersonCard';
import GlobalMenu from '../../components/GlobalMenu';
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

    const savePDF = useCallback(async () => {
        const filePath = path.join(__dirname, `../../assets/Lista-de-entregadores_${new Date().getTime()}.pdf`);
        const options = {
            marginsType: 0,
            pageSize: 'A4',
            printBckground: true,
            landscape: false,
        }
        const win = remote.BrowserWindow.getFocusedWindow();
        try {
            const pdf = await win.webContents.printToPDF(options);
            fs.writeFile(filePath, pdf, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    showNotification('Exportar PDF', 'Arquivo exportado com sucesso.')
                    //console.log('Arquivo exportado com sucesso.');
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    const showNotification = useCallback((title, msg) => {
        const notification = {
            title: title,
            body: msg,
            icon: path.join(__dirname, '../../assets/logo.png'),
            silent: false,
        }
        new remote.Notification(notification).show();
    }, []);

    return (
        <>
            <GlobalMenu />
            <h1>Lista de Entregadores</h1>
            <button type="button" onClick={() => savePDF()}>Exportar para PDF</button>
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