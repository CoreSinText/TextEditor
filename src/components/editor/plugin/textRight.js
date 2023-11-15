// @ts-nocheck
import { SecurityEditor } from "../common/secure";
import searchTagP from "../common/searchTagP";
export default function RightText() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");
  let isTagP = selection.focusNode.parentElement;

  if (SecurityEditor(selection)) {
    id_editor.focus();
    switch (searchTagP(isTagP, selection).style.textAlign) {
      case "right":
        searchTagP(isTagP, selection).style.textAlign = "";
        break;

      default:
        searchTagP(isTagP, selection).style.textAlign = "right";
        break;
    }
  }
}
