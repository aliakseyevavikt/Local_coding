export default function clearInputValue(selector) {
  while (selector.getValue() !== '') {
    selector.doubleClick();
    selector.keys('Delete');
  }
}