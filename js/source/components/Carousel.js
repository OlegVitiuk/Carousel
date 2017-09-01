import React, {Component} from 'react';
import data from '../../../data.json'
import Slide from './Slide'
import scrollTo from '../scrollTo'

class Carousel extends Component{
	constructor(props) {
		super(props);
		this.handleLeftNav = this.handleLeftNav.bind(this);
		this.handleRightNav = this.handleRightNav.bind(this);
		this.resizing = this.resizing.bind(this);
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
	resizing(){
        const {
            carouselViewPort} = this.refs;
        	carouselViewPort.scrollLeft = 0;
	}
	componentDidMount(){
		window.addEventListener('resize',this.resizing)
	}
	navHandler(flag){
        const {
            carouselViewPort} = this.refs;
        if(window.innerWidth>515){
            var widthOfSlide = 404;
        }else{
            var widthOfSlide = 340;
        }
        if(flag) {
            var newPos = carouselViewPort.scrollLeft + widthOfSlide;
        }else{
            var newPos = carouselViewPort.scrollLeft - widthOfSlide;
		}
        var timeToMoveOneSlide = 200;
        scrollTo({
            element: carouselViewPort,
            to: newPos,
            duration: timeToMoveOneSlide,
            scrollDirection: 'scrollLeft'
        });
	}
	handleLeftNav(){
		this.navHandler(false);
	}

	handleRightNav(){
        this.navHandler(true);
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