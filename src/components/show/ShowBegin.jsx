import styles from "./ShowBegin.module.css";
const Show = ({ Show, ShowGame }) => {
	return (
		<button className={styles.beginEnd} onClick={() => Show()}>
			{!ShowGame ? "Начать игру" : "Закончить игру"}
		</button>
	);
};

export default Show;
