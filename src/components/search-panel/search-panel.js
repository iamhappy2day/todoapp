import React from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter.js'
import './search-panel.css'

/* const SearchPanel = () => {
	return (
		<div className='search-panel'>

			<div className='search'>

				<input type='text' 
				placeholder='type to search' />

			</div>
			<div className='filter'>
				<ItemStatusFilter />
			</div>

		</div>
	);
}; */


class SearchPanel extends React.Component {

	state = {
		term: ''
	}

	onSearchChange = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearchChange(term);
	}

	render () { 
		return (
			<div className='search-panel'>

				<div className='search'>

					<input type='text' 
					placeholder='type to search' 
					value ={this.state.term}
					onChange={this.onSearchChange}/>

				</div>
			</div>
		);
	};

}
export default SearchPanel;
