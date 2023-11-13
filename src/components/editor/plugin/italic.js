// @ts-nocheck
import { SecurityEditor } from "../common/secure";

export function ItalicText() {
  const range = document.getSelection().getRangeAt(0);
  const clone = range.cloneRange();
  var selection = window.getSelection();
  range.collapse(true);

  const markerElement = document.createElement("italic");
  markerElement.appendChild(document.createTextNode("\ufeff"));

  if (SecurityEditor(selection)) {
    range.insertNode(markerElement);

    selection.removeAllRanges();
    // add the previously cloned range
    selection.addRange(clone);
    // make sure the marker is removed
  }
}
