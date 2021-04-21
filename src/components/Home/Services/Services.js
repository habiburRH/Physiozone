import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://vast-lake-67197.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 className="text-danger">BEST SERVICES FOR YOU</h2>
                <h2 className="text-primary">We Provide To You</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        books.map(service => <ServiceDetail service={service} ></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;