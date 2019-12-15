import FilterComponent from '../components/filter.js';
import {generateFilters} from '../mock/filter.js';
import {render, RenderPosition} from '../utils/render.js';

export default class FilterController {
  constructor(adjacentComponent) {
    this._adjacentComponent = adjacentComponent;
    this._containerElement = null;
    this._filterComponent = null;
    this._tasks = null;
    this._filters = null;
  }

  render(tasks) {
    this._tasks = tasks;
    this._filters = generateFilters(tasks);
    if (this._filterComponent) {
      const oldFilterComponent = this._filterComponent.getElement();
      this._filterComponent = new FilterComponent(this._filters);
      this._containerElement.replaceChild(this._filterComponent.getElement(), oldFilterComponent);
    } else {
      this._filterComponent = new FilterComponent(this._filters);
      this._containerElement = this._adjacentComponent.getElement().parentElement;
      render(this._containerElement, this._filterComponent, RenderPosition.AFTERBEGIN);
    }
  }
}
