// models/associations.js
import { Game } from './Game.js';
import { System } from './System.js';
import { Genre } from './Genre.js';
import { GameSystem } from './GameSystem.js';
import { GameGenre } from './GameGenre.js';

Game.belongsToMany(System, { through: GameSystem, foreignKey: 'game_id' });
System.belongsToMany(Game, { through: GameSystem, foreignKey: 'system_id' });

Game.belongsToMany(Genre,{through: GameGenre, foreignKey:'game_id'})
Genre.belongsToMany(Game,{through: GameGenre, foreignKey:'genre_id'})