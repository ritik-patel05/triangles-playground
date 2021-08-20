import React, { useState } from 'react';

const CheckTriangle = () => {
	const [angle1, setAngle1] = useState('');
	const [angle2, setAngle2] = useState('');
	const [angle3, setAngle3] = useState('');
	const [result, setResult] = useState('');

	const getHypotenuse = () => {
		if (!angle1) {
			setResult('Invalid angle 1');
			return;
		}
		if (!angle2) {
			setResult('Invalid angle 2');
			return;
		}
		if (!angle3) {
			setResult('Invalid angle 3');
		}

		const sumOfAngles = angle1 + angle2 + angle3;
		if (sumOfAngles === 180) {
			setResult('Yes, Its a triangle');
		} else {
			setResult('No, Not a triangle');
		}
	};

	return (
		<main>
			<h1 className='introduction'>Check if it is a Triangle</h1>
			<label htmlFor='base'>Enter angle 1</label>
			<input
				onChange={(event) => setAngle1(event.target.value)}
				type='number'
				id='base'
			/>
			<label htmlFor='height'>Enter angle 2</label>
			<input
				onChange={(event) => setAngle2(event.target.value)}
				type='number'
				id='height'
			/>
			<label htmlFor='height'>Enter angle 3</label>
			<input
				onChange={(event) => setAngle3(event.target.value)}
				type='number'
				id='height'
			/>
			<button onClick={getHypotenuse}>Check</button>
			<div className='result'>{result}</div>
		</main>
	);
};

export default CheckTriangle;
