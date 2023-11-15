// @ts-nocheck
import { SecurityEditor } from "../common/secure";
export default function RightText() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");
  let isTagP = selection.focusNode.parentElement;

  function searchTagP() {
    if (isTagP.tagName == "P") {
      return isTagP;
    } else {
      isTagP = selection.focusNode.parentElement;
      searchTagP();
    }
  }

  if (SecurityEditor(selection)) {
    id_editor.focus();
    switch (searchTagP().style.textAlign) {
      case "right":
        searchTagP().style.textAlign = "";
        break;

      default:
        searchTagP().style.textAlign = "right";
        break;
    }
  }
}
