var request = require("request");

var base='http://localhost:8848/';

describe("Login Test\n",function(){
	describe("\tGet /\n",function(){
		it("Non loggato: ",function(done){
			request.get(base,function(error,response,body){
				except(response.statusCode).toBe(302);
				except(response.location).toContain("files/logIn.html");
				done();
			});
		});
	});
	
	describe("\tGet /files/logIn.html",function(){
		it("Accedo al logIn",function(done){
			request.get(base+'files/logIn.html',function(error,response,body){
				except(response.statusCode).toBe(200);
				done();
			});
		});
	});
	
	describe("\tGet /files/index.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base,function(error,response,body){
				except(response.statusCode).toBe(302);
				except(response.location).toContain("files/logIn.html");
				done();
			});
		});
	});
	
	
});