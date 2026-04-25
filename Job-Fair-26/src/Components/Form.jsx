import React, { useState } from 'react';

const degreeOptions = [
	'Computer Science',
	'Software Engineering',
	'Information Technology',
	'Data Science',
	'Business Administration',
	'Electrical Engineering',
];

const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];
const ratingOptions = ['1', '2', '3', '4', '5'];
const initialStudentState = {
	fullName: '',
	email: '',
	phone: '',
	degree: '',
	year: '',
	skills: '',
};

const initialFeedbackState = {
	name: '',
	email: '',
	rating: '',
	message: '',
};

function Form() {
	const [studentForm, setStudentForm] = useState(initialStudentState);
	const [studentErrors, setStudentErrors] = useState({});
	const [studentSubmitted, setStudentSubmitted] = useState(null);

	const [feedbackForm, setFeedbackForm] = useState(initialFeedbackState);
	const [feedbackErrors, setFeedbackErrors] = useState({});
	const [feedbackSubmitted, setFeedbackSubmitted] = useState(null);
	const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	const validateStudent = () => {
		const errors = {};
		if (!studentForm.fullName.trim()) errors.fullName = 'Full name is required.';
		if (!studentForm.email.trim()) {
			errors.email = 'Email is required.';
		} else if (!isValidEmail(studentForm.email.trim())) {
			errors.email = 'Please enter a valid email address.';
		}
		if (!studentForm.phone.trim()) {
			errors.phone = 'Phone number is required.';
		} else if (!/^\+?[0-9\s-]{10,15}$/.test(studentForm.phone.trim())) {
			errors.phone = 'Please enter a valid phone number.';
		}
		if (!studentForm.degree) errors.degree = 'Please select your degree/field.';
		if (!studentForm.year) errors.year = 'Please select your year.';
		if (!studentForm.skills.trim()) errors.skills = 'Please enter at least one skill.';
		return errors;
	};
	const validateFeedback = () => {
		const errors = {};
		if (!feedbackForm.name.trim()) errors.name = 'Name is required.';
		if (!feedbackForm.email.trim()) {
			errors.email = 'Email is required.';
		} else if (!isValidEmail(feedbackForm.email.trim())) {
			errors.email = 'Please enter a valid email address.';
		}
		if (!feedbackForm.rating) errors.rating = 'Please select a rating.';
		if (!feedbackForm.message.trim()) errors.message = 'Message is required.';
		return errors;
	};
	const handleStudentChange = (event) => {
		const { name, value } = event.target;
		setStudentForm((prev) => ({ ...prev, [name]: value }));
		setStudentErrors((prev) => ({ ...prev, [name]: '' }));
	};
	const handleFeedbackChange = (event) => {
		const { name, value } = event.target;
		setFeedbackForm((prev) => ({ ...prev, [name]: value }));
		setFeedbackErrors((prev) => ({ ...prev, [name]: '' }));
	};

	const handleStudentSubmit = (event) => {
		event.preventDefault();
		const errors = validateStudent();

		if (Object.keys(errors).length > 0) {
			setStudentErrors(errors);
			setStudentSubmitted(null);
			return;
		}

		setStudentSubmitted({
			...studentForm,
			fullName: studentForm.fullName.trim(),
			email: studentForm.email.trim(),
			phone: studentForm.phone.trim(),
			skills: studentForm.skills.trim(),
		});
		setStudentErrors({});
		setStudentForm(initialStudentState);
	};

	const handleFeedbackSubmit = (event) => {
		event.preventDefault();
		const errors = validateFeedback();

		if (Object.keys(errors).length > 0) {
			setFeedbackErrors(errors);
			setFeedbackSubmitted(null);
			return;
		}

		setFeedbackSubmitted({
			...feedbackForm,
			name: feedbackForm.name.trim(),
			email: feedbackForm.email.trim(),
			message: feedbackForm.message.trim(),
		});
		setFeedbackErrors({});
		setFeedbackForm(initialFeedbackState);
	};

	const inputClassName =
		'w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100';

	const labelClassName = 'mb-2 block text-sm font-semibold text-slate-700';

	return (
		<main className='min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 text-slate-800'>
			<section
				className='relative overflow-hidden border-b border-slate-200 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage:
						"url('https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
							University Job Fair 2026
						</p>
						<h1 className='mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl'>Registration and Feedback Forms</h1>
						<p className='mt-4 max-w-2xl text-base leading-7 text-slate-100/95 sm:text-lg'>
							Register as a student and share your feedback to help us build a better and smoother job fair experience.
						</p>
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
				<div className='grid gap-8 lg:grid-cols-2'>
					<article className='rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8'>
						<h2 className='text-2xl font-extrabold text-slate-900'>Student Registration Form</h2>
						<p className='mt-2 text-slate-600'>Complete your details to register for the University Job Fair.</p>

						<form onSubmit={handleStudentSubmit} className='mt-6 space-y-5'>
							<div>
								<label htmlFor='fullName' className={labelClassName}>Full Name</label>
								<input
									id='fullName'
									name='fullName'
									type='text'
									value={studentForm.fullName}
									onChange={handleStudentChange}
									placeholder='Enter your full name'
									className={inputClassName}
								/>
								{studentErrors.fullName && <p className='mt-1 text-sm text-rose-600'>{studentErrors.fullName}</p>}
							</div>

							<div>
								<label htmlFor='studentEmail' className={labelClassName}>Email</label>
								<input
									id='studentEmail'
									name='email'
									type='email'
									value={studentForm.email}
									onChange={handleStudentChange}
									placeholder='Enter your email'
									className={inputClassName}
								/>
								{studentErrors.email && <p className='mt-1 text-sm text-rose-600'>{studentErrors.email}</p>}
							</div>

							<div>
								<label htmlFor='phone' className={labelClassName}>Phone Number</label>
								<input
									id='phone'
									name='phone'
									type='tel'
									value={studentForm.phone}
									onChange={handleStudentChange}
									placeholder='Enter your phone number'
									className={inputClassName}
								/>
								{studentErrors.phone && <p className='mt-1 text-sm text-rose-600'>{studentErrors.phone}</p>}
							</div>

							<div className='grid gap-5 sm:grid-cols-2'>
								<div>
									<label htmlFor='degree' className={labelClassName}>Degree / Field of Study</label>
									<select
										id='degree'
										name='degree'
										value={studentForm.degree}
										onChange={handleStudentChange}
										className={inputClassName}
									>
										<option value=''>Select degree/field</option>
										{degreeOptions.map((degree) => (
											<option key={degree} value={degree}>
												{degree}
											</option>
										))}
									</select>
									{studentErrors.degree && <p className='mt-1 text-sm text-rose-600'>{studentErrors.degree}</p>}
								</div>

								<div>
									<label htmlFor='year' className={labelClassName}>Year</label>
									<select
										id='year'
										name='year'
										value={studentForm.year}
										onChange={handleStudentChange}
										className={inputClassName}
									>
										<option value=''>Select year</option>
										{yearOptions.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
									{studentErrors.year && <p className='mt-1 text-sm text-rose-600'>{studentErrors.year}</p>}
								</div>
							</div>

							<div>
								<label htmlFor='skills' className={labelClassName}>Skills</label>
								<input
									id='skills'
									name='skills'
									type='text'
									value={studentForm.skills}
									onChange={handleStudentChange}
									placeholder='React, JavaScript, Problem Solving'
									className={inputClassName}
								/>
								{studentErrors.skills && <p className='mt-1 text-sm text-rose-600'>{studentErrors.skills}</p>}
							</div>

							{studentSubmitted && (
								<div className='rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-800'>
									<p className='font-semibold'>Student registration submitted successfully.</p>
									<p className='mt-2'>Name: {studentSubmitted.fullName}</p>
									<p>Email: {studentSubmitted.email}</p>
									<p>Phone: {studentSubmitted.phone}</p>
									<p>Degree: {studentSubmitted.degree}</p>
									<p>Year: {studentSubmitted.year}</p>
									<p>Skills: {studentSubmitted.skills}</p>
								</div>
							)}

							<button
								type='submit'
								className='inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-slate-800 hover:to-cyan-600 hover:shadow-xl'
							>
								Submit Registration
							</button>
						</form>
					</article>

					<article className='rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8'>
						<h2 className='text-2xl font-extrabold text-slate-900'>Feedback Form</h2>
						<p className='mt-2 text-slate-600'>Share your experience to help us improve future job fairs.</p>

						<form onSubmit={handleFeedbackSubmit} className='mt-6 space-y-5'>
							<div>
								<label htmlFor='feedbackName' className={labelClassName}>Name</label>
								<input
									id='feedbackName'
									name='name'
									type='text'
									value={feedbackForm.name}
									onChange={handleFeedbackChange}
									placeholder='Enter your name'
									className={inputClassName}
								/>
								{feedbackErrors.name && <p className='mt-1 text-sm text-rose-600'>{feedbackErrors.name}</p>}
							</div>

							<div>
								<label htmlFor='feedbackEmail' className={labelClassName}>Email</label>
								<input
									id='feedbackEmail'
									name='email'
									type='email'
									value={feedbackForm.email}
									onChange={handleFeedbackChange}
									placeholder='Enter your email'
									className={inputClassName}
								/>
								{feedbackErrors.email && <p className='mt-1 text-sm text-rose-600'>{feedbackErrors.email}</p>}
							</div>

							<div>
								<label htmlFor='rating' className={labelClassName}>Rating</label>
								<select
									id='rating'
									name='rating'
									value={feedbackForm.rating}
									onChange={handleFeedbackChange}
									className={inputClassName}
								>
									<option value=''>Select rating (1-5)</option>
									{ratingOptions.map((rating) => (
										<option key={rating} value={rating}>
											{rating}
										</option>
									))}
								</select>
								{feedbackErrors.rating && <p className='mt-1 text-sm text-rose-600'>{feedbackErrors.rating}</p>}
							</div>

							<div>
								<label htmlFor='feedbackMessage' className={labelClassName}>Message</label>
								<textarea
									id='feedbackMessage'
									name='message'
									rows='5'
									value={feedbackForm.message}
									onChange={handleFeedbackChange}
									placeholder='Write your feedback here'
									className={inputClassName}
								/>
								{feedbackErrors.message && <p className='mt-1 text-sm text-rose-600'>{feedbackErrors.message}</p>}
							</div>

							{feedbackSubmitted && (
								<div className='rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-800'>
									<p className='font-semibold'>Thank you. Your feedback has been submitted.</p>
									<p className='mt-2'>Name: {feedbackSubmitted.name}</p>
									<p>Email: {feedbackSubmitted.email}</p>
									<p>Rating: {feedbackSubmitted.rating}/5</p>
									<p className='mt-1'>Message: {feedbackSubmitted.message}</p>
								</div>
							)}

							<button
								type='submit'
								className='inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-slate-800 hover:to-cyan-600 hover:shadow-xl'
							>
								Submit Feedback
							</button>
						</form>
					</article>
				</div>
			</section>
		</main>
	);
}

export default Form;
