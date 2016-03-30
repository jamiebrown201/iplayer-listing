var request = require("request");
var helloWorld = require("../server.js")
var port  	= process.env.PORT || 8080;
var base_url = "http://localhost:" + port;

describe("Server test", function(){
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toContain("Hello World");
        helloWorld.closeServer();
        done();
      });
    });
  });
});
