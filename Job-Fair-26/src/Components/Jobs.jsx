import React, { useEffect, useState } from 'react';

const initialApplicationState = {
	fullName: '',
	email: '',
	phone: '',
	resumeLink: '',
	coverLetter: '',
};

function Jobs() {
	const [jobs] = useState([
		{
			id: 1,
			title: 'Frontend Developer Intern',
			company: 'TechNova Solutions',
			location: 'Faisalabad',
			type: 'Internship',
		},
		{
			id: 2,
			title: 'Backend Engineer',
			company: 'CloudAxis',
			location: 'Lahore',
			type: 'Full-time',
		},
		{
			id: 3,
			title: 'Data Analyst Trainee',
			company: 'Insight Bridge',
			location: 'Islamabad',
			type: 'Internship',
		},
		{
			id: 4,
			title: 'QA Associate',
			company: 'SoftGrid Labs',
			location: 'Karachi',
			type: 'Full-time',
		},
		{
			id: 5,
			title: 'UI/UX Designer',
			company: 'PixelCraft Studio',
			location: 'Remote',
			type: 'Internship',
		},
		{
			id: 6,
			title: 'DevOps Engineer',
			company: 'NetCore Systems',
			location: 'Lahore',
			type: 'Full-time',
		},
		{
			id: 7,
			title: 'Mobile App Developer',
			company: 'AlphaStack',
			location: 'Islamabad',
			type: 'Full-time',
		},
		{
			id: 8,
			title: 'Machine Learning Intern',
			company: 'DataSpark AI',
			location: 'Lahore',
			type: 'Internship',
		},
		{
			id: 9,
			title: 'Business Analyst',
			company: 'VisionBridge',
			location: 'Karachi',
			type: 'Full-time',
		},
		{
			id: 10,
			title: 'Cloud Support Engineer',
			company: 'SkyNet Services',
			location: 'Remote',
			type: 'Full-time',
		},
		{
			id: 11,
			title: 'Cybersecurity Intern',
			company: 'SecureWave',
			location: 'Faisalabad',
			type: 'Internship',
		},
		{
			id: 12,
			title: 'Product Designer',
			company: 'Craftly',
			location: 'Lahore',
			type: 'Full-time',
		},
		{
			id: 13,
			title: 'Software Engineer Trainee',
			company: 'ByteForge',
			location: 'Islamabad',
			type: 'Internship',
		},
		{
			id: 14,
			title: 'Database Administrator',
			company: 'PrimeData',
			location: 'Karachi',
			type: 'Full-time',
		},
		{
			id: 15,
			title: 'Technical Writer',
			company: 'DocuSoft',
			location: 'Remote',
			type: 'Internship',
		},
		{
			id: 16,
			title: 'Network Engineer',
			company: 'ConnectHub',
			location: 'Faisalabad',
			type: 'Full-time',
		},
		{
			id: 17,
			title: 'AI Prompt Engineer Intern',
			company: 'Neuron Labs',
			location: 'Lahore',
			type: 'Internship',
		},
		{
			id: 18,
			title: 'HR Executive',
			company: 'TalentGrid',
			location: 'Islamabad',
			type: 'Full-time',
		},
		{
			id: 19,
			title: 'React Developer',
			company: 'WebNest',
			location: 'Karachi',
			type: 'Full-time',
		},
		{
			id: 20,
			title: 'Content Marketing Intern',
			company: 'BrandBloom',
			location: 'Remote',
			type: 'Internship',
		},
		{
			id: 21,
			title: 'Systems Engineer',
			company: 'CoreMatrix',
			location: 'Lahore',
			type: 'Full-time',
		},
		{
			id: 22,
			title: 'SQA Intern',
			company: 'TestPilot',
			location: 'Faisalabad',
			type: 'Internship',
		},
		{
			id: 23,
			title: 'Junior Full Stack Developer',
			company: 'CodeHarbor',
			location: 'Islamabad',
			type: 'Full-time',
		},
		{
			id: 24,
			title: 'Operations Intern',
			company: 'FlowWorks',
			location: 'Karachi',
			type: 'Internship',
		},
	]);

	const [searchTerm, setSearchTerm] = useState('');
	const [typeFilter, setTypeFilter] = useState('All');

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedJob, setSelectedJob] = useState(null);

	const [applicationForm, setApplicationForm] = useState(initialApplicationState);
	const [applicationErrors, setApplicationErrors] = useState({});

	const [toastMessage, setToastMessage] = useState('');
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isModalOpen]);

	useEffect(() => {
		if (!showToast) return undefined;

		const timer = setTimeout(() => {
			setShowToast(false);
		}, 2800);

		return () => clearTimeout(timer);
	}, [showToast]);

	const filteredJobs = jobs.filter((job) => {
		const term = searchTerm.toLowerCase().trim();
		const matchesTerm =
			job.title.toLowerCase().includes(term) ||
			job.company.toLowerCase().includes(term);

		const matchesType = typeFilter === 'All' || job.type === typeFilter;

		return matchesTerm && matchesType;
	});

	const handleOpenModal = (job) => {
		setSelectedJob(job);
		setApplicationForm(initialApplicationState);
		setApplicationErrors({});
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedJob(null);
		setApplicationErrors({});
	};

	const handleOverlayMouseDown = (event) => {
		if (event.target === event.currentTarget) {
			handleCloseModal();
		}
	};

	const handleApplicationChange = (event) => {
		const { name, value } = event.target;
		setApplicationForm((prev) => ({ ...prev, [name]: value }));
		setApplicationErrors((prev) => ({ ...prev, [name]: '' }));
	};

	const validateApplication = () => {
		const errors = {};

		if (!applicationForm.fullName.trim()) errors.fullName = 'Full name is required.';
		if (!applicationForm.email.trim()) {
			errors.email = 'Email is required.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicationForm.email.trim())) {
			errors.email = 'Please enter a valid email address.';
		}

		if (!applicationForm.phone.trim()) errors.phone = 'Phone number is required.';
		if (!applicationForm.resumeLink.trim()) errors.resumeLink = 'Resume link is required.';
		if (!applicationForm.coverLetter.trim()) errors.coverLetter = 'Cover letter is required.';

		return errors;
	};

	const handleApplicationSubmit = (event) => {
		event.preventDefault();

		const errors = validateApplication();
		if (Object.keys(errors).length > 0) {
			setApplicationErrors(errors);
			return;
		}

		setApplicationForm(initialApplicationState);
		handleCloseModal();
		setToastMessage('Application Submitted Successfully');
		setShowToast(true);
	};

	const inputClassName =
		'w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100';

	return (
		<main className='min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 text-slate-800'>
			<section className='border-b border-slate-200 bg-white/80 backdrop-blur'>
				<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16'>
					<p className='inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase'>
						Job Opportunities
					</p>
					<h1 className='mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl'>Explore Open Positions</h1>
					<p className='mt-4 max-w-3xl text-slate-600 sm:text-lg'>
						Search through available jobs from trusted companies and apply instantly through the job fair portal.
					</p>

					<div className='mt-8 grid gap-4 sm:grid-cols-2'>
						<div>
							<label htmlFor='search' className='mb-2 block text-sm font-semibold text-slate-700'>
								Search by title or company
							</label>
							<input
								id='search'
								type='text'
								value={searchTerm}
								onChange={(event) => setSearchTerm(event.target.value)}
								placeholder='e.g. Frontend, TechNova'
								className={inputClassName}
							/>
						</div>

						<div>
							<label htmlFor='typeFilter' className='mb-2 block text-sm font-semibold text-slate-700'>
								Job type
							</label>
							<select
								id='typeFilter'
								value={typeFilter}
								onChange={(event) => setTypeFilter(event.target.value)}
								className={inputClassName}
							>
								<option value='All'>All</option>
								<option value='Full-time'>Full-time</option>
								<option value='Internship'>Internship</option>
							</select>
						</div>
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16'>
				{filteredJobs.length === 0 ? (
					<div className='rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm'>
						<p className='text-lg font-semibold text-slate-900'>No jobs found</p>
						<p className='mt-2 text-slate-600'>Try a different keyword or change the job type filter.</p>
					</div>
				) : (
					<div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
						{filteredJobs.map((job) => (
							<article
								key={job.id}
								className='group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl'
							>
								<div className='flex items-start justify-between gap-3'>
									<div>
										<p className='text-xs font-semibold tracking-wide text-blue-700 uppercase'>{job.company}</p>
										<h2 className='mt-2 text-xl font-bold text-slate-900'>{job.title}</h2>
									</div>
									<span className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700'>
										{job.type}
									</span>
								</div>

								<p className='mt-4 text-sm text-slate-600'>Location: {job.location}</p>

								<button
									type='button'
									onClick={() => handleOpenModal(job)}
									className='mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-slate-800 hover:to-cyan-600 hover:shadow-xl'
								>
									Apply Now
								</button>
							</article>
						))}
					</div>
				)}
			</section>

			<div
				onMouseDown={handleOverlayMouseDown}
				className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 transition duration-300 ${
					isModalOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
				}`}
			>
				<div
					className={`w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl transition duration-300 sm:p-8 ${
						isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
					}`}
					onMouseDown={(event) => event.stopPropagation()}
				>
					<div className='mb-6 flex items-start justify-between gap-4'>
						<div>
							<h3 className='text-2xl font-extrabold text-slate-900'>Apply for Job</h3>
							<p className='mt-1 text-sm text-slate-600'>Complete the form below to submit your application.</p>
						</div>
						<button
							type='button'
							onClick={handleCloseModal}
							className='rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'
						>
							Close
						</button>
					</div>

					{selectedJob && (
						<div className='mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3'>
							<p className='text-xs font-semibold tracking-wide text-blue-700 uppercase'>{selectedJob.company}</p>
							<p className='mt-1 text-lg font-bold text-slate-900'>{selectedJob.title}</p>
							<p className='text-sm text-slate-600'>
								{selectedJob.location} | {selectedJob.type}
							</p>
						</div>
					)}

					<form onSubmit={handleApplicationSubmit} className='space-y-4'>
						<div>
							<label htmlFor='applyFullName' className='mb-2 block text-sm font-semibold text-slate-700'>
								Full Name
							</label>
							<input
								id='applyFullName'
								name='fullName'
								type='text'
								value={applicationForm.fullName}
								onChange={handleApplicationChange}
								placeholder='Enter your full name'
								className={inputClassName}
							/>
							{applicationErrors.fullName && <p className='mt-1 text-sm text-rose-600'>{applicationErrors.fullName}</p>}
						</div>

						<div className='grid gap-4 sm:grid-cols-2'>
							<div>
								<label htmlFor='applyEmail' className='mb-2 block text-sm font-semibold text-slate-700'>
									Email
								</label>
								<input
									id='applyEmail'
									name='email'
									type='email'
									value={applicationForm.email}
									onChange={handleApplicationChange}
									placeholder='you@example.com'
									className={inputClassName}
								/>
								{applicationErrors.email && <p className='mt-1 text-sm text-rose-600'>{applicationErrors.email}</p>}
							</div>

							<div>
								<label htmlFor='applyPhone' className='mb-2 block text-sm font-semibold text-slate-700'>
									Phone Number
								</label>
								<input
									id='applyPhone'
									name='phone'
									type='text'
									value={applicationForm.phone}
									onChange={handleApplicationChange}
									placeholder='+92...'
									className={inputClassName}
								/>
								{applicationErrors.phone && <p className='mt-1 text-sm text-rose-600'>{applicationErrors.phone}</p>}
							</div>
						</div>

						<div>
							<label htmlFor='applyResume' className='mb-2 block text-sm font-semibold text-slate-700'>
								Portfolio Link
							</label>
							<input
								id='applyResume'
								name='resumeLink'
								type='text'
								value={applicationForm.resumeLink}
								onChange={handleApplicationChange}
								placeholder='https://drive.google.com/...'
								className={inputClassName}
							/>
							{applicationErrors.resumeLink && <p className='mt-1 text-sm text-rose-600'>{applicationErrors.resumeLink}</p>}
						</div>

						<div>
							<label htmlFor='applyCover' className='mb-2 block text-sm font-semibold text-slate-700'>
								Cover Letter
							</label>
							<textarea
								id='applyCover'
								name='coverLetter'
								rows='4'
								value={applicationForm.coverLetter}
								onChange={handleApplicationChange}
								placeholder='Write a short cover letter...'
								className={inputClassName}
							/>
							{applicationErrors.coverLetter && <p className='mt-1 text-sm text-rose-600'>{applicationErrors.coverLetter}</p>}
						</div>

						<button
							type='submit'
							className='inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-slate-800 hover:to-cyan-600 hover:shadow-xl'
						>
							Submit Application
						</button>
					</form>
				</div>
			</div>

			<div
				className={`fixed right-5 top-5 z-[60] transition duration-300 ${
					showToast ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
				}`}
			>
				<div className='rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 shadow-lg'>
					{toastMessage}
				</div>
			</div>
		</main>
	);
}

export default Jobs;
