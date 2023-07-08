import "../styles/LoginPage.style.css"

export default function LoginPage () {
	const url = process.env.REACT_APP_API_URL;
	return (
		<div className="main">
			<a href={url} className="link-redirect" >Login from 42</a>
		</div>
	);
}