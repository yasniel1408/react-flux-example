import dispatcher from "../dispatchers/Dispatcher";

export const COLOR_APP_ACTION = {
  CHANGE_COLOR: "colorAppAction.ChangeColor",
};

export function changeColor(color) {
  dispatcher.dispatch({
    type: COLOR_APP_ACTION.CHANGE_COLOR,
    value: color,
  });
}
