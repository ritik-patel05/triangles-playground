import React, { useState } from 'react';

const Quiz = () => {
	const [result, setResult] = useState('');
	const [ques1, setQues1] = useState('');
	const [ques2, setQues2] = useState('');

	const correctAns = ['90°', 'right angled'];

	const submitForm = () => {
		let score = 0;
		if (ques1 === correctAns[0]) {
			++score;
		}
		if (ques2 === correctAns[1]) {
			++score;
		}
		setResult(`Your score is ${score}`);
	};

	return (
		<main>
			<h1 className='introduction'>Quiz on Trainglesss</h1>
			<form className='form-container' action=''>
				<div className='question-container'>
					<h2>
						What is the third angle for the triangle where angle1 =
						45° and angle2 = 45°?
					</h2>
					<label>
						<input
							onClick={(event) => setQues1(event.target.value)}
							type='radio'
							name='ques-1'
							value='45°'
						/>
						45°
					</label>
					<label>
						<input
							onClick={(event) => setQues1(event.target.value)}
							type='radio'
							name='ques-1'
							value='90°'
						/>
						90°
					</label>
					<label>
						<input
							onClick={(event) => setQues1(event.target.value)}
							type='radio'
							name='ques-1'
							value='60°'
						/>
						60°
					</label>
				</div>
				<div className='question-container'>
					<h2>
						If a triangle has an angle of 90 degrees, what is it
						called?
					</h2>
					<label>
						<input
							onClick={(event) => setQues2(event.target.value)}
							type='radio'
							name='ques-2'
							value='obtuse'
						/>
						obtuse
					</label>
					<label>
						<input
							onClick={(event) => setQues2(event.target.value)}
							type='radio'
							name='ques-2'
							value='acute'
						/>
						acute
					</label>
					<label>
						<input
							onClick={(event) => setQues2(event.target.value)}
							type='radio'
							name='ques-2'
							value='right angled'
						/>
						right angled
					</label>
				</div>
			</form>
			<button onClick={submitForm}>Submit Quiz</button>
			<div className='result'>{result}</div>
		</main>
	);
};

export default Quiz;
