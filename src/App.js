import React, {Component} from 'react';
import CardList from './CardList';
import {dev} from './dev';
import SearchBox from './SearchBox';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
                    particles: {
            			number: {
            				value: 90,
            				density: {
            					enable: true,
            					value_are: 800
            				}
            			}
            		}
            	}
class App extends Component {
	constructor() {
		super()
		this.state = {
			dev: dev,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}
	render () {
		const filteredDev= this.state.dev.filter(dev =>{
			return dev.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
        <h1>Developer Team</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<CardList dev={filteredDev}/>
		<Particles className='particles'
                params={particlesOptions}
        />
        <h4>Made with <span role="img" aria-label="Love">❤️</span> by Pranshu Kumbhare</h4>
		</div>
		);
	}
}

export default App;