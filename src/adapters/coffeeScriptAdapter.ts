import { convert } from 'decaffeinate';
import { TextDocument } from 'vscode';
import { TSAdapter } from './tsAdapterInterface';
import { getCoffeescriptConfig } from '../configUtils';

export class CoffeeScriptAdapter implements TSAdapter {
  private document: TextDocument;

  constructor (document: TextDocument) {
    this.document = document;
  }

  public getFileContent(): string {
    const coffeeScriptContent = this.document.getText();
    const options = getCoffeescriptConfig();
    return convert(coffeeScriptContent, options).code;
  }

  public getFileName(): string {
    const originalFileName = this.document.fileName;
    return originalFileName.replace(/\.coffee/, '.ts');
  }
}
