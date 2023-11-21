// @ts-nocheck
import { SecurityEditor } from '../common/secure';

export function BoldText() {
	const selection = document.getSelection();
	const id_editor = document.querySelector('#editor-edit-ujione');
	const node = document.createElement('strong');

	if (SecurityEditor(selection)) {
		if (selection.isCollapsed) {
			const current_node = selection.focusNode;
			const range = document.createRange();

			if (current_node.length > selection.anchorOffset) {
				const parent = selection.focusNode.parentElement.closest('strong');
				if (parent) {
					const previous_focus = selection.focusNode;
					const previous_foffset = selection.anchorOffset;
					const c = parent.childNodes;
					parent.replaceWith(...c);
					range.setStart(previous_focus, previous_foffset);
					selection.removeAllRanges();
					selection.addRange(range);
				} else {
					const previous_focus = selection.anchorNode;
					const previous_foffset = selection.anchorNode;
					const new_range = document.createRange();
					selection.getRangeAt(0).surroundContents(node);
					range.selectNode(selection.focusNode);
					selection.removeAllRanges();
					selection.addRange(range);
					range.surroundContents(node);
					new_range.setStart(previous_focus, previous_foffset);
					selection.removeAllRanges();
					selection.addRange(new_range);
				}
				// Handle if cursor position last of node
			} else if (current_node.length === undefined) {
				node.innerHTML = '&#xFEFF';
				selection.getRangeAt(0).insertNode(node);
				range.setStart(selection.focusNode, 1);
				selection.removeAllRanges();
				selection.addRange(range);
			} else {
				if (selection.focusNode.parentElement.localName === 'strong') {
					const super_parent = selection.focusNode.parentElement.parentElement;
					const parent = selection.focusNode.parentElement;
					let newNode = document.createElement('span');
					newNode.setAttribute('careteditor', 'true');
					newNode.innerHTML = '&#xFEFF';
					super_parent.insertBefore(newNode, parent);
					range.setStart(super_parent, super_parent.childNodes.length);
					selection.removeAllRanges();
					selection.addRange(range);
				} else {
					node.innerHTML = '&#xFEFF';
					selection.getRangeAt(0).insertNode(node);
					range.setStart(selection.anchorNode.nextSibling, 1);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}
		} else {
			console.log(selection);
			// const anchestor = selection.getRangeAt(0);
			// const select_text = document.createTextNode(anchestor.toString());

			// anchestor.deleteContents();
			// anchestor.insertNode(select_text);

			// const range = selection.getRangeAt(0);
			// let selectTextNode = document.createTextNode(range.toString());
			// node.appendChild(selectTextNode);
			// range.deleteContents();
			// range.insertNode(node);
			// selection.removeAllRanges();
			// selection.addRange(range);
		}
	}
	id_editor.focus();
}
