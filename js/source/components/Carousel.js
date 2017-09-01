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
		const {
			carouselViewPort} = this.refs;
			var numberOfSlidesToScroll = 4;
			var widthOfSlide = 120;
			var newPos = carouselViewPort.scrollLeft - (widthOfSlide*numberOfSlidesToScroll);
			//var newPos = carouselViewPort.scrollLeft + carouselViewPort.offsetWidth;
			var timeToMoveOneSlide = 200;
			var totalTimeToMove = Math.min((numberOfSlidesToScroll * timeToMoveOneSlide),400);
			scrollTo({
				element: carouselViewPort,
				to: newPos,
				duration: totalTimeToMove,
				scrollDirection: 'scrollLeft'
			});
	}

	handleRightNav(e){
		const {
			carouselViewPort} = this.refs;
			var numberOfSlidesToScroll = 4;
			var widthOfSlide = 120;
			var newPos = carouselViewPort.scrollLeft + (widthOfSlide*numberOfSlidesToScroll);
			//var newPos = carouselViewPort.scrollLeft + carouselViewPort.offsetWidth;
			var timeToMoveOneSlide = 200;
			var totalTimeToMove = Math.min((numberOfSlidesToScroll * timeToMoveOneSlide),400);
			scrollTo({
				element: carouselViewPort,
				to: newPos,
				duration: totalTimeToMove,
				scrollDirection: 'scrollLeft'
			});
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