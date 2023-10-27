import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mt-8">
            <div className="text-center">
                <h1 className='text-xl font-bold text-[#FF3811] '>Service</h1>
                <h1 className="text-5xl font-bold my-2">Our Service Area</h1>
                <p className="w-1/2 mx-auto my-4">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map(service => <ServiceCard 
               key={service._id}
               service={service}
               ></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;