import React from 'react';
import '../index.css';

function Header() {
    return (
        <header className='w-full border-b border-slate-200 bg-white/90 text-slate-800 backdrop-blur supports-[backdrop-filter]:bg-white/80'>
            <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6'>
                <a href='/home' className='text-2xl font-extrabold tracking-tight text-slate-900'>Job Fair'26</a>
                <ul className='flex flex-wrap items-center gap-2 text-sm font-semibold sm:gap-5 sm:text-base'>
                    <li><a href='/home' className='rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700'>Home</a></li>
                    <li><a href='/about' className='rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700'>About</a></li>
                    <li><a href='/contact' className='rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700'>Contact</a></li>
                    <li><a href='/jobs' className='rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700'>Jobs</a></li>
                </ul>
                <button className='rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700' onClick={() => window.location.href = '/form'}>
                    Register Now
                </button>
            </div>
        </header>
    );
}

export default Header;