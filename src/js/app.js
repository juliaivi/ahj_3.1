import DrawBorder from './drawBorder';
import ControllGame from './ControllGame';

const board = new DrawBorder();
const gameCtrl = new ControllGame(board);

gameCtrl.init();
