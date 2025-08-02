import Item from "../item/Item";
const ListItem = ({ list, putZnak }) => {
	return list.map((element, key) => (
		<Item key={key} index={key} putZnak={putZnak} element={element} />
	));
};

export default ListItem;
