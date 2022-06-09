import React from 'react';
import rohan from '../../images/rohan.png'

const Banner = () => {
    return (
        <div className=''>
            <div class="card lg:card-side  bg-[url('/src/images/banner.png')] bg-cover shadow-xl">
                <div className='flex justify-center items-center'>
                    <div class="card-body">
                        <div>
                            <h1 className='text-white'>Hi, My Name Is</h1>
                            <h1 className='text-6xl text-white font-bold'>RAFAT SHARIAR ROHAN</h1>
                            <p className='text-white text-3xl'>Junior Web Developer</p>
                            <p className='text-white w-1/2 mt-5'>I’am a junior Website Developer looking to continue my career within agency side development.
                                I have some ability in design and coding as well as an ability to convert client requirements into exciting
                                online applications</p>
                        </div>
                        <div class="card-actions justify-start">
                            <a className='btn btn-primary btn-sm' target='_blank' href="https://drive.google.com/file/d/1ukGmcn0jFF_fM6lla9SLDq0nAZ1NrFSO/view">Get Resume</a>
                        </div>
                    </div>
                </div>
                <figure><img src={rohan} alt="Album" /></figure>
            </div>
        </div>
    );
};

export default Banner;