var request = require("request")
var options = {followRedirect:false,
			jar:true};

var base='http://localhost:8848/';

describe("Azioni Utente\n",function(){
	describe("\n",function(){
		it("LogIn: ",function(done){
			options.form = {iMail:'nome@gmail.com',
						iPassword:'password'
			};
			request.post(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		it("Accedo ai primi: ",function(done){
			options.form = {iTipo:'primo'};
			request.post(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Pasta al Ragu'");
				done();
			});
		});
		it("Dettagli Pasta al Ragu': ",function(done){
			request.get(base+'GetDettagliPiatto?nome=Pasta al Ragu\'',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Pasta al Ragu'");
				expect(body).toContain("Non ci sono curiosita'");
				done();
			});
		});
		it("Ordino Pasta al Ragu': ",function(done){
			options.form = {iPiatto:'Pasta al Ragu\''};
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		
		it("Accedo ai secondi: ",function(done){
			options.form = {iTipo:'secondo'};
			request.post(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Dettagli Cotoletta alla Milanese': ",function(done){
			request.get(base+'GetDettagliPiatto?nome=Cotoletta alla Milanese',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Cotoletta alla Milanese");
				expect(body).toContain("Non ci sono curiosita'");
				done();
			});
		});
		it("Ordino la Cotoletta: ",function(done){
			options.form = {iPiatto:'Cotoletta alla Milanese'};
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		
		it("Accedo ai contorni: ",function(done){
			options.form = {iTipo:'contorno'};
			request.post(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Dettagli Patatine': ",function(done){
			request.get(base+'GetDettagliPiatto?nome=Patatine fritte',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Patatine fritte");
				expect(body).toContain("Non ci sono curiosita'");
				done();
			});
		});
		it("Ordino le Patatine: ",function(done){
			options.form = {iPiatto:'Patatine fritte'};
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		
		it("Accedo ai dessert: ",function(done){
			options.form = {iTipo:'dessert'};
			request.post(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Dettagli Budino: ",function(done){
			request.get(base+'GetDettagliPiatto?nome=Budino',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Budino");
				expect(body).toContain("Non ci sono curiosita'");
				done();
			});
		});
		it("Ordino Budino: ",function(done){
			options.form = {iPiatto:'Budino'};
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		
		it("Resoconto: ",function(done){
			request.post(base+'GetResoconto',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Pasta al Ragu'");
				expect(body).toContain("Cotoletta alla Milanese");
				expect(body).toContain("Patatine fritte");
				expect(body).toContain("Budino");
				done();
			});
		});
	});

});