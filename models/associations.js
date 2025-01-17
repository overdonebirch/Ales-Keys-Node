// models/associations.js
import { Game } from './Game.js';
import { System } from './System.js';
import { GameSystem } from './GameSystem.js';

Game.belongsToMany(System, { through: GameSystem, foreignKey: 'game_id' });
System.belongsToMany(Game, { through: GameSystem, foreignKey: 'system_id' });
