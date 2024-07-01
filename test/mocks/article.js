module.exports = [{
  request: {
    method: "GET",
    path: "http://news-summary-api.herokuapp.com/guardian",
    params: {
      apiRequestUrl: "http://content.guardianapis.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance"
    }
  },

  response: {
    data: {
      response: {
        content: {
          webTitle: "Edward Snowden headline",
        }
      }
    }
  }
}];
