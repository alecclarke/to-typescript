import { expect } from 'chai';
import { buildTSFixIds, getCoffeescriptConfig } from '../../configUtils';

describe("buildTSFixIds", function () {
  it("returns the fixIds defined in the settings", function() {
    const defaultFixIds = [
      "inferFromUsage",
      "convertToAsyncFunction",
      "addMissingMember",
      "forgottenThisPropertyAccess",
      "fixUnreachableCode",
      "fixUnusedLabel",
      "fixAwaitInSyncFunction",
      "fixExpectedComma",
      "requireInTs",
    ];

    expect(defaultFixIds).to.eql(buildTSFixIds());
  });
});

describe("getCoffeescriptConfig", function () {
  it("returns the default coffeescript config", async function() {
    const expected = {disableSuggestionComment: true};
    expect(expected).to.eql(getCoffeescriptConfig());
  });
});
