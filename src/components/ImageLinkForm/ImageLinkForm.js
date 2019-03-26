import React, { Component } from "react";
import "./ImageLinkForm.css";

class ImageLinkForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
	}
	onInputChange = event => {
		this.setState({ input: event.target.value });
	};
	render() {
		return (
			<div>
				<p className="f3">
					This magic brain will detect faces in your
					pictures.
				</p>
				<div className="center">
					<div className="form center pa4 br3 shadow-5">
						<input
							type="text"
							className="f4 pa2 w-70 center"
							onChange={this.onInputChange}
						/>
						<button
							onClick={e => {
								e.preventDefault();
								this.props.onSubmit(this.state.input);
							}}
							className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
						>
							Detect
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ImageLinkForm;
