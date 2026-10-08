const {Shop, Item} = require("./gilded_rose");

// test: 
describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("fixme", 0, 0)]);  //name, Selln, Quality
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });

  it("Quality test", function(){
    const gildedRose = new Shop([new Item("Bread", 0, 20)]); // create a new object
    const items = gildedRose.updateQuality();  // this would be like a day pass
    expect(items[0].quality).toBe(18);

  });


});


