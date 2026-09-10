import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchData = (apiUrl) => {
    const [data, setData] = useState([]);
    const fetchSericeData = async () => {
        try
        {
            const sdata = await axios.get(apiUrl);
            setData(sdata.data);
        }
        catch (error) {
            console.error("Error fetching service data:", error);
        }
     }

    useEffect(() => {
        fetchSericeData();
    }, [])
    
    return data
    
}

export default useFetchData