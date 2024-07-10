import React, { useState } from "react";

import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";
import Navbar from "../Navbar";


const Booking = () => {
	const [appointments, setAppointments] = useState([]);

	const addAppointment = (appointment) => {
		setAppointments([...appointments, appointment]);
	};

	const deleteAppointment = (index) => {
		const deletedAppointments = [...appointments];
		deletedAppointments.splice(index, 1);
		setAppointments(deletedAppointments);
	};

	const editAppointment = (index, editedName, editedDate) => {
		const updatedAppointments = [...appointments];
		updatedAppointments[index] = {
			name: editedName,
			date: editedDate,
		};
		setAppointments(updatedAppointments);
	};

	const clearAppointments = () => {
		setAppointments([]);
	};

	return (
		
		<div className="flex flex-col min-h-screen text-center">
			< Navbar />
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Appointment Management System</h1>
			<AppointmentForm addAppointment={addAppointment} /> <br /> <br />
			<AppointmentList
				appointments={appointments}
				deleteAppointment={deleteAppointment}
				clearAppointments={clearAppointments}
				editAppointment={editAppointment} 
				 
			/>
		</div>
	);
};

export default Booking;
