// @ts-nocheck
import { SecurityEditor } from "../common/secure";

export default function TextCenter() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");

  if (SecurityEditor(selection)) {
    id_editor.focus();
    let isTagP = selection.focusNode.parentElement.closest("p");
    switch (isTagP.style.textAlign) {
      case "center":
        isTagP.style.textAlign = "";
        break;

      default:
        isTagP.style.textAlign = "center";
        break;
    }
  }
}
