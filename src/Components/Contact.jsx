import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();

        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            setError('Please fill in all fields before submitting.');
            setIsSubmitted(false);
            return;
        }

        const payload = {
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
        };

        setSubmittedData(payload);
        setIsSubmitted(true);
        setError('');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <main className='min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 text-slate-800'>
            <section
                className='relative overflow-hidden border-b border-slate-200 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-slate-950/65' />
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.35),transparent_40%)]' />
                <div className='relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20'>
                    <div className='max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-10'>
                        <p className='inline-flex rounded-full border border-cyan-200/70 bg-cyan-100/15 px-4 py-1 text-xs font-semibold tracking-wider text-cyan-100 uppercase'>
                            Get In Touch
                        </p>
                        <h1 className='mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl'>Contact Us</h1>
                        <p className='mt-4 max-w-2xl text-base leading-7 text-slate-100/95 sm:text-lg'>
                            Have questions? Reach out to us anytime. We are here to help students and employers throughout the job fair journey.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <span className='rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90'>Quick Response</span>
                            <span className='rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90'>Career Support</span>
                            <span className='rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90'>Student Friendly</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
                <div className='grid gap-8 lg:grid-cols-12'>
                    <article className='rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 lg:col-span-8 sm:p-8'>
                        <h2 className='text-2xl font-extrabold text-slate-900'>Send Us a Message</h2>
                        <p className='mt-2 text-slate-600'>Fill out the form and our team will get back to you soon.</p>

                        <form onSubmit={handleSubmit} className='mt-6 space-y-5'>
                            <div>
                                <label htmlFor='name' className='mb-2 block text-sm font-semibold text-slate-700'>
                                    Name
                                </label>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your full name'
                                    className='w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='mb-2 block text-sm font-semibold text-slate-700'>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                    className='w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='mb-2 block text-sm font-semibold text-slate-700'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Write your message here'
                                    className='w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100'
                                />
                            </div>

                            {error && (
                                <p className='rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700'>
                                    {error}
                                </p>
                            )}

                            {isSubmitted && submittedData && (
                                <div className='rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-800'>
                                    <p className='font-semibold'>Message sent successfully.</p>
                                    <p className='mt-2'>Name: {submittedData.name}</p>
                                    <p>Email: {submittedData.email}</p>
                                    <p className='mt-1'>Message: {submittedData.message}</p>
                                </div>
                            )}

                            <button
                                type='submit'
                                className='inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-slate-800 hover:to-cyan-600 hover:shadow-xl'
                            >
                                Submit Message
                            </button>
                        </form>
                    </article>

                    <aside className='lg:col-span-4'>
                        <article className='rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8'>
                            <h2 className='text-2xl font-extrabold text-slate-900'>Contact Information</h2>
                            <p className='mt-2 text-slate-600'>You can also reach us through the details below.</p>

                            <div className='mt-6 space-y-4'>
                                <div className='group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md'>
                                    <span className='mt-0.5 inline-flex rounded-lg bg-blue-100 p-2 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white'>
                                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5'>
                                            <path d='M12 21C12 21 19 14.5 19 10A7 7 0 1 0 5 10C5 14.5 12 21 12 21Z' stroke='currentColor' strokeWidth='2' />
                                            <circle cx='12' cy='10' r='2.5' stroke='currentColor' strokeWidth='2' />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className='text-sm font-semibold text-slate-900'>Address</p>
                                        <p className='text-sm text-slate-600'>FAST-NU, FAST Square,
                                            9 Km from Faisalabad Motorway
                                            Interchange towards Chiniot</p>
                                    </div>
                                </div>

                                <div className='group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md'>
                                    <span className='mt-0.5 inline-flex rounded-lg bg-blue-100 p-2 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white'>
                                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5'>
                                            <path d='M4 6L12 12L20 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                                            <rect x='3' y='5' width='18' height='14' rx='2' stroke='currentColor' strokeWidth='2' />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className='text-sm font-semibold text-slate-900'>Email</p>
                                        <p className='text-sm text-slate-600'>info.cfd@nu.edu.pk</p>
                                    </div>
                                </div>

                                <div className='group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md'>
                                    <span className='mt-0.5 inline-flex rounded-lg bg-blue-100 p-2 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white'>
                                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5'>
                                            <path d='M5 4H9L11 9L8.5 10.5C9.7 12.9 11.1 14.3 13.5 15.5L15 13L20 15V19C20 20.1 19.1 21 18 21C10.8 20.5 4.5 14.2 4 7C4 5.9 4.9 5 6 5H5Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className='text-sm font-semibold text-slate-900'>Phone</p>
                                        <p className='text-sm text-slate-600'>(041) 111 128 128</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-6 rounded-2xl border border-sky-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-4'>
                                <p className='text-sm font-semibold text-slate-900'>Office Hours</p>
                                <p className='mt-1 text-sm text-slate-600'>Monday - Friday: 8:45 AM to 5:00 PM</p>
                            </div>
                        </article>
                    </aside>
                </div>
            </section>
        </main>
    );
}

export default Contact;
