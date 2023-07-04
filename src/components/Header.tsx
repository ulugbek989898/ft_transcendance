import "../styles/Header.style.css";
import { Link, useLocation } from 'react-router-dom';

export default function  Header() {
	const listHeader: string[] = ["home", "chat", "game", "leaderboard", "friends", "profile"];
	const location = useLocation();
	console.log(location);
	return (
	<header className="header-container">
		<h1 className="header-title">Logo</h1>
		<nav className="header-nav">
			<ul className="header-nav-list">
			{
				listHeader.map((list, index) => {
					return (
						<li className="header-nav-item" key={index}>
							<Link
							 to={"/" + list}
							 className={(location.pathname === ("/" + list)) ? "header-nav-link active" : "header-nav-link"} >
								{list.toUpperCase()}
							</Link>
						</li>
					)
				})
			}
			</ul>
		</nav>
	</header>
	);
};
