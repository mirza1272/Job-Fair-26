import React from 'react';
import { Link } from 'react-router-dom';

const jobs = [
    {
        id: 1,
        title: 'Frontend Developer Intern',
        company: 'TechNova Solutions',
        location: 'Lahore, Pakistan',
    },
    {
        id: 2,
        title: 'Data Analyst Trainee',
        company: 'Insight Bridge',
        location: 'Islamabad, Pakistan',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        company: 'PixelCraft Studio',
        location: 'Karachi, Pakistan',
    },
    {
        id: 4,
        title: 'Software QA Associate',
        company: 'CloudAxis',
        location: 'Remote',
    },
];

const features = [
    {
        id: 1,
        title: 'Easy Apply',
        description: 'Submit your application in minutes with a smooth and simple workflow.',
        icon: (
            <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
                <path
                    d='M8 12.5L10.8 15.3L16 10'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Verified Companies',
        description: 'Connect with trusted employers screened by the university career office.',
        icon: (
            <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
                <path
                    d='M12 3L19 6.5V12C19 16 16.3 19.7 12 21C7.7 19.7 5 16 5 12V6.5L12 3Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinejoin='round'
                />
                <path
                    d='M9.5 12.5L11.2 14.2L14.8 10.6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Real-Time Updates',
        description: 'Stay informed with instant updates on openings, deadlines, and interviews.',
        icon: (
            <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
                <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' />
                <path
                    d='M12 7V12L15.5 14.2'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        ),
    },
];

function Home() {
    return (
        <div className='min-h-screen bg-slate-50 text-slate-800'>
            <header
                className='relative overflow-hidden bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-slate-950/60' />

                <div className='relative z-10 mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-28'>
                    <p className='inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs font-semibold tracking-wider uppercase'>
                        Career Growth Starts Here
                    </p>
                    <h1 className='mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl'>
                        Welcome to FAST NU Job Fair 2026
                    </h1>
                    <p className='mt-5 max-w-2xl text-base text-white/90 sm:text-lg'>
                        Discover top internships and graduate opportunities, connect with recruiters, and take the next step toward your dream career.
                    </p>
                    <div className='mt-8 flex flex-wrap items-center gap-4'>
                        <Link
                            to='/jobs'
                            className='rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-slate-100'
                        >
                            Explore Jobs
                        </Link>
                        <Link
                            to='/form'
                            className='rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15'
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </header>

            <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
                <div className='mb-8 flex flex-wrap items-end justify-between gap-4'>
                    <div>
                        <h2 className='text-3xl font-extrabold text-slate-900 sm:text-4xl'>Featured Jobs</h2>
                        <p className='mt-2 text-slate-600'>A quick preview of opportunities currently open for students.</p>
                    </div>
                    <Link to='/jobs' className='text-sm font-semibold text-blue-700 hover:text-blue-800'>View all jobs</Link>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
                    {jobs.map((job) => (
                        <article
                            key={job.id}
                            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl'
                        >
                            <p className='text-xs font-semibold tracking-wide text-blue-700 uppercase'>{job.company}</p>
                            <h3 className='mt-3 text-lg font-bold text-slate-900'>{job.title}</h3>
                            <p className='mt-2 text-sm text-slate-600'>{job.location}</p>
                            <button
                                type='button' to='/jobs'
                                className='mt-5 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700'
                            >
                                <a href="/jobs">View Details</a>
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className='border-y border-slate-200 bg-white'>
                <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
                    <h2 className='text-center text-3xl font-extrabold text-slate-900 sm:text-4xl'>Why Choose This Portal</h2>
                    <p className='mx-auto mt-3 max-w-2xl text-center text-slate-600'>
                        Built for students to explore verified opportunities with a fast and reliable experience.
                    </p>

                    <div className='mt-10 grid gap-6 md:grid-cols-3'>
                        {features.map((feature) => (
                            <article
                                key={feature.id}
                                className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md'
                            >
                                <div className='inline-flex rounded-lg bg-blue-100 p-3 text-blue-700'>{feature.icon}</div>
                                <h3 className='mt-4 text-xl font-bold text-slate-900'>{feature.title}</h3>
                                <p className='mt-2 text-slate-600'>{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
                <div className='rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-6 py-10 text-white shadow-xl sm:px-10'>
                    <h2 className='text-3xl font-extrabold sm:text-4xl'>Ready to Launch Your Career?</h2>
                    <p className='mt-3 max-w-2xl text-white/85'>
                        Join the University Job Fair Portal to apply faster, track opportunities, and connect with top recruiters.
                    </p>
                    <div className='mt-7 flex flex-wrap gap-4'>
                        <Link
                            to='/jobs'
                            className='rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold transition hover:bg-white/10'
                        >
                            Browse Jobs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
