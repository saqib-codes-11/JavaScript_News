exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["e2e/*.js"],
  baseUrl: "http://localhost:8080",

  onPrepare: function() {
    require("protractor-http-mock").config = {
      rootDirectory: __dirname,
      protractorConfig: "protractor.conf.js",
      mocks: {
        dir: "e2e/mocks"
      }
    };
  }
}
