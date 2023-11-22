/* eslint-disable no-unused-vars */
// @ts-nocheck
import { SecurityEditor } from '../common/secure';

export function BoldText() {
	const selection = document.getSelection();
	const id_editor = document.querySelector('#editor-edit-ujione');
	const node = document.createElement('strong');
	const root_node = ('p', 'h1', 'h2', 'h3', 'h4');

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
			const cloning_node = selection.getRangeAt(0).cloneContents();
			if (
				selection.anchorNode.parentElement.localName === 'strong' ||
				selection.anchorNode.parentElement.closest('strong')
			) {
				const each_node = cloning_node.childNodes;
				for (let i = 0; i < each_node.length; i++) {
					if (each_node[i].localName != 'strong') {
						node.appendChild(each_node[i]);
						cloning_node.insertBefore(node, each_node[i]);
					}
				}

				selection.getRangeAt(0).deleteContents();
				selection.getRangeAt(0).insertNode(cloning_node);
			} else {
				const strong_node = cloning_node.querySelectorAll('strong');
				for (let i = 0; i < strong_node.length; i++) {
					strong_node[i].replaceWith(...strong_node[i].childNodes);
				}
				selection.getRangeAt(0).deleteContents();
				selection.getRangeAt(0).insertNode(cloning_node);
			}
		}
	}
	id_editor.focus();
}
