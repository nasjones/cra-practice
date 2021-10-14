const PokeCard = (props) => {
	return (
		<li>
			<span>{props.name}</span>
			<img
				alt={`${props.name}`}
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
			/>
			<span>Type: {props.type}</span>
			<br />
			<span>EXP: {props.exp}</span>
		</li>
	);
};

export default PokeCard;
