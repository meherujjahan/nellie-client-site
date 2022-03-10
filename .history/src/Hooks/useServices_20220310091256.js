import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('../../public/services.json')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useServices;