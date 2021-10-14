import defaultPoke from "./defaultPoke";
import PokeCard from "./pokecard";

const Pokedex = (props) => {
	return (
		<div>
			<ul>
				{props.pokemon.map((pokemon, i) => (
					<PokeCard
						key={`pokeCard${i}`}
						id={pokemon.id}
						name={pokemon.name}
						type={pokemon.type}
						exp={pokemon.base_experience}
					/>
				))}
			</ul>
		</div>
	);
};
Pokedex.defaultProps = { pokemon: defaultPoke };

export default Pokedex;
