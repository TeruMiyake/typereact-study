// src/components/DragAndDrop.tsx
import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const DragAndDrop: React.FC = () => {
	const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();

		const files = Array.from(e.dataTransfer.files);
		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				const result = event.target?.result;
				if (typeof result === 'string') {
					const id = uuidv4();
					localStorage.setItem(id, result);
				}
			};
			reader.readAsDataURL(file);
		});
	}, []);

	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		<div
			style={{
				width: '100%',
				minHeight: '200px',
				border: '2px dashed gray',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
			onDrop={onDrop}
			onDragOver={onDragOver}
		>
			<p>Drag and drop images here</p>
		</div>
	);
};
