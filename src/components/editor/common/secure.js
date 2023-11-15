// @ts-nocheck
export function SecurityEditor(doc) {
  const editor_id = "editor-edit-ujione";
  let chance = 7;
  let trying = 0;
  let allowing = false;
  let c = doc.focusNode.parentElement;

  function check() {
    try {
      if (c.id === editor_id) {
        return allowing = true;
      } else if (trying <= chance) {
        c = c.parentElement;
        trying += 1;
        check();
      }
    } catch (error) { /* empty */ }
  }
  check();

  return allowing;
}
