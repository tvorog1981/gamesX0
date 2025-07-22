import Button from "./UI/Button/Button";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
	const [showGame, setShowGame] = useState(false);
	const [arrGame, setArrGame] = useState(["", "", "", "", "", "", "", "", ""]);
	const [gamers, setGamers] = useState(true);
	function putZnak(index) {
		if (gamers == true) {
			const rez = arrGame.map((e, i) => {
				if (i === index) {
					return "X";
				}

				console.log(i);
				return e;
			});
			console.log(rez);
			setArrGame(rez);
			setGamers(!gamers);
		} else {
			const rez = arrGame.map((e, i) => {
				if (i === index) {
					return "O";
				}

				console.log(i);
				return e;
			});
			console.log(rez);
			setArrGame(rez);
			setGamers(!gamers);
		}
	}
	const ShowGame = () => {
		setShowGame(!showGame);
		if (showGame === false) {
			setArrGame(["", "", "", "", "", "", "", "", ""]);
		}
	};
	return (
		<>
			<button className={styles.beginEnd} onClick={ShowGame}>
				{!showGame ? "Начать игру" : "Закончить игру"}
			</button>
			{showGame && (
				<div className={styles.dev}>
					Разработчик игры Сметанкин Денис Николаевич
				</div>
			)}
			{showGame && (
				<div className={styles.container}>
					<div className={styles.gamerStape}>
						{gamers ? "Ход Игрока:X" : "Ход Игрока:0"}
					</div>

					<div className={styles.field}>
						{arrGame.map((element, index) => {
							return (
								<Button
									type="button"
									key={index}
									onClick={() => putZnak(index)}
								>
									<div className={styles.element}>{element}</div>
								</Button>
							);
						})}
						{/* <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button> */}
					</div>
				</div>
			)}
		</>
	);
}

export default App;
