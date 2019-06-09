import {
  ExtensionContext,
  ViewColumn,
  commands,
  window,
} from 'vscode';
import { TSFile } from "./tsFile";

export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand('extension.toTypeScript', async () => {
    if (window.activeTextEditor) {
      const tsFile = new TSFile(window.activeTextEditor.document);
      await tsFile.toTypeScript();
      return commands.executeCommand("vscode.open", tsFile.getFileUri(), ViewColumn.Beside);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
