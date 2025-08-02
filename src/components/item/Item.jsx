import Button from "../../UI/Button/Button";
import styles from "./Item.module.css";

const Item = ({ element, putZnak, index }) => {
	return (
		<Button onClick={() => putZnak(index)}>
			<div className={styles.element}>{element}</div>
		</Button>
	);
};

export default Item;
