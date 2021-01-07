import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { normalizeTextFormat, openEditorForTestFile, testFolderPath } from "../../support";

describe("addMissingMember", function () {
  const tsFileName = "addMissingMember.ts";
  const jsFileName = "addMissingMember.js";

  afterEach(function() {
    unlinkSync(path.join(testFolderPath + tsFileName));
  });

  it("applies addMissingMember code fix to converted file", async function() {
    this.timeout(10000)
    await openEditorForTestFile(jsFileName);
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent =
      `class MissingMember {\n  x: any;\n  constructor() {}\n\n  method() {\n    this.x;\n    this.y();\n  }\n  y() {\n    throw new Error("Method not implemented.");\n  }\n}\n`;
    const actualContent = normalizeTextFormat(currentEditor.document.getText());
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + tsFileName));
    expect(actualContent).to.equal(convertedContent);
  });
});
