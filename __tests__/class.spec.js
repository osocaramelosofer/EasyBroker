const EasyBroker = require("../class");
const config = require("../index");

describe("EasyBroker", () => {
  const easyBroker = new EasyBroker(config);

  test("should return string array (getTitleList())", async() => {
    const titleList = await easyBroker.getTitleList();
    expect(titleList).toEqual(
      expect.arrayContaining([expect.any(String)])
    );
  });
});
