import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { openEditorForTestFile, testFolderPath, normalizeTextFormat } from "../../support";

describe("running toTypeScript in the open editor", function () {
  afterEach(function() {
    unlinkSync(path.join(testFolderPath + "testFile.ts"));
  });

  it("converts CoffeeScript files to ts and opens the new file", async function() {
    await openEditorForTestFile("testFile.coffee");
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `const square = (x: number) => x * x;\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + "testFile.ts"));
    expect(actualContent).to.equal(convertedContent);
  });

  it("converts JavaScript files to ts and opens the new file", async function() {
    await openEditorForTestFile("testFile.js");
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `const square = function(x: number) {\n  return x * x;\n};\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + "testFile.ts"));
    expect(actualContent).to.equal(convertedContent);
  });
});
