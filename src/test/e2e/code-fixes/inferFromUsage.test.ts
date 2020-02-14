import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { openEditorForTestFile, testFolderPath, normalizeTextFormat } from "../../support";

describe("inferFromUsage", function () {
  const tsFileName = "inferFromUsage.ts";
  const jsFileName = "inferFromUsage.js";

  afterEach(function() {
    unlinkSync(path.join(testFolderPath + tsFileName));
  });

  it("applies inferFromUsage code fix to converted file", async function() {
    await openEditorForTestFile(jsFileName);
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `const square = function(x: number) {\n  return x * x;\n};\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + tsFileName));
    expect(actualContent).to.equal(convertedContent);
  });
});
