import React, { Fragment, useState } from 'react';
import CategoryAdd from './CategoryAdd';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
	//const categories = ["Samurai X", "One Punch", "Dragon Ball Z"];
	const [categories, setCategories] = useState([]);

	/* const handleAdd = () => {

        setCategories((cats) => [...cats, category]);
    }; */

	return (
		<Fragment>
			<h1>GifExpertApp</h1>
			<hr></hr>
			<CategoryAdd setCategories={setCategories} />
			<ol>
				{categories.map((category) => (
					<GifGrid category={category} key={category} />
				))}
			</ol>
		</Fragment>
	);
};
