// @ts-nocheck
export default function searchTagP(isTagP) {
  let p = isTagP;
  const trying = 30;

  for (let i = 0; i < trying; i++) {
    if (p.tagName.toLowerCase() == "p") {
      break;
    } else {
      p = p.parentElement;
    }
  }
  return p;
}
