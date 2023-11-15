// @ts-nocheck
import searchTagP from "../common/searchTagP";
import { SecurityEditor } from "../common/secure";

export default function TextJustify() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");
  let isTagP = selection.focusNode.parentElement;

  if (SecurityEditor(selection)) {
    id_editor.focus();
    switch (searchTagP(isTagP, selection).style.textAlign) {
      case "justify":
        searchTagP(isTagP, selection).style.textAlign = "";
        break;

      default:
        searchTagP(isTagP, selection).style.textAlign = "justify";
        break;
    }
  }
}
