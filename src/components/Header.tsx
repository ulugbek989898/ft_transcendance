import "../styles/Header.style.css";
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import chatIcon from '../images/chatIcon.png'
import gameIcon from '../images/gameIcon.png'
import friendIcon from '../images/userIcon.png'

export default function  Header() {
	const listHeader: string[] = ["home", "users", "chat", "game"];
	const location = useLocation();
	return (
	<header className="header-container">
		<nav className="header-nav">
			<img src={logo} alt="Logo" className="logo" />
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
		<nav className="header-nav">
			<ul className="header-nav-list">
				<li className="header-nav-item">
					<img src={friendIcon} alt="user" className="user-icon icon" />
				</li>
				<li className="header-nav-item">
					<img src={chatIcon} alt="chat" className="chat-icon icon" />
				</li>
				<li className="header-nav-item">
					<img src={gameIcon} alt="game" className="game-icon" />
				</li>
				<li className="header-nav-item">
					<Link
					to={"/profile"}
					className={(location.pathname === ("/profile")) ? "header-nav-link active" : "header-nav-link"} >
						PROFILE
					</Link>
				</li>
				
			</ul>
		</nav>
	</header>
	);
};
