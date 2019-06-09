import { workspace, Uri } from 'vscode';
import { FormatCodeSettings } from 'typescript';

const tsFixIds = [
  "inferFromUsage",
  "convertToAsyncFunction",
  "addMissingMember",
  "forgottenThisPropertyAccess",
  "fixUnreachableCode",
  "fixUnusedLabel",
  "fixAwaitInSyncFunction",
  "requireInTs",
];

export function buildTSFixIds(): string[] {
  const settings = workspace.getConfiguration("toTypeScript");
  const fixIds = tsFixIds.filter((fixId: string) => settings[fixId]);
  return fixIds;
}

export function getEditorConfig(configUri: Uri): FormatCodeSettings {
  const indentSize = workspace.getConfiguration("editor", configUri).get("tabSize", 2);
  
  return {
    indentSize,
  };
}
