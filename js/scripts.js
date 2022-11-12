let pokemonList = [
  {
    name: 'bulbasaur',
    description: `There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.`,
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
    name: 'ivysaur',
    description: `When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.`,
    category: 'Seed',
    abilities: {
      ability_name: 'Overgrow',
      ability_info: 'Powers up Grass-type moves when the Pokémon’s HP is low.',
    },
    heightFt: 3.03,
    weightLbs: 28.7,
    types: ['grass', 'poison'],
    weaknesses: ['fire', 'psychic', 'flying', 'ice'],
    evolutions: ['Bulbasaur', 'Ivysaur', 'Venusaur'],
  },
  {
    name: 'venusaur',
    description: `Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.`,
    category: 'Seed',
    abilities: {
      ability_name: 'Overgrow',
      ability_info: 'Powers up Grass-type moves when the Pokémon’s HP is low.',
    },
    heightFt: 6.07,
    weightLbs: 220.5,
    types: ['grass', 'poison'],
    weaknesses: ['fire', 'psychic', 'flying', 'ice'],
    evolutions: ['Bulbasaur', 'Ivysaur', 'Venusaur'],
  },

  {
    name: 'charmander',
    description: `It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.`,
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
    name: 'charmeleon',
    description: `It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.`,
    category: 'Flame',
    abilities: {
      ability_name: 'Blaze',
      ability_info: `Powers up Fire-type moves when the Pokémon’s HP is low.`,
    },
    heightFt: 3.07,
    weightLbs: 41.9,
    types: ['fire'],
    weaknesses: ['water', 'ground', 'rock'],
    evolutions: ['Charmander', 'Charmeleon', 'Charizard'],
  },
  {
    name: 'charizard',
    description: `It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.`,
    category: 'Flame',
    abilities: {
      ability_name: 'Blaze',
      ability_info: `Powers up Fire-type moves when the Pokémon’s HP is low.`,
    },
    heightFt: 5.07,
    weightLbs: 199.5,
    types: ['fire', 'flying'],
    weaknesses: ['water', 'electric', 'rock'],
    evolutions: ['Charmander', 'Charmeleon', 'Charizard'],
  },

  {
    name: 'squirtle',
    description: `When it retracts its long neck into its shell, it squirts out water with vigorous force.`,
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
  {
    name: 'wartortle',
    description: `It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.`,
    category: 'Turtle',
    abilities: {
      ability_name: 'Torrent',
      ability_info: `Powers up Water-type moves when the Pokémon’s HP is low.`,
    },
    heightFt: 3.03,
    weightLbs: 49.6,
    types: ['water'],
    weaknesses: ['grass', 'electric'],
    evolutions: ['Squirtle', 'Wartortle', 'Blastoise'],
  },
  {
    name: 'blastoise',
    description: `It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.`,
    category: 'Shellfish',
    abilities: {
      ability_name: 'Torrent',
      ability_info: `Powers up Water-type moves when the Pokémon’s HP is low.`,
    },
    heightFt: 5.03,
    weightLbs: 188.5,
    types: ['water'],
    weaknesses: ['grass', 'electric'],
    evolutions: ['Squirtle', 'Wartortle', 'Blastoise'],
  },
];

// This is suppoused HTML structure for DOM
// <div class="pokemon-list">
//     <div class="pokemon-list__item">
//         <img src="./images/bulbasaur.png" alt="Pokemon Bulbasaur image">
//         <h2>bulbasaur</h2>
//         <ul>
//             <li>
//                 Height: 2.04
//             </li>
//             <li>
//                 Weight: 15.2
//             </li>
//         </ul>
//     </div>
// </div>

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].weightLbs > 200) {
//     document.write(
//       `<div class="pokemon-list__item">
//           <img src="images/${pokemonList[i].name}.png" alt="Pokemon ${pokemonList[i].name} image" />
//           <h2>${pokemonList[i].name}</h2>
//           <h3>WOW! Super heavy!</h3>
//           <ul>
//             <li><span>Height:</span>${pokemonList[i].heightFt}</li>
//             <li><span>Weight:</span>${pokemonList[i].weightLbs}</li>
//           </ul>
//         </div>`
//     );
//   } else {
//     document.write(
//       `<div class="pokemon-list__item">
//           <img src="images/${pokemonList[i].name}.png" alt="Pokemon ${pokemonList[i].name} image" />
//           <h2>${pokemonList[i].name}</h2>
//           <ul>
//             <li><span>Height:</span>${pokemonList[i].heightFt}</li>
//             <li><span>Weight:</span>${pokemonList[i].weightLbs}</li>
//           </ul>
//         </div>`
//     );
//   }
// }

// How can I put loop inside loop, so I can use aarays for types, weeknesses and evolutions
// How can I make function composition for forEach function
pokemonList.forEach(function (pokemon) {
  const isHeavyWeight =
    pokemon.weightLbs > 200 ? `<h3>WOW! Super heavy!</h3>` : ``;
  const pokemonItemHtml = `<div class="pokemon-list__item">
          <img src="images/${pokemon.name}.png" alt="Pokemon ${pokemon.name} image" />
          <h2>${pokemon.name}</h2> 
          ${isHeavyWeight} 
          <ul>
            <li><span>Height:</span>${pokemon.heightFt}</li>
            <li><span>Weight:</span>${pokemon.weightLbs}</li>
            
          </ul>
        </div>`;
  document.write(pokemonItemHtml);
});

// pokemonList.forEach(getPocemonCard);
