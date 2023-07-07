import Container from "../components/Container";
import Header from "../components/Header";
import HorizontalLine from "../components/HorizontalLine";
import PersonalInfo from "../components/PersonalInfo";
import Tabs from "../components/Tabs";

export default function ProfilePage() {
	return (
		<Container>
			<>
				<Header />
				<PersonalInfo />
				{/* <HorizontalLine /> */}
				<Tabs />
			</>
		</Container>
	)
};