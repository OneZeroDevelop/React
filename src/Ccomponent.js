import React, { Component, useState } from 'react';
import Menu from './Menu.js';
import './stylesNew.css';
import { Button } from '@material-ui/core';


 
export default class Ccomponent extends Component {


	constructor(props) {
		super(props)


		this.state = {
			input: "",
			items: [],
			status: "non-reset"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetFunction = this.resetFunction.bind(this);

}
	
	

	
	handleChange(event) {

		this.setState({
			input: event.target.value
		})
	}



	handleSubmit(event) {
		event.preventDefault()
		this.setState({
			input: this.state.input,
			items: [...this.state.items, this.state.input]
		});
	}

	resetFunction() {
		this.setState({
			input: "",
			items: [],
			status: "reseted"
		})

	}


render() {

		return(

			<div>

			 <h1 className="hello"> Hello react</h1>
				

				<form onSubmit={this.handleSubmit}>
					<input className="customInput" value={this.state.input} onChange={this.handleChange}/>
					<Button className="customButton" type="submit" variant="contained" color="secondary">Submit</Button>
					<Button className="customButton" onClick={this.resetFunction} variant="contained" color="primary">Reset</Button>
					

				</form>
				<h5>input contain : {this.state.input}</h5>

				
				<h5>Controlled input: </h5>
				<h2>State is  {this.state.status}</h2>

				<ul>

					{this.state.items.map(
						(item, index) => (
							<li key={index}>{item}</li>
							)
						)}
				</ul>
				
			</div>

			)
}

}
Ccomponent.defaultProps = {name: "username"}

