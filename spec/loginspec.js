var request = require("request")
var options = {followRedirect:false};

var base='http://localhost:8848/';

describe("Login Test\n",function(){
	describe("Get /\n",function(){
		it("Non loggato: ",function(done){
			request.get(base,options,function(error,response,body){
				console.log(body);
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /files/logIn.html",function(){
		it("Accedo al logIn",function(done){
			request.get(base+'files/logIn.html',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});
	
	describe("Get /files/signIn.html",function(){
		it("Accedo al sigIn",function(done){
			request.get(base+'files/signIn.html',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});
	
	describe("Get /files/index.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'files/index.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /files/resoconto.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'files/resoconto.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /GetDettagliPiatto\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'GetDettagliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /files/editUser.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'files/editUser.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /EditUser\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'EditUser',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /GetPiatti\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /ScegliPiatto\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /GetResoconto\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'GetResoconto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /SaltaOrdine\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'SaltaOrdine',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
});