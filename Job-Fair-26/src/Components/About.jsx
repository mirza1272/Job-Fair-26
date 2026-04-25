import React from 'react';

const portalFeatures = [
	{
		id: 1,
		title: 'Real-Time Job Listings',
		description: 'Students instantly see newly posted openings without waiting for manual updates.',
		icon: (
			<svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
				<circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' />
				<path d='M12 7V12L15 14' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		),
	},
	{
		id: 2,
		title: 'Easy Application Flow',
		description: 'A clean form experience helps students apply quickly with fewer input mistakes.',
		icon: (
			<svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
				<path d='M8 12.5L10.8 15.3L16 10' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' />
			</svg>
		),
	},
	{
		id: 3,
		title: 'Verified Companies',
		description: 'Every organization is screened so students can confidently apply to trusted employers.',
		icon: (
			<svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
				<path d='M12 3L19 6.5V12C19 16 16.3 19.7 12 21C7.7 19.7 5 16 5 12V6.5L12 3Z' stroke='currentColor' strokeWidth='2' strokeLinejoin='round' />
				<path d='M9.5 12.5L11.2 14.2L14.8 10.6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		),
	},
	{
		id: 4,
		title: 'Smooth Modern UI',
		description: 'Mobile-friendly design, clear typography, and focused interactions improve usability.',
		icon: (
			<svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
				<rect x='4' y='3' width='16' height='18' rx='2' stroke='currentColor' strokeWidth='2' />
				<path d='M8 7H16M8 11H16M8 15H13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
			</svg>
		),
	},
];

function About() {
	return (
		<main className='min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 text-slate-800'>
			<section
				className='relative overflow-hidden border-b border-slate-200 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage:
						"url('https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
						University Career Platform
					</p>
					<h1 className='mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl'>
						About the Job Fair Portal
					</h1>
					<p className='mt-5 max-w-3xl text-base leading-7 text-slate-100/95 sm:text-lg'>
						The University Job Fair Portal is a student-focused platform designed to connect graduates and undergraduates
						with quality career opportunities. It centralizes listings, simplifies applications, and improves
						communication between students, recruiters, and university career services.
					</p>
					</div>
				</div>
			</section>

			<section className='border-y border-slate-200 bg-white/90'>
				<div className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
					<div className='rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-6 py-10 text-white shadow-xl sm:px-10'>
						<h2 className='text-center text-3xl font-extrabold sm:text-4xl'>Our Mission</h2>
						<p className='mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-white/90 sm:text-lg'>
							Our mission is to empower students by making career opportunities accessible, transparent, and easy to
							navigate. We aim to bridge the gap between university talent and industry demand through a reliable,
							student-first digital experience.
						</p>
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
				<div className='mb-10'>
					<h2 className='text-3xl font-extrabold text-slate-900 sm:text-4xl'>Key Features</h2>
					<p className='mt-3 max-w-2xl text-slate-600'>
						Designed to improve the complete job fair experience for both students and recruiters.
					</p>
				</div>

				<div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
					{portalFeatures.map((feature) => (
						<article
							key={feature.id}
							className='group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl'
						>
							<div className='inline-flex rounded-lg bg-blue-100 p-3 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white'>
								{feature.icon}
							</div>
							<h3 className='mt-4 text-lg font-bold text-slate-900'>{feature.title}</h3>
							<p className='mt-2 text-sm leading-6 text-slate-600'>{feature.description}</p>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}

export default About;
