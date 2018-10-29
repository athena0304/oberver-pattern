export class Model {
  constructor() {
    this.heading = "Hello";
    //collection of observers
    this.observers = [];
  }
  //add to the collection of observers
  registerObserver(observer) {
    this.observers.push(observer);
  }
  //Iterate over observers, calling their update method
  notifyAll() {
    this.observers.forEach(observer => {
      observer.update(this);
    });
  }
}
