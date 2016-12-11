var request = require('request');
var options = {
	followRedirect:false,
	jar:true
};
var base = "http://localhost:8848/";

describe("Test sulle azioni dell'amministratore\n",function(){
	describe("LogIn admin: ",function(){
		it("",function(done){
			options.form = {
				iMail:'admin@admin.com',
				iPassword:'password'
			};
			request.post(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/admin.html");
				done();
			});
		});
	});
});