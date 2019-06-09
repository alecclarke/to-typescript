import { expect } from 'chai';
import { commands, window, TextEditor } from "vscode";
import * as path from "path";
import { unlinkSync } from "fs";
import { openEditorForTestFile, testFolderPath } from "../../support";

describe("forgottenThisPropertyAccess", function () {
  const tsFileName = "forgottenThisPropertyAccess.ts";
  const jsFileName = "forgottenThisPropertyAccess.js";

  afterEach(function() {
    unlinkSync(path.join(testFolderPath + tsFileName));
  });

  it("applies forgottenThisPropertyAccess code fix to converted file", async function() {
    await openEditorForTestFile(jsFileName);
    await commands.executeCommand("extension.toTypeScript");
    const currentEditor = window.activeTextEditor as TextEditor;
    const convertedContent = `class MissingThis {\n  x: any;\n  y() {\n    this.x;\n  }\n}\n`;
    expect(currentEditor.document.fileName).to.equal(path.join(testFolderPath + tsFileName));
    expect(currentEditor.document.getText()).to.equal(convertedContent);
  });
});
