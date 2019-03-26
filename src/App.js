import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticleBackground from "./components/ParticleBackground";
import Error from "./components/Error";

import "./App.css";

import apiCall from "./lib/apiCall";
import calculateBoundingBox from "./lib/calculateBoundingBox";

const initialState = {
	imageUrl: "",
	box: {},
	route: "signin",
	isSignedIn: false,
	error: { isError: false, message: "" },
	user: {
		id: "",
		name: "",
		email: "",
		entries: 0,
		joined: ""
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = user => {
		const { id, name, email, entries, joined } = user;
		this.setState({
			user: { id, name, email, entries, joined }
		});
	};

	onImageLoaded = async () => {
		const image = document.getElementById("inputImage");
		const { user, imageUrl } = this.state;
		const { faceLocation, entries } = await apiCall(
			user.id,
			imageUrl
		);
		const box = calculateBoundingBox(
			faceLocation,
			image.width,
			image.height
		);
		this.displayFaceBox(box);
		this.updateEntries(entries);
	};

	onRouteChange = route => {
		if (route === "home") {
			this.setState({ isSignedIn: true });
		} else if (route === "signout") {
			this.setState({ ...initialState });
		}
		this.setState({ route: route });
	};

	displayFaceBox = box => {
		this.setState({ box: box });
	};

	updateEntries = entries => {
		this.setState({
			user: { ...this.state.user, entries: entries }
		});
	};

	setImage = imageUrl => {
		if (imageUrl !== "") {
			this.setState({ imageUrl: imageUrl });
		} else {
			this.setState({
				error: {
					isError: true,
					message: "Must enter image URL!"
				}
			});
		}
	};

	dismissError = e => {
		e.preventDefault();
		this.setState({
			error: { isError: false, message: "" }
		});
	};

	render() {
		const {
			isSignedIn,
			imageUrl,
			box,
			route,
			error
		} = this.state;
		const user = this.state.user;

		return (
			<div className="App">
				<ParticleBackground />
				<Navigation
					onRouteChange={this.onRouteChange}
					isSignedIn={isSignedIn}
				/>
				<Logo />
				{route === "home" ? (
					<div>
						<Rank entries={user.entries} name={user.name} />
						<ImageLinkForm onSubmit={this.setImage} />
						<div
							className="center"
							style={{ paddingTop: "1rem" }}
						>
							{error ? (
								<Error
									isError={error.isError}
									message={error.message}
									onClose={this.dismissError}
								/>
							) : (
								<FaceRecognition
									box={box}
									imageUrl={imageUrl}
									onImageLoaded={this.onImageLoaded}
								/>
							)}
						</div>
					</div>
				) : route === "signin" ? (
					<Signin
						loadUser={this.loadUser}
						onRouteChange={this.onRouteChange}
					/>
				) : (
					<Register
						loadUser={this.loadUser}
						onRouteChange={this.onRouteChange}
					/>
				)}
			</div>
		);
	}
}

export default App;
