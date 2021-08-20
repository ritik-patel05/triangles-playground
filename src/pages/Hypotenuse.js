import React, { useState } from 'react';

const Hypotenuse = () => {
	const [base, setBase] = useState('');
	const [height, setHeight] = useState('');
	const [result, setResult] = useState('');

	const getHypotenuse = () => {
		if (!base) {
			setResult('Invalid Base');
			return;
		}
		if (!height) {
			setResult('Invalid Height');
			return;
		}

		const hypotenuse = Math.sqrt(base * base + height * height);
		setResult(`The hypotenuse is ${hypotenuse.toFixed(2)}`);
	};

	return (
		<main>
			<h1 className='introduction'>Calculate Hypotenuse of a triangle</h1>
			<label htmlFor='base'>Enter base</label>
			<input
				onChange={(event) => setBase(event.target.value)}
				type='number'
				id='base'
			/>
			<label htmlFor='height'>Enter height</label>
			<input
				onChange={(event) => setHeight(event.target.value)}
				type='number'
				id='height'
			/>
			<button onClick={getHypotenuse}>Get</button>
			<div className='result'>{result}</div>
		</main>
	);
};

export default Hypotenuse;
