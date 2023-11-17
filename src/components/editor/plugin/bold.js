// @ts-nocheck
import { SecurityEditor } from "../common/secure";

export function BoldText() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");
  const node = document.createElement("strong");
  const range = new Range();
  const start_node = selection.anchorNode;

  if (SecurityEditor(selection)) {
    id_editor.focus();

    console.log(selection);

    if (selection.isCollapsed) {
      console.log(selection);
      let tagTarget = selection.focusNode.parentElement.closest("strong");

      if (tagTarget.localName == "strong") {
        /*
        - handling when cursor not yet select any text or collapsed
        - remove when get the parent is node strong
        */
        tagTarget.replaceWith(...tagTarget.childNodes);
      } else {
        // inject node strong on cursor current position when system not get node strong parent
      }
    }
  }
}
