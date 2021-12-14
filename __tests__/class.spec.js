const EasyBroker = require("../class");

describe("EasyBroker", () => {
  const easyBroker = new EasyBroker("https://api.stagingeb.com/v1/properties");

  test("should return string array (getTitleList())", async() => {
    const titleList = await easyBroker.getTitleList();
    expect(titleList).toEqual(
      expect.arrayContaining([expect.any(String)])
    );
  });
});
