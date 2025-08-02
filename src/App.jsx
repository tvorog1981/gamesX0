import styles from "./App.module.css";
import { useEffect, useState } from "react";
import ListItem from "./components/listItem/ListItme";
import ShowBegin from "./components/show/ShowBegin";
import ShowDev from "./components/ShowDev/ShowDev";
import ShowStep from "./components/ShowStep/ShowStep";
function App() {
	const [showGame, setShowGame] = useState(false);
	let [arrGame, setArrGame] = useState(["", "", "", "", "", "", "", "", ""]);
	const [gamers, setGamers] = useState(true);
	const [countStep, setCountStep] = useState(0);
	// useEffect(() => {
	// 	win();
	// }, [arrGame]);
	const win = (rez) => {
		// const rez = arrGame;
		console.log(countStep);
		if (
			(rez[0] === "X" && rez[1] === "X" && rez[2] === "X") ||
			(rez[3] === "X" && rez[4] === "X" && rez[5] === "X") ||
			(rez[6] === "X" && rez[7] === "X" && rez[8] === "X") ||
			(rez[0] === "X" && rez[4] === "X" && rez[8] === "X") ||
			(rez[2] === "X" && rez[4] === "X" && rez[6] === "X") ||
			(rez[0] === "X" && rez[3] === "X" && rez[6] === "X") ||
			(rez[1] === "X" && rez[4] === "X" && rez[7] === "X") ||
			(rez[2] === "X" && rez[5] === "X" && rez[8] === "X")
		) {
			setArrGame(["", "", "", "", "", "", "", "", ""]);
			setGamers(() => true);
			setCountStep(() => 0);
			alert("Выграл игрок игравший за X");
		}

		if (
			(rez[0] === "O" && rez[1] === "O" && rez[2] === "O") ||
			(rez[3] === "O" && rez[4] === "O" && rez[5] === "O") ||
			(rez[6] === "O" && rez[7] === "O" && rez[8] === "O") ||
			(rez[0] === "O" && rez[4] === "O" && rez[8] === "O") ||
			(rez[2] === "O" && rez[4] === "O" && rez[6] === "O") ||
			(rez[0] === "O" && rez[3] === "O" && rez[6] === "O") ||
			(rez[1] === "O" && rez[4] === "O" && rez[7] === "O") ||
			(rez[2] === "O" && rez[5] === "O" && rez[8] === "O")
		) {
			setArrGame(["", "", "", "", "", "", "", "", ""]);
			setCountStep(() => 0);
			setGamers(() => true);
			alert("Выграл игрок игравший за O");
		}
		if (countStep + 1 === 9) {
			setCountStep(() => 0);
			setGamers(!gamers);
			alert(`Ничья`);
			setArrGame(["", "", "", "", "", "", "", "", ""]);
		}
	};

	function putZnak(index) {
		const rezGame = arrGame;
		console.log(rezGame);
		if (gamers == true) {
			const rez = rezGame.map((e, i) => {
				if (i === index) {
					return "X";
				}
				return e;
			});
			setCountStep(() => {
				return countStep + 1;
			});
			setArrGame(() => rez);
			setGamers(!gamers);
			win(rez);
		} else {
			let cc = countStep + 1;
			setCountStep(() => cc);
			const rez = rezGame.map((e, i) => {
				if (i === index) {
					return "O";
				}

				return e;
			});

			console.log(rez);
			const c = countStep + 1;
			setCountStep(() => {
				return c;
			});
			setArrGame(() => rez);
			setGamers(!gamers);
			win(rez);
		}
		// win();
	}
	const Show = () => {
		setShowGame(!showGame);
		if (showGame === false) {
			setArrGame(["", "", "", "", "", "", "", "", ""]);
		}
	};
	return (
		<>
			<ShowBegin Show={Show} showGame={showGame} />
			<ShowDev showGame={showGame} />

			{showGame && (
				<div className={styles.container}>
					<ShowStep gamers={gamers} />
					<div className={styles.field}>
						<ListItem list={arrGame} putZnak={putZnak} />
					</div>
				</div>
			)}
		</>
	);
}

export default App;
