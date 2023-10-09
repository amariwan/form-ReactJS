import { object, string } from 'yup';
import * as yup from 'yup';

const Validations = object({
	email: string().email('Please enter a valid email address').required('This field is required'),
	password: string()
		.min(5, 'Password must be at least 5 characters long')
		.required('This field is required'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('This field is required'),
});

export default Validations;
