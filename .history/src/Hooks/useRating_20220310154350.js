import { useEffect, useState } from 'react';

const useRating = () => {
    const [rates, setRates] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/rating')
        .then(res=>res.json())
        .then(data=> setRates(data))
    },[])
    return (
        {
            rates,
            setRates
        }
    );
};

export default useRating;