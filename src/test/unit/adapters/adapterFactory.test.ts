import { expect } from 'chai';
import { TextDocument } from 'vscode';
import { tsAdapterFor } from '../../../adapters/adapterFactory';
import { CoffeeScriptAdapter } from '../../../adapters/coffeeScriptAdapter';
import { JavaScriptAdapter } from '../../../adapters/javaScriptAdapter';

describe("tsAdapterFor", function () {
  it("returns a CoffeeScriptAdapter when the document is CoffeeScript", function() {
    const document = {
      languageId: "coffeescript",
    } as TextDocument;

    expect(tsAdapterFor(document)).to.be.an.instanceOf(CoffeeScriptAdapter);
  });

  it("returns a JavaScriptAdapter when the document is JavaScript", function() {
    const document = {
      languageId: "javascript",
    } as TextDocument;

    expect(tsAdapterFor(document)).to.be.an.instanceOf(JavaScriptAdapter);
  });

  it("throws an error when the document type doesn't have a supported adapter", function() {
    const document = {
      languageId: "unknown",
    } as TextDocument;

    expect(() => tsAdapterFor(document)).to.throw(/toTypeScript\(\)\: No adapter for unknown/);
  });
});
