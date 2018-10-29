export class View {
  constructor(controller) {
    this.controller = controller;
    this.heading = document.getElementById("heading");
    this.heading.addEventListener("click", controller);
    this.controller.model.registerObserver(this);
  }

  update(data) {
    this.heading.innerText = data.heading;
  }
}
