import dispatcher from "../dispatchers/Dispatcher";
import * as ColorAppAction from "../actions/colorAppActions";
import { EventEmitter } from "events";

class ColoAppStore extends EventEmitter {
  constructor() {
    super();

    this.activeColor = "red";
  }

  handelActions(action) {
    switch (action.type) {
      case ColorAppAction.COLOR_APP_ACTION.CHANGE_COLOR:
        this.activeColor = action.value;
        this.emit("storeUpdated");
        break;

      default:
        break;
    }
  }

  getActiveColor() {
    return this.activeColor;
  }
}

const colorAppStore = new ColoAppStore();
dispatcher.register(colorAppStore.handelActions.bind(colorAppStore));

export default colorAppStore;
