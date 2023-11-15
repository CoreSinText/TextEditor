// @ts-nocheck
export default function searchTagP(isTagP, selection) {
  if (isTagP.tagName == "P") {
    return isTagP;
  } else {
    isTagP = selection.focusNode.parentElement;
    searchTagP();
  }
}
