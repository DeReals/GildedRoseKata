const {Shop, Item} = require("./gilded_rose");

// test: example name test
describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("fixme", 0, 0)]);  //name, Selln, Quality
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });

  // test: quality test
  it("General Quality test", function(){
    const gildedRose = new Shop([new Item("Bread", 0, 20)]); // create a new object
    const items = gildedRose.updateQuality();  // this would be like a day pass
    expect(items[0].quality).toBe(18);  // select the quality to be testesd
  });

  // test: for Aged Brie Quality
  it("Aged Brie Quality test", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 30, 10), new Item("Aged Brie", 20, 20), new Item("Aged Brie", 10, 30), new Item("Aged Brie", 5, 49)]); // create a new object
    const items = gildedRose.updateQuality();  // this would be like a day pass
    expect(items[0].quality).toBe(11);  // select the quality to be testesd
    expect(items[1].quality).toBe(21);
    expect(items[2].quality).toBe(31);
    expect(items[3].quality).toBe(50);
  });

  // test: backstage quality
  it("Backstage test", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);

  });

  // test: Quality over 50

  // test: Sulfuras never decreases in quality

  // test: Backstage passes. Increases in quality as the Selling date approached

  // test: Quality drops to 0 after the concert



});


