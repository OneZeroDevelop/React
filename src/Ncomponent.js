import React, { useState } from 'react';

function Ncomponent() {


const [showedName, setShowedName] = useState('Введите имя пользователя: ');
const [count, setCount] = useState(0);
const [name, setName] = useState('');


const handleSubmit =(event)=>{
		event.preventDefault();
		console.log(name, count)
		console.log('Форма отправлена!')

	}

function handleClick(event) {
		event.preventDefault();
		if(name === "") {
			console.log('Поле имя пустое');
			setShowedName('Введите имя пользователя: ');
		} else {
			setShowedName(name);
		}
	}

return (


		<div>
			<h3>{showedName}</h3>
			<p>Вы кликнули {count} раз(а)</p>

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
