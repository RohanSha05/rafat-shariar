import React from 'react';
import { Link } from 'react-router-dom';
import shizuka from '../../../images/ProjectImage/CarNobyl.png'

const CarNobyl = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={shizuka} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">CAR-NOBYL WEBSITE</h1>
                    <ul className=' mt-4'>
                        <li>● This is a product analysis website</li>
                        <li>● On this website there are some reviews of products.</li>
                        <li>● There are some graph charts on this website like Pie chart, Line chart, Bar chart.</li>
                    </ul>
                    <div className='mt-8'>
                        <button class="btn btn-xs btn-primary">HTML</button>
                        <button class="btn  btn-xs btn-primary">JavaScript</button>
                        <button class="btn  btn-xs btn-primary">React</button>
                        <button class="btn  btn-xs btn-primary">Tailwind</button>
                    </div>
                    <div className='mt-5 underline text-blue-700 font-bold'>
                        <Link className='ml-5' to='https://github.com/RohanSha05/Car-Nobyl'>Client Side</Link>
                        <Link className='ml-5' to='https://car-nobyl.netlify.app/'>Live Site</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarNobyl;