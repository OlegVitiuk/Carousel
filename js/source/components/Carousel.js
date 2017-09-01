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
		return data.map((obj)=>{
			 return (
			 	<Slide 
					image={obj.image}
					key={obj.index}
			/>
			);
		})
	}
	onResize(){
		console.log("resizing");
	}
	componentDidMount() {
		window.addEventListener('resize',this.onResize);
	}
	componentWillUnmount() {
		window.removeEventListener('resize',this.onResize);
	}
	handleLeftNav(e){
		const {
			carouselViewPort} = this.refs;
			var widthOfSlide = 500;
			var newPos = carouselViewPort.scrollLeft - widthOfSlide;
			//var newPos = carouselViewPort.scrollLeft + carouselViewPort.offsetWidth;
			var timeToMoveOneSlide = 200;
			scrollTo({
				element: carouselViewPort,
				to: newPos,
				duration: timeToMoveOneSlide,
				scrollDirection: 'scrollLeft'
			});
	}

	handleRightNav(e){
		const {
			carouselViewPort} = this.refs;
			var widthOfSlide = 500;
			var newPos = carouselViewPort.scrollLeft  + widthOfSlide;
			//var newPos = carouselViewPort.scrollLeft + carouselViewPort.offsetWidth;
			var timeToMoveOneSlide = 200;
			scrollTo({
				element: carouselViewPort,
				to: newPos,
				duration: timeToMoveOneSlide,
				scrollDirection: 'scrollLeft'
			});
	}

	render() {
		return (
				<div className="wrapper">
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