import React, { Component } from "react";
import Error from "../Error";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			error: { isError: false, message: "" }
		};
	}

	dismissError = e => {
		e.preventDefault();
		this.setState({
			error: { isError: false, message: "" }
		});
	};

	onInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			error: { isError: false, message: "" }
		});
	};

	onSubmitRegister = () => {
		if (
			this.state.email !== "" &&
			this.state.password !== "" &&
			this.state.name !== ""
		) {
			fetch(
				"https://intense-sierra-83282.herokuapp.com/register",
				{
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: this.state.name,
						email: this.state.email,
						password: this.state.password
					})
				}
			)
				.then(response => {
					if (response.status !== 400) {
						return response.json();
					} else {
						return false;
					}
				})
				.then(user => {
					if (user) {
						this.props.loadUser(user);
						this.props.onRouteChange("home");
					} else {
						this.setState({
							...this.state,
							error: {
								isError: true,
								message: "Already taken. Try again"
							}
						});
					}
				});
		} else {
			this.setState({
				error: {
					isError: true,
					message: "Enter registration info!"
				}
			});
		}
	};

	render() {
		const { error } = this.state;
		return (
			<article className="br3 ba b--black-10 mv4 w-100 shadow-5 mw6 center">
				<main className="pa4 black-80">
					<div className="measure w-100 mw5">
						<Error
							isError={error.isError}
							message={error.message}
							onClose={this.dismissError}
						/>
						<fieldset
							id="sign_up"
							className="ba b--transparent ph0 mh0"
						>
							<legend className="center f4 fw6 ph0 mh0">
								Register
							</legend>
							<div className="mt3">
								<label
									className="db fw6 lh-copy f6"
									htmlFor="name"
								>
									Name
								</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="text"
									name="name"
									id="name"
									onChange={this.onInputChange}
								/>
							</div>
							<div className="mt3">
								<label
									className="db fw6 lh-copy f6"
									htmlFor="email-address"
								>
									Email
								</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="email"
									name="email"
									id="email-address"
									onChange={this.onInputChange}
								/>
							</div>
							<div className="mv3">
								<label
									className="db fw6 lh-copy f6"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="password"
									name="password"
									id="password"
									onChange={this.onInputChange}
								/>
							</div>
						</fieldset>
						<div className="">
							<input
								className="br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-5"
								type="submit"
								value="Register"
								onClick={this.onSubmitRegister}
							/>
						</div>
					</div>
				</main>
			</article>
		);
	}
}

export default Register;
