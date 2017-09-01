import React, {Component} from 'react';
import data from '../../../data.json'
import Slide from './Slide'
import scrollTo from '../scrollTo'

class Carousel extends Component{
	constructor(props) {
		super(props);
		this.handleLeftNav = this.handleLeftNav.bind(this);
		this.handleRightNav = this.handleRightNav.bind(this);
	}

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

	handleLeftNav(e){
		console.log("left clicked", this)
	}

	handleRightNav(e){
		const {
			carouselViewPort} = this.refs;
			var numberOfSlidesToScroll = 3.5;
			var widthOfSlide = 120;
			var newPos = carouselViewPort.scrollLeft + (widthOfSlide*numberOfSlidesToScroll);
			var timeToMoveOneSlide = 200;
			var totalTimeToMove = (numberOfSlidesToScroll * timeToMoveOneSlide);
			scrollTo(carouselViewPort,newPos,totalTimeToMove,'scrollLeft');
	}

	render() {
		return (
				<div className="container">
					<button 
						className="nav left-nav"
						onClick={this.handleLeftNav}

					>&#60;</button>
					<div className="viewPort" ref="carouselViewPort">
						{this.renderSlides()}
					</div>
					<button 
						className="nav right-nav"
						onClick={this.handleRightNav}
						>&#62;</button>
				</div>
			)
	}
};

export default Carousel