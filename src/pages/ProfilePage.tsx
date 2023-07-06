import Container from "../components/Container";
import Header from "../components/Header";
import HorizontalLine from "../components/HorizontalLine";
import PersonalInfo from "../components/PersonalInfo";

export default function ProfilePage() {
	return (
		<Container>
			<>
				<Header />
				<PersonalInfo />
				<HorizontalLine />
			</>
		</Container>
	)
};