import React from 'react';
import './add-item.css'

class AddItem extends React.Component {

	state = {
		label: ''
	};
	
	onLableChange = (e) => {
		this.setState({
			label:e.target.value
		})
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdded(this.state.label);
		this.setState({
			label:''
		})
	};

	render() {
		return (

			<form className='AddItem'
			onSubmit={this.onSubmit}>
				
				<input type='text'
				placeholder='What else we need to do?'
				onChange = {this.onLableChange}
				value={this.state.label}/>
				<button 
					type="submit" className="btn btn-dark">
					Add Item
				</button>
			</form>
		)
	}
}


export default AddItem;