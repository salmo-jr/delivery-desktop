import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

const Pictures = () => {
    const [photos, setPhotos] = useState([]);
    const loadingPictures = useCallback(async () => {
        try {
            const response = await api.get('/curated', {
                headers: {
                    Authorization: '563492ad6f917000010000018248432e88334375a6b5ecf2cf51a3a0'
                }
            });
            if (response.data) {
                console.log('### photos', response.data);
                setPhotos(response.data.photos);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        loadingPictures();
    }, [loadingPictures]);

    return (
        <>
            <h1>Pictures</h1>
            {photos.map(p => {
                return <p key={p.id}><img src={p.src.original} /></p>
            })}
        </>
    );
}

export default Pictures;