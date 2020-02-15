import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { openEditorForTestFile, testFolderPath, normalizeTextFormat } from "../../support";

describe("convertToAsyncFunction", function () {
  const tsFileName = "convertToAsyncFunction.ts";
  const jsFileName = "convertToAsyncFunction.js";

  afterEach(function() {
    unlinkSync(path.join(testFolderPath + tsFileName));
  });

  it("applies convertToAsyncFunction code fix to converted file", async function() {
    await openEditorForTestFile(jsFileName);
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `async () => {\n  const result = await fetch("https://example.com");\n  return console.log(result);\n};\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + tsFileName));
    expect(actualContent).to.equal(convertedContent);
  });
});
