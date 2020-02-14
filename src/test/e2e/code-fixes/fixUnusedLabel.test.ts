import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { openEditorForTestFile, testFolderPath, normalizeTextFormat } from "../../support";

describe("fixUnusedLabel", function () {
  const tsFileName = "fixUnusedLabel.ts";
  const jsFileName = "fixUnusedLabel.js";

  afterEach(function() {
    unlinkSync(path.join(testFolderPath + tsFileName));
  });

  it("applies fixUnusedLabel code fix to converted file", async function() {
    await openEditorForTestFile(jsFileName);
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `for (var i = 0; i < 5; i++) {\n  console.log(i);\n}\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + tsFileName));
    expect(actualContent).to.equal(convertedContent);
  });
});
