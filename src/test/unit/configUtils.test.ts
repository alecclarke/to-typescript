import { expect } from 'chai';
import { buildTSFixIds } from '../../configUtils';

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