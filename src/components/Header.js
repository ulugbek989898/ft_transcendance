import "../styles/Header.style.css";
import { Link } from 'react-router-dom';

export default function  Header() {
	const listHeader = ["home", "chat", "game", "leaderboard", "friends", "profile"];
	return (
	<header className="header-container">
		<h1 className="header-title">Your Website</h1>
		<nav className="header-nav">
			<ul className="header-nav-list">
			{
				listHeader.map((list, index) => {
					return (
						<li className="header-nav-item" key={index}>
							<Link to={"/" + list} className="header-nav-link">{list.toUpperCase()}</Link>
						</li>
					)
				})
			}
			</ul>
		</nav>
	</header>
	);
};
