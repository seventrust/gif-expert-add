import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	//! Uso del CUSTON Hook para limpiar del componente la logica
	//! de solicitudes y otras hierbas
	const { data: images, loading } = useFetchGifs(category);

	return (
		<Fragment>
			<h3 className="animate__animated animate__flash"> {category} </h3>
			{loading && (
				<p className="animate__animated animate__pulse">Cargando...</p>
			)}
			{
				<div className="card-grid">
					<ol>
						{images.map((img) => {
							return <GifGridItem key={img.id} {...img} />;
						})}
					</ol>
				</div>
			}
		</Fragment>
	);
};
