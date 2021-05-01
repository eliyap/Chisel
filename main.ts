import { App, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import CodeMirror from 'codemirror';
import replaceText from 'replaceText';

export default class Chisel extends Plugin {
	async onload() {
		console.log('loading plugin');

		this.addCommand({
			id: 'insert-pagebreak',
			name: 'Insert Pagebreak',
			checkCallback: (checking: boolean) => {
				let leaf = this.app.workspace.activeLeaf;
				if (leaf) {
					if (!checking) {
                        replaceText(leaf, `<hr class="pagebreak"/>`)
					}
					return true;
				}
				return false;
			}
		});

		this.registerCodeMirror((cm: CodeMirror.Editor) => {
			console.log('codemirror', cm);
		});

		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		console.log('unloading plugin');
	}
}
