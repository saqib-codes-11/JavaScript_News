describe("ArticleHeadlineController", function() {
  var $httpBackend, controller;

  beforeEach(module("newsSummaryApp"));

  beforeEach(inject(function($controller, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    controller = $controller("ArticleHeadlineController");
  }));

  it("exposes the headline of an article", function() {
    $httpBackend
      .whenGET("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http:%2F%2Fcontent.guardianapis.com%2Fworld%2F2013%2Fjun%2F09%2Fedward-snowden-nsa-whistleblower-surveillance")
      .respond({
        response: { content: { webTitle: "Edward Snowden: the whistleblower behind the NSA surveillance revelations" } }
      });

    $httpBackend.flush();

    expect(controller.headline)
      .toEqual("Edward Snowden: the whistleblower behind the NSA surveillance revelations");
  });
});
