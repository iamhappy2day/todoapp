import React from 'react';

import AppHeader from '../app-header/app-header.js'
import TodoList from '../todo-list/todo-list.js'
import SearchPanel from '../search-panel/search-panel.js'
import ItemStatusFilter from '../item-status-filter/item-status-filter.js'
import AddItem from '../add-item/add-item.js'



class App extends React.Component {

	maxId = 100;

	state = {

		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Play Basketball'),
			this.createTodoItem('Learn React')
		],

		term: '',
		filter: 'all' // All,Active, Done
	};

	createTodoItem (label) {
		return {
			label, important: false, done: false, id: this.maxId++
		}
	}

	deleteItem = (id) => {

		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const before = todoData.slice(0,idx);
			const after = todoData.slice(idx + 1);

			const newArray = [...before, ...after];

			return {
				todoData: newArray
			}

		});
	};

	addItem = (text) => {
			
			// generate id
			const newItem = this.createTodoItem(text);
			
			// add element to Array
			this.setState(({todoData}) => {
				const newArr = [
					...todoData,
					newItem
				]
				return {
					todoData: newArr
				}
			})
	};

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		
		const oldItem = arr[idx];
		const newItem = { ...oldItem,
		  [propName]: !oldItem[propName]};

		 return [
		 	...arr.slice(0, idx),
		 	newItem,
		 	...arr.slice(idx + 1)
		 ];
	};

	onToggleImportant = (id) => {

			this.setState(({todoData}) => {

			 return {
			 	todoData: this.toggleProperty(todoData, id, 'important')
			 };
		});
	};

	onToggleDone = (id) => {

		this.setState(({todoData}) => {

			 return {
			 	todoData: this.toggleProperty(todoData, id, 'done')
			 };
		});
	};

	search (items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label
			.toLowerCase()
			.indexOf(term.toLowerCase()) > -1;
		})
	};

	onSearchChange = (term) => {
		this.setState({ term })
	};

	onFilterChange = (filter) => {
		this.setState({ filter })
	};

	filter(items, filter) {
		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done' :
				return items.filter((item) => item.done);
			default:
				return items;
		}
	}
	render() {
		const {todoData, term, filter} = this.state;

		const visibleItems = this.filter(
			this.search(todoData, term), filter);
		const doneCount = this.state.todoData.filter((el) => el.done).length;
		const todoCount = this.state.todoData.length - doneCount;
		return (
			<div className='app'>
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className='top-panel d-flex'>
					<SearchPanel
						onSearchChange= {this.onSearchChange} />
					<ItemStatusFilter
					 filter={filter}
					 onFilterChange={this.onFilterChange} />
				</div>
				<TodoList 
					todos = {visibleItems} 
					onDeleted = {this.deleteItem }
					onToggleDone = {this.onToggleDone}
					onToggleImportant = {this.onToggleImportant}/>
				<AddItem
					onAdded = {this.addItem} />
			</div>
		)
	}
}



export default App;