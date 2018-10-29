export class Controller {
  constructor(model) {
    this.model = model;
  }
  //EVENTLISTENER INTERFACE
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        this.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }
  //GET MODEL HEADING
  getModelHeading() {
    return this.model.heading;
  }
  //CHANGE THE MODEL
  clickHandler(target) {
    this.model.heading = "World";
    this.model.notifyAll();
  }
}
