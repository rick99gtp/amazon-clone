import "./Login.css";
import logo from "../assets/amazon-logo-white.jpg";
import { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import "../firebase";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailMessage, setEmailMessage] = useState("");
	const [passwordMessage, setPasswordMessage] = useState("");
	const passwordRef = useRef();

	const history = useHistory();

	const signin = (e) => {
		e.preventDefault();

		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				//signed in
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(errorCode);
				errorMessageHandler(errorCode);
			});
	};

	const errorMessageHandler = (errorCode) => {
		if (errorCode === "auth/invalid-email") {
			setEmailMessage("Please enter a valid email.");
		}
		if (errorCode === "auth/missing-password") {
			setPasswordMessage("Please enter a valid password.");
		}
		if (errorCode === "auth/weak-password") {
			setPasswordMessage("Password should be at least 6 characters.");
		}
		if (errorCode === "auth/email-already-in-use") {
			setEmailMessage("Email already in use.");
			setPasswordMessage("");
		}
		if (errorCode === "auth/wrong-password") {
			setPasswordMessage("Wrong password entered.");
		}
	};

	const createAccount = (e) => {
		e.preventDefault();

		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				errorMessageHandler(errorCode);
			});
	};

	const showPasswordHandler = (e) => {
		passwordRef.current.type = e.target.checked ? "text" : "password";
	};

	useEffect(() => {
		const auth = getAuth();
		auth.signOut();
	}, []);

	return (
		<div className="login">
			<Link to="/">
				<img src={logo} alt="Amazon Logo" />
			</Link>
			<div className="login-container">
				<form>
					<h1>Sign-In</h1>
					<p>Email</p>
					<input
						id="login-email"
						className="login-input"
						type="text"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailMessage("");
						}}
					/>
					{emailMessage.length > 0 ? (
						<p className="error-message">{emailMessage}</p>
					) : (
						""
					)}
					<p>Password</p>
					<input
						ref={passwordRef}
						id="login-password"
						className="login-input"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							if (e.target.value.length > 5) {
								setPasswordMessage("");
							}
						}}
					/>
					{passwordMessage.length > 0 ? (
						<p className="error-message">{passwordMessage}</p>
					) : (
						""
					)}
					<input
						type="checkbox"
						id="show-password"
						onChange={showPasswordHandler}
					/>
					<label htmlFor="show-password"> Show Password</label>
					<button id="login-btn" className="login-button" onClick={signin}>
						Sign In
					</button>
				</form>
				<p>
					By signing-in, you agree with my Amazon Clone Conditions of Use and
					Privacy Notice.
				</p>
				<button
					className="login-button login-createaccount"
					onClick={createAccount}
				>
					Create an Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
