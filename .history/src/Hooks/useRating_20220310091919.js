import { useEffect, useState } from 'react';

const useRating = () => {
    const [rates, setRates] = useState([]);
    useEffect(()=>{
        fetch('../../public/rating.json')
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