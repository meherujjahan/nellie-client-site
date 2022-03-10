import { useEffect, useState } from 'react';

const useRating = () => {
    const [rating, setRating] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/rating')
        .then(res=>res.json())
        .then(data=> setRates(data))
    },[])
    return (
        {
            rating,
            setRating
        }
    );
};

export default useRating;