import { Container } from "react-bootstrap";
import LearnTable from "../components/learn/LearnTable";

const preRideData = [
	["T", "Tires and Wheels"],
	["C", "Controls"],
	["L", "Lights and Electrics"],
	["O", "Oil and other fluids"],
	["C", "Chassis"],
	["S", "Stands"],
];
const basicOpData = [
	["Fuel:", "If equipped, turn fuel supply valve on"],
	["Ignition:", "Turn ignition to on"],
	["Neutral:", "Be in neutral"],
	["Engine Switch:", "Put switch in on/run position"],
	["Choke & Clutch:", "Set the choke and squeeze in clutch lever"],
];
const practiceDrillsData = [
	["Emergency Motorcycle Stop"],
	["Emergency Motorcycle Swerve"],
	["Slow Speed Maneuvers"],
	["Motorcycle Cornering & Weaving"],
	["Crossing an obstacle with your motorcycle"],
	["Counter Steering"],
];
const safetyData = [
	["All the gear, all the time"],
	["Inspect motorcycle before each ride"],
	["Check weather conditions"],
	["Be visible"],
	["Stay in comfort zone"],
];

function LearnPage() {
	return (
		<Container style={{ marginTop: "40px", marginBottom: "70px" }}>
			<h3>Learn</h3>
			<LearnTable title="Safety" data={safetyData} />
			<LearnTable title="Pre-Ride Inspection" data={preRideData} />
			<LearnTable title="Basic Operation" data={basicOpData} />
			<LearnTable title="Practice/Drills" data={practiceDrillsData} />
			<LearnTable title="Videos" data={[["No data..."]]} />
			<LearnTable title="Articles" data={[["No data..."]]} />
		</Container>
	);
}

export default LearnPage;
