let pokemonList = [
  {
    name: 'Bulbasaur',
    category: 'Seed',
    abilities: {
      ability_name: 'Overgrow',
      ability_info: 'Powers up Grass-type moves when the Pokémon’s HP is low.',
    },
    heightFt: 2.04,
    weightLbs: 15.2,
    types: ['grass', 'poison'],
    weaknesses: ['fire', 'psychic', 'flying', 'ice'],
    evolutions: ['Bulbasaur', 'Ivysaur', 'Venusaur'],
  },

  {
    name: 'Charmander',
    category: 'Lizard',
    abilities: {
      ability_name: 'Blaze',
      ability_info: `Powers up Fire-type moves when the Pokémon’s HP is low.`,
    },
    heightFt: 2.0,
    weightLbs: 18.7,
    types: ['fire'],
    weaknesses: ['water', 'ground', 'rock'],
    evolutions: ['Charmander', 'Charmeleon', 'Charizard'],
  },

  {
    name: 'Squirtle',
    category: 'Tiny Turtle',
    abilities: {
      ability_name: 'Torrent',
      ability_info: `Powers up Water-type moves when the Pokémon’s HP is low.`,
    },
    heightFt: 1.08,
    weightLbs: 19.8,
    types: ['water'],
    weaknesses: ['grass', 'electric'],
    evolutions: ['Squirtle', 'Wartortle', 'Blastoise'],
  },
];
console.log(pokemonList);
console.log(pokemonList[0].name);

let pokemonName = pokemonList[1].name;
let pokemonHeight = pokemonList[1].heightFt;
let pokemonWeight = pokemonList[1].weightLbs;

document.write(
  `Pokemon ${pokemonName} is ${pokemonList[1].category} pokemon. His height is ${pokemonHeight}Ft and his weight is ${pokemonWeight}Lbs. His evolutions are: ${pokemonList[1].evolutions[0]}, ${pokemonList[1].evolutions[1]}, ${pokemonList[1].evolutions[2]}`
);
