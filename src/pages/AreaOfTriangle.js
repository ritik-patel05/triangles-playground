import React, { useState } from 'react';

const AreaOfTriangle = () => {
	const [base, setBase] = useState('');
	const [height, setHeight] = useState('');
	const [result, setResult] = useState('');

	const getAreaOfTriangle = () => {
		if (!base) {
			setResult('Invalid Base');
			return;
		}
		if (!height) {
			setResult('Invalid Height');
			return;
		}
		console.log(typeof base);
		const areaOfTriangle = 0.5 * base * height;
		setResult(`The Area Of Triangle is ${areaOfTriangle.toFixed(2)}`);
	};

	return (
		<main>
			<h1 className='introduction'>Calculate area of a triangle</h1>
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
			<button onClick={getAreaOfTriangle}>Get</button>
			<div className='result'>{result}</div>
		</main>
	);
};

export default AreaOfTriangle;
