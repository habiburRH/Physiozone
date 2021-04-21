import React from 'react';
import Review from '../Review/Review';
import habibur from '../../../images/two.jpg'
import smith from '../../../images/one.jpg'
import mark from '../../../images/three.jpg'

const barData = [
    {
        name: 'Habibur',
        title: 'Physiologist',
        img: habibur
    },
    {
        name: 'John Smith',
        title: 'Physiologist',
        img: smith
    },
    {
        name: 'John Mark',
        title: 'Physiologist',
        img: mark
    },
]

const Reviews = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center">
                    <h3 className="text-danger">Our Team</h3>
                    <h2>We Are Here For You</h2>
                </div>
                <div className="row">
                    {
                        barData.map(bar => <Review bar={bar} key={bar.name}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;