// @ts-nocheck
import { SecurityEditor } from "../common/secure";

export function BoldText() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");
  const start_node = selection.anchorNode;

  if (SecurityEditor(selection)) {
    id_editor.focus();
    console.log(selection);
  }
}
