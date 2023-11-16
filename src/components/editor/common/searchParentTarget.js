// @ts-nocheck
export default function searhParentTarget(targetname, focus) {
  const trying = 10;
  let focusNode = focus;
  console.log(focus);

  for (let i = 0; i < trying; i++) {
    if (focusNode.localName == targetname) {
      break;
    } else {
      focusNode = focusNode.parentElement;
    }
  }

  return {
    parent: focusNode.parentElement,
    current: focusNode,
  };
}
