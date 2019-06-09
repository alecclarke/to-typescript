import { TextDocument } from 'vscode';
import { TSAdapter } from './tsAdapterInterface';

export class JavaScriptAdapter implements TSAdapter {
  private document: TextDocument;

  constructor (document: TextDocument) {
    this.document = document;
  }

  public getFileContent(): string {
    return this.document.getText();
  }

  public getFileName(): string {
    const originalFileName = this.document.fileName;
    return originalFileName.replace(/\.js/, '.ts');
  }
}