export const PersonalizedLessonUI = () => {
	return (
		<div className='space-y-4'>
			<div className='flex items-start gap-4 justify-between p-4 bg-white rounded-lg shadow-sm'>
				<div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0'>
					<svg
						className='w-6 h-6 text-primary'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
						/>
					</svg>
				</div>
				<div className='flex-1'>
					<div className='bg-primary/10 p-3 rounded-lg rounded-tl-none'>
						<p className='text-gray-700'>Hi Sarah! What would you like to focus on in today's lesson?</p>
					</div>
					<p className='text-xs text-gray-500 mt-1'>Tutor • 10:03 AM</p>
				</div>
			</div>

			<div className='flex justify-between items-start gap-4 p-4 bg-white rounded-lg shadow-sm flex-row-reverse'>
				<div className='w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0'>
					<svg
						className='w-6 h-6 text-secondary'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
						/>
					</svg>
				</div>
				<div className='flex-1'>
					<div className='bg-secondary/10 p-3 rounded-lg rounded-tr-none'>
						<p className='text-gray-700'>
							I have a job interview next week. Can we practice some common interview questions?
						</p>
					</div>
					<p className='text-xs text-gray-500 mt-1 text-right'>You • 10:05 AM</p>
				</div>
			</div>

			<div className='flex justify-between items-start gap-4 p-4 bg-white rounded-lg shadow-sm'>
				<div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0'>
					<svg
						className='w-6 h-6 text-primary'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
						/>
					</svg>
				</div>
				<div className='flex-1'>
					<div className='bg-primary/10 p-3 rounded-lg rounded-tl-none'>
						<p className='text-gray-700'>
							Perfect! Let's customize today's lesson for interview preparation. I'll share some common questions asked
							in Australian companies.
						</p>
					</div>
					<p className='text-xs text-gray-500 mt-1'>Tutor • 10:07 AM</p>
				</div>
			</div>
		</div>
	);
};
