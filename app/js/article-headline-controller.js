angular.module("newsSummaryApp")
  .controller("ArticleHeadlineController", ["$http", function($http) {
    var self = this;

    var ARTICLE_ID = "world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance";
    var API_URL = "http://news-summary-api.herokuapp.com/guardian";
    var GUARDIAN_API_URL = "http://content.guardianapis.com/";

    $http({
      url: API_URL,
      params: { apiRequestUrl: GUARDIAN_API_URL + ARTICLE_ID }
    }).then(function(response) {
      self.headline = response.data.response.content.webTitle;
    });

    // this controller feels bloated...
  }]);
