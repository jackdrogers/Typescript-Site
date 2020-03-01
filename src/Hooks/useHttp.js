import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        fetch(url).then(response => {
            if (!response.ok) console.error('Error:');
            return response.json();
        }).then(data => {
            setFetchedData(data);
        });
    }, [url, dependencies]);

    return fetchedData;
}