import React from 'react';
import { useFormik } from 'formik';

// Separate Komponente für die Input-Felder
function InputField({ name, label, type, handleChange, value }) {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				value={value}
				placeholder={label}
			/>
			<br />
		</div>
	);
}

// Separate Komponente für Hobbys
function HobbiesField({ hobbies, handleChange }) {
	return (
		<div>
			<label>Hobbies</label>
			<br />
			{hobbies.map((hobby) => (
				<div key={hobby}>
					<label>{hobby}</label>
					<input type='checkbox' name='hobbies' value={hobby} onChange={handleChange} />
				</div>
			))}
			<br />
		</div>
	);
}

function App() {
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			gender: '',
			hobbies: [],
			country: 'Kurdistan',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const hobbiesList = ['Football', 'Table Tennis', 'Swimming'];

	return (
		<div className='App'>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<InputField
					name='firstName'
					label='First Name'
					type='text'
					handleChange={handleChange}
					value={values.firstName}
				/>

				<InputField
					name='lastName'
					label='Last Name'
					type='text'
					handleChange={handleChange}
					value={values.lastName}
				/>

				<InputField
					name='email'
					label='Email'
					type='email'
					handleChange={handleChange}
					value={values.email}
				/>

				<label>Gender</label>
				<br />
				<input
					type='radio'
					name='gender'
					value='male'
					onChange={handleChange}
					checked={values.gender === 'male'}
				/>
				<label>Male</label>

				<input
					type='radio'
					name='gender'
					value='female'
					onChange={handleChange}
					checked={values.gender === 'female'}
				/>
				<label>Female</label>
				<br />

				<HobbiesField hobbies={hobbiesList} handleChange={handleChange} />

				<label>Country</label>
				<br />
				<select name='country' value={values.country} onChange={handleChange}>
					<option value='Kurdistan'>Kurdistan</option>
					<option value='USA'>USA</option>
					<option value='England'>England</option>
				</select>

				<br />
				<br />
				<button type='submit'>Submit</button>
				<br />
				<br />
				<code>{JSON.stringify(values)}</code>
			</form>
		</div>
	);
}

export default App;
