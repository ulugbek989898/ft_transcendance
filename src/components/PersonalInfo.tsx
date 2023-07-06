import profilePicture from "../images/profile.jpg"
import "../styles/PersonalInfo.style.css"

export default function PersonalInfo() {
	return (
		<div className="personal-info">
			<div className="personal-info-box">
				<img src={profilePicture} alt="Profile" className="personal-img" />
				<h2>Ulugbek Isroilov</h2>
				{/* <button >Edit</button> */}
			</div>
		</div>
	)
}