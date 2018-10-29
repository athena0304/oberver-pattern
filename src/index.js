import { View } from "./view";
import { Controller } from "./controller";
import { Model } from "./model";
var model = new Model();
var controller = new Controller(model);
var view = new View(controller);

model.registerObserver(view);
model.notifyAll();
