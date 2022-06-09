import React from 'react';
import shizuka from '../../images/projects/shizuka-logo.png'
import carGarage from '../../images/projects/car-garage-logo.png'
import carNobyl from '../../images/projects/model11.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-4xl mb-10'>My Top Projects</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div class="card w-96  shadow-xl">
                    <figure><img src={shizuka} className='w-1/2' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            SHIZUKA INDUSTRIES
                        </h2>
                        <p>Product Manufacturer Website</p>
                        <div class="card-actions justify-end">
                            <Link to="/shizukaindustries" className='btn btn-primary'>Details</Link>
                        </div>
                    </div>
                </div>
                <div class="card w-96 shadow-xl">
                    <figure><img src={carGarage} className='w-1/2' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            CAR GARAGE BD
                        </h2>
                        <p>Product Manufacturer Website</p>
                        <div class="card-actions justify-end">
                            <Link to="/cargaragebd" className='btn btn-primary'>Details</Link>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={carNobyl} className='w-1/2' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            CAR-NOBYL WEBSITE
                        </h2>
                        <p>Product Manufacturer Website</p>
                        <div class="card-actions justify-end">
                            <Link to="/carnobyl" className='btn btn-primary'>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;