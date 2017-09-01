import React, {Component} from 'react';
import data from '../../../data.json'
import Slide from './Slide'

class Carousel extends Component{

	renderSlides(){
		return data.map((state)=>{
			 return (
			 	<Slide 
					name={state.name}
					key={state.abbreviation}
			/>
			);
		})
	}
	render() {
		return (
				<div className="container">
					<button className="nav left-nav"></button>
					<div className="viewPort">
						{this.renderSlides()}
					</div>
					<button className="nav right-nav"></button>
				</div>
			)
	}
};

export default Carousel