import React from 'react';
import { Link } from 'react-router-dom';
import shizuka from '../../../images/ProjectImage/shizukaIndsutries.png'

const ShizukaIndustry = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={shizuka} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">SHIZUKA INDUSTRIES</h1>
                    <ul className=' mt-4'>
                        <li>● In this website users can register and login.User information will save to the database after registration.</li>
                        <li>● Without sign-in users cannot have access to some specific route.</li>
                        <li>● There are some admins here who can manage some special routes.</li>
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
                        <Link className='ml-5' to='https://github.com/RohanSha05/shizuka-industry-website'>Client Side</Link>
                        <Link className='ml-5' to='https://github.com/RohanSha05/shizuka-industry-server'>Server Side</Link>
                        <Link className='ml-5' to='https://shizuka-industry.web.app/'>Live Site</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShizukaIndustry;