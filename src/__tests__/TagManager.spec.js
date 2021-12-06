import TagManager from "../TagManager";

describe("TagManager", () => {
  it("should render tagmanager 1", () => {
    TagManager.initialize({ gtmId: "GTM-000000" });
    expect(window.dataLayer).toHaveLength(1);
  });

  it("should render datalayer 2", () => {
    const gtmArgs = {
      gtmId: "GTM-000000",
      dataLayer: {
        userInfo: "userInfo",
      },
    };
    TagManager.initialize(gtmArgs);
    expect(window.dataLayer).toHaveLength(1);
  });
});
