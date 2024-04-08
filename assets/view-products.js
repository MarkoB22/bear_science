/**
 *  @class
 *  @function ViewProducts
 */
if (!customElements.get('view-products')) {
  class ViewProducts extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.drawer = document.querySelector(this.dataset.target);
      this.addEventListener('click', this.setupEventListener.bind(this));

    }
    setupEventListener() {
      document.body.classList.add('open-cc');
      this.drawer.classList.add('active');
    }
  }
  customElements.define('view-products', ViewProducts);
}
