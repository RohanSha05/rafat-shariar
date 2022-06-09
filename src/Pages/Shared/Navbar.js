import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li>
                            <a>About</a>
                        </li>
                        <li><a>Contact Me</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-3xl"> <span className='text-lg'>Rafat Shariar</span></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a href='/'>Home</a></li>
                    <li>
                        <a>About</a>
                    </li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a className='btn btn-ghost btn-sm ' target='_blank' href="https://drive.google.com/file/d/1ukGmcn0jFF_fM6lla9SLDq0nAZ1NrFSO/view">Get Resume</a>
            </div>
        </div>
    );
};

export default Navbar;