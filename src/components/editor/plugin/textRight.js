// @ts-nocheck
import { SecurityEditor } from "../common/secure";
import searchTagP from "../common/searchTagP";
export default function RightText() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");

  if (SecurityEditor(selection)) {
    id_editor.focus();
    let isTagP = searchTagP(selection.focusNode.parentElement);
    switch (isTagP.style.textAlign) {
      case "right":
        isTagP.style.textAlign = "";
        break;

      default:
        isTagP.style.textAlign = "right";
        break;
    }
  }
}
