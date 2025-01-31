# Pokemon API
Not totally sure what I want to do with this API yet, but it will be inspired by https://pokeapi.co/.

## Endpoints

### /pokemonarchetype
- Represents a pokemon in an abstract form
- Purpose is to offer reasonable characteristics for generating specific pokemon
- eg A bulbasaur archetype contains all the information and constraints to create a bulbasaur
  - A generator would create a bulbasaur, for example, and assign characteristics
  - It might vary the weight, height, gender, moves, sprite, ect., for each instance
  - But such characteristics are kept within archetypal bounds

### /pokemon
- Represents the pocket monsters with names, image, and stats, like type, weight, moves, cries ...

### /trainers
- Represent people who have pokemon
- I'm thinking they might have a style or a trait to flavour them
- Something like "hot-headed" that makes them prefer damaging moves

### /traits
Trainers have traits that offer better handling of certain pokemon types.

Type Preference
- Practical: normal
- Courageous: fire
- Elegant: water
- Vibrant: grass
- Energetic: electric
- Assertive: ice
- Determined: fighting
- Rugged: poison
- Earthy: ground
- Plucky: flying
- Thoughtful: psychic
- Chatty: bug
- Tough: rock
- Discreet: ghost
- Wise: dragon
- Enchanting: fairy

### /flaws

General
- Hypochondriac: (bug, poison, grass, ground, rock)

Phobias
- Panphobia: everything
- Acrophobia: heights (tall)
- Arachnophobia: spiders (bug)
- Aquaphobia: water
- Aerophobia: flying
- Tonitrophobia: thunder (electric)
- Toxiphobia: germs (poison)
- Frigophobia: ice
- Phasmophobia: ghost
- Thermophobia: fire
- Botanophobia: plants (grass)
- Apeirophobia: infinity, eternity, and the uncountable (psychic)
- Hypnophobia: sleep / nightmares (ghost and psychic)
- Mysophobia: germs, dirt (ground and rock)
- Traumatophobia: injury (fighting)
- Draconophobia: dragon
- Neraidaphobia: fairy

Numbers
- Heptadekaphobia: number 17
- Tetraphobia: number 4
- Triskaidekaphobia: number 13

# Frontend Notes

/trainers
- List of current staff
- List of canadiates to optionally hire as staff

/trainers/:id
- Edit form for a specific trainer

/pokemon
- List of current pokemon
- List of caught pokemon to optionally add to collection

/pokemon/:id
- Edit form for a specific pokemon


# Improvements
- https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/