
var collectionMovie = require('../src/collections/movie');

describe("Create collection movie", function() {


  var collection = new collectionMovie;
  collection.create();

  var model = collection.models[0];

  it("has api_key by default", function() {
    expect(model.get('api_key')).toBe('d272326e467344029e68e3c4ff0b4059');
  });

  it("has language US by default", function() {
    expect(model.get('language')).toBe('en-US');
  });

  it("has item_id null by default", function() {
    expect(model.get('item_id')).toBe(null);
  });
});
    