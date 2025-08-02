import styles from "./ShowDev.module.css";
const ShowDev = ({ showGame }) => {
	return (
		<>
			{showGame && (
				<div className={styles.dev}>
					Разработчик игры Сметанкин Денис Николаевич
				</div>
			)}
		</>
	);
};

export default ShowDev;
