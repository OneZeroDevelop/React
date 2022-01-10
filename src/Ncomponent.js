import React, { useState } from 'react';

function Ncomponent() {


	class Example extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				name: ''
			}
		}
	}

	 const [count, setCount] = useState(0);
	 const [name, setName] = useState('');


	const handleSubmit =(event)=>{
		event.preventDefault();
		console.log(name, count)
		console.log('Кликнуто')
	}

	function handleClick(event) {
		event.preventDefault();
		console.log('хоба');
	}

	if (name === "") {
		console.log('В поле имя ничего не вписанно!');
	} else {
		console.log('В поле имя вписанно :' + name);
	}

return (


		<div>
			<h3>{name}</h3>
			<p>Вы кликнули {count} раз(а) </p>

			<button onClick={() => setCount(count + 1)}>Нажми на меня</button>


			<button onClick={() => setCount(count - 1)}>-</button>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>+</button>


			<form onSubmit={handleSubmit}>
				<input name="name" placeholder="Введите новое имя" value={name} onChange={(event)=>setName(event.target.value)} />
				<button onClick={handleClick}>Изменить имя</button>
			</form>


		</div>

	)

}

export default Ncomponent;
