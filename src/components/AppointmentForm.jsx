import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {

	// for dropdown list
	const [isOpen, setIsopen] =useState(false)
	const [selectedOption, setSelectedOption] =useState('Select an option');

	const toggleDropdown = () => {
		setIsopen(!isOpen);
	};

	const handleOptionClick = (option)=> {
		setSelectedOption(option);
		setIsopen(false);
	};

	const options =['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5',
		'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10'
	];
	//End


	const [name, setName] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ name, date });
		setName("");
		setDate("");
	};

	return (
		<div className="">
			<form onSubmit={handleSubmit} action="#" method="POST" 
			className="mx-auto mt-16 max-w-xl sm:mt-20">
				<div className="block text-sm font-semibold leading-6 text-gray-900">
					<div className="block text-sm font-semibold leading-6 text-gray-900">
						<label for="fname" className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
					</div>
					<div className="">
						<input
							type="text"
							id="fname"
							required
							name="firstname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="block w-full rounded-md border-0 px-3.5 py-2 
							text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
							focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="block text-sm font-semibold leading-6 text-gray-900">
				    <div className="block text-sm font-semibold leading-6 text-gray-900">
						<label onClick={toggleDropdown} className="block text-sm font-semibold leading-6 text-gray-900">
							{selectedOption}
						</label>
						</div>
						{isOpen && (
							<ul className="block w-full rounded-md border-0 px-3.5 py-2 
							text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
							focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
								{options.map((option) => (
									<li key={option}
									onClick={() => handleOptionClick(option)} >
										{option}
									</li>
								))}
							</ul>
						)}
					</div>
				
				
				<div class="">
					<div class="">
						<label for="fname" className="block text-sm font-semibold 
						leading-6 text-gray-900">Appointment Date: </label>
					</div>
					<div class="block text-sm font-semibold leading-6 text-gray-900">
						<input
							id="fname"
							required
							name="firstname"
							placeholder="Your name.."
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className="block w-full rounded-md border-0 px-1.5 py-2 
							text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
							focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="">
					<input type="submit" value="Add Appointment"
					 className="bg-blue-400 text-white 
					rounded-[.5rem] mt-2
					py-2.5 px-9 font-blod drop-shadow-lg" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;
