import React from 'react';
import '../index.css';

function Footer() {
    return (
        <footer className='w-full border-t border-slate-800 bg-slate-950 text-slate-200'>
            <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm sm:px-6'>
                <p className='font-medium text-slate-300'>University Career Services Center</p>
                <p className='text-slate-400'>(c) 2026 Job Fair. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;