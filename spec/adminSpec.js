var request = require('request');
var options = {
	followRedirect:false,
	jar:true
};
var base = "http://localhost:8848/";

describe("Test sulle azioni dell'amministratore\n",function(){
	it("LogIn admin: ",function(done){
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
	it("Get admin.html:\n",function(done){
		request.get(base+'files/admin.html',function(error,response,body){
			expect(response.statusCode).toBe(200);
			done();
		});
	});
	
	describe("Aggiunta piatti\n",function(){
		it("Piatto nuovo",function(done){
			options.form = {
				iNome : 'Nuovo Piatto',
				iTipo : '1',
				iIngredienti : 'farina, uova, ...',
				iAllergeni : 'uova',
				iCuriosita : 'Provalo, è buonissimo!!'
			};
			request.post(base+'AddPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/admin.html");
				done();
			});
		});
	});
});