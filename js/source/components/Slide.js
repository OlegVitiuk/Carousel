import React,{Component} from 'react'

class Slide extends Component{
	render(){
		const {image} = this.props;
		return(
			<div className="container">
				<div className='item' style={{backgroundImage: `url(${image})`}}>

				</div>
			</div>
			);
	}
}

export default Slide