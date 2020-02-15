import { buildTSFixIds, getEditorConfig } from './configUtils';
import { FileTextChanges, Project, SourceFile, FormatCodeSettings} from 'ts-morph';
import { Uri, TextDocument } from 'vscode';
import { TSAdapter } from './adapters/tsAdapterInterface';
import { tsAdapterFor } from './adapters/adapterFactory';

export class TSFile {
  private adapter: TSAdapter;
  private project: Project;
  private sourceFile: SourceFile;

  constructor (document: TextDocument) {
    this.adapter = tsAdapterFor(document);
    this.project = new Project();
    this.sourceFile = this.buildSourceFile();
  }

  public getFileUri(): Uri {
    return Uri.file(this.adapter.getFileName());
  }

  public toTypeScript(): Promise<void> {
    const fixIds = buildTSFixIds();
    const editorConfig = getEditorConfig(this.getFileUri());

    fixIds.forEach((fixId: string) => {
      const fixes = this.project.getLanguageService().getCombinedCodeFix(this.sourceFile, fixId, editorConfig);
      fixes.getChanges().forEach((change: FileTextChanges) => change.applyChanges({ overwrite: true }));
    });

    return this.sourceFile.save();
  }

  private buildSourceFile(): SourceFile {
    return this.project.createSourceFile(
      this.adapter.getFileName(),
      this.adapter.getFileContent()
    );
  }
}
