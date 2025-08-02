import styles from "./ShowStep.module.css";
const ShowStep = ({ gamers }) => {
	return (
		<div className={styles.gamerStape}>
			{gamers ? "Ход Игрока:X" : "Ход Игрока:0"}
		</div>
	);
};

export default ShowStep;
