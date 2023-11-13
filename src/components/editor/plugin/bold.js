// @ts-nocheck
import { SecurityEditor } from "../common/secure";

export function BoldText() {
  const selection = document.getSelection();
  const text = window.getSelection()?.toString();
  const parent_element = selection.focusNode.parentNode.localName;
  let range = selection?.getRangeAt(0);

  console.log(selection);
  if (SecurityEditor(selection)) {
    if (parent_element == "strong") {
      selection.focusNode.parentNode.outerHTML =
        selection.focusNode.parentNode.textContent;
    } else {
      range?.deleteContents();
      let element = document.createElement("strong");
      element.innerText = text;
      range.insertNode(element);
    }
  }
}
