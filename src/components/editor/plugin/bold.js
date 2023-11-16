// @ts-nocheck
import { SecurityEditor } from "../common/secure";
import searhParentTarget from "../common/searchParentTarget";

export function BoldText() {
  const selection = document.getSelection();
  const id_editor = document.querySelector("#editor-edit-ujione");
  const range = new Range();
  const start_node = selection.anchorNode;

  if (SecurityEditor(selection)) {
    id_editor.focus();

    if (selection.isCollapsed) {
      /*
      - handling when cursor not yet select any text or collapsed
      - remove when get the parent is node b
      */
      let tagTarget = searhParentTarget("b", selection.focusNode).current;
      if (tagTarget.localName == "b") {
        tagTarget.replaceWith(...tagTarget.childNodes);
      }
    }
  }
}
