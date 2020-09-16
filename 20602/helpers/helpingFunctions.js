export function clearInput(selector) {
  let length = selector.getValue().length;
  let backspaces = new Array(length).fill('Backspace');
  selector.setValue(backspaces);
}
