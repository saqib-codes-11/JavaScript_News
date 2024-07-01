var mock = require('protractor-http-mock');

describe("app shows article headline on the home page", function() {
  beforeEach(function() {
    mock(["article"]);
  });

  afterEach(function(){
    mock.teardown();
  });

  it("should show Edward Snowden headline", function() {
    browser.get('/');
    expect($("#headline").getText())
      .toEqual("Edward Snowden headline");
  });
});
