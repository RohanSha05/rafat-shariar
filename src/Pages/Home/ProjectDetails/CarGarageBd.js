import React from 'react';
import { Link } from 'react-router-dom';
import cargarage from '../../../images/ProjectImage/CarGarageBD.png'

const CarGarageBD = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={cargarage} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">CAR GARAGE BD</h1>
                    <ul className=' mt-4'>
                        <li>● This is an warehouse management website </li>
                        <li>● Users can register and login here and also use google for signing up.</li>
                        <li>● Without login users cannot have access to some private pages.</li>
                    </ul>

                    <div className='mt-8'>
                        <button class="btn btn-xs btn-primary">HTML</button>
                        <button class="btn  btn-xs btn-primary">JavaScript</button>
                        <button class="btn  btn-xs btn-primary">React</button>
                        <button class="btn  btn-xs btn-primary">Tailwind</button>
                        <button class="btn  btn-xs btn-primary">Firebase</button>
                        <button class="btn  btn-xs btn-primary">Mongodb</button>
                        <button class="btn  btn-xs btn-primary">expressJS</button>
                    </div>
                    <div className='mt-5 underline text-blue-700 font-bold'>
                        <Link className='ml-5' to='https://github.com/RohanSha05/Car-Garage-BD-Client'>Client Side</Link>
                        <Link className='ml-5' to='https://github.com/RohanSha05/Car-Garage-BD-Server'>Server Side</Link>
                        <Link className='ml-5' to='https://car-garage-bd-ef64a.web.app/'>Live Site</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CarGarageBD;