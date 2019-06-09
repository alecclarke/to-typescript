import { TSAdapter } from "./tsAdapterInterface";
import { CoffeeScriptAdapter } from "./coffeeScriptAdapter";
import { JavaScriptAdapter } from "./javaScriptAdapter";
import { TextDocument } from "vscode";

export function tsAdapterFor(document: TextDocument): TSAdapter {
  switch (document.languageId) {
    case "coffeescript":
      return new CoffeeScriptAdapter(document);
    case "javascript":
      return new JavaScriptAdapter(document);
    default:
      throw new Error(`toTypeScript(): No adapter for ${document.languageId}`);
  }
}
