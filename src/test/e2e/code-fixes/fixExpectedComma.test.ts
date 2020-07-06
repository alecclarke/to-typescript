import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { openEditorForTestFile, testFolderPath, normalizeTextFormat } from "../../support";

describe("fixExpectedComma", function () {
  const tsFileName = "fixExpectedComma.ts";
  const jsFileName = "fixExpectedComma.js";

  afterEach(function() {
    unlinkSync(path.join(testFolderPath + tsFileName));
  });

  it("applies fixExpectedComma code fix to converted file", async function() {
    await openEditorForTestFile(jsFileName);
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `const example = { a: "one", c: "two" };\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + tsFileName));
    expect(actualContent).to.equal(convertedContent);
  });
});
