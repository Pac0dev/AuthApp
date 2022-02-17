import { useState } from "react"

const useForm = (initialState = {}) => {

	const [formValues, setFormValues] = useState(initialState);

	const handleInputChange = ({target}) => {

		const {value, name} = target;

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const resetForm = (resetObj = initialState) => setFormValues(resetObj);

	return [formValues, handleInputChange, resetForm];
}

export default useForm;