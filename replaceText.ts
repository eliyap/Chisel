import { WorkspaceLeaf, MarkdownView } from 'obsidian';

export default replaceText;

function replaceText(leaf: WorkspaceLeaf, text: string): void {
    let currentView = leaf.view;
    if (!(currentView instanceof MarkdownView)) {
        return;
    }
    let editor = currentView.editor;
    let cursor = editor.getCursor();
    editor.replaceRange(text, cursor);
}