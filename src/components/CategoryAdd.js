import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Category Add"
				onChange={handleInputChange}
				value={inputValue}
			/>
		</form>
	);
};

CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;
