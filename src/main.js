import BoardComponent from './components/board.js';
import BoardController from './controllers/board.js';
import SiteMenuComponent from './components/site-menu.js';
import {generateTasks} from './mock/task.js';
import {render, RenderPosition} from './utils/render.js';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent);

boardController.render(tasks);
