import {
  Uri,
  workspace,
  window,
  TextEditor,
} from 'vscode';
import * as path from "path";

export const testFolderPath = path.join(__dirname + "/../../src/test/e2e/examples/");

export async function openEditorForTestFile(testFileName: string): Promise<TextEditor> {
  const uri = Uri.file(path.join(testFolderPath + testFileName));
  const document = await workspace.openTextDocument(uri);
  return window.showTextDocument(document);
}
