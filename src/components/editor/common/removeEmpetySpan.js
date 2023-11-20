// @ts-nocheck
export default function removeEmptySpan() {
	const dom_empety_span = document.querySelectorAll('[careteditor=true]');
	for (let i = 0; i < dom_empety_span.length; i++) {
		setTimeout(() => {
			const text_node = document.createTextNode(dom_empety_span[i].textContent);
			const previous_parent = dom_empety_span[i].parentElement;
			const selection = document.getSelection();
			const range = document.createRange();
			const parent = selection.focusNode.parentElement;
			range.setStart(parent, parent.childNodes.length);
			selection.removeAllRanges();
			selection.addRange(range);
			dom_empety_span[i].remove();
			previous_parent.appendChild(text_node);
		}, 200);
	}
}
