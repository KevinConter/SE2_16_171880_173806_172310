var request = require("request")
var options = {followRedirect:false,
			jar:true};

var base='http://localhost:8848/';

describe("Azioni Utente\n",function(){
	describe("Ordinazione corretta totale\n",function(){
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
		
		it("Index.html: ",function(done){
			request.get(base+'files/index.html',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		
		it("Accedo ai primi: ",function(done){
			options.form = {iTipo:'primo'};
			request.post(base+'GetPiatti',options,function(erromr,response,body){
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
		
		it("Conferma: ",function(done){
			request.get(base+'Conferma',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/final.html");
				
				request.post(base+'LogOut');//Eseguo il LogOut alla fine della sequenza di test
				done();
			});
		});
	});
	
	describe("ordine Parziale",function(){
		it("LogIn: ",function(done){
			options.form = {iMail:'prova@gmail.com',
						iPassword:'password'
			};
			request.post(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
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
		it("Ordino le Patatine: ",function(done){
			options.form = {iPiatto:'Patatine fritte'};
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		it("Conferma: ",function(done){
			request.get(base+'Conferma',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/final.html");
				done();
			});
		});
		it("LogOut: ",function(done){
			request.get(base+'LogOut',options);//Eseguo il LogOut alla fine della sequenza di test
			done();
		});
		
	});
	
	describe("Test su GetDettagliPiatto",function(){
		it("LogIn: ",function(done){
			options.form={
				iMail:'nome@gmail.com',
				iPassword:'password'
			};
			request.post(base+'LogIn',options,function(error,response,body){
				done();
			});
		});
		it("Dettagli piatto esistente: Budino: ",function(done){
			request.get(base+'GetDettagliPiatto?nome=Budino',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				expect(body).toContain("Budino");
				expect(body).toContain("Non ci sono curiosita'");
				done();
			});
		});
		it("Dettagli piatto inesistente: ",function(done){
			request.get(base+'GetDettagliPiatto?nome=qwerty',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				expect(body).toContain('Il piatto richiesto non è stato trovato sul server.');
				done();
			});
		});
		it("Dettagli piatto nome vuoto",function(done){
			request.get(base+'GetDettagliPiatto?nome=',options,function(error,response,body){
				expect(response.statusCode).toBe(409);
				expect(body).toContain('ERRORE');
				done();
			});
		});
		it("Dettagli piatto senza nome",function(done){
			request.get(base+'GetDettagliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(409);
				expect(body).toContain('ERRORE');
				done();
			});
		});
		it("LogOut: ",function(done){
			request.get(base+'LogOut',options);//Eseguo il LogOut alla fine della sequenza di test
			done();
		});
	});
	
	describe("Test sulla scelta del piatto:",function(){
		it("Nuovo Utente",function(done){
			options.form = {
				iNome : 'Test',
				iCognome : 'Scelta',
				iIndirizzo : 'indirizzo di test, 10',
				iData : '1995-12-29',
				iRecapito : '0461 123456',
				iMail : 'test.scelta@gmail.com',
				iPassword : 'testpwd'
			};
			request.post(base+'SignIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		describe("Scelta Primo",function(){
			it("Ordino pasta alla genovese: ",function(done){
				options.form = {iPiatto:'Pasta alla Genovese'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino pasta al Ragu\' : ",function(done){
				options.form = {iPiatto:'Pasta al Ragu\''};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino pasta alla genovese: ",function(done){
				options.form = {iPiatto:'Pasta alla Genovese'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Resoconto: ",function(done){
				request.post(base+'GetResoconto',options,function(error,response,body){
					expect(response.statusCode).toBe(200);
					expect(body).toContain("Pasta alla Genovese");
					done();
				});
			});
		});
		describe("Scelta Secondo",function(){
			it("Ordino Cotoletta: ",function(done){
				options.form = {iPiatto:'Cotoletta alla Milanese'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino Arrosto: ",function(done){
				options.form = {iPiatto:'Arrosto di Maiale'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino Cotoletta: ",function(done){
				options.form = {iPiatto:'Cotoletta alla Milanese'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Resoconto: ",function(done){
				request.post(base+'GetResoconto',options,function(error,response,body){
					expect(response.statusCode).toBe(200);
					expect(body).toContain("Pasta alla Genovese");
					expect(body).toContain("Cotoletta alla Milanese");
					done();
				});
			});
		});
		describe("Scelta Contorno",function(){
			it("Ordino Patatine: ",function(done){
				options.form = {iPiatto:'Patatine fritte'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino Cavolo: ",function(done){
				options.form = {iPiatto:'Cavolo'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino Patatine: ",function(done){
				options.form = {iPiatto:'Patatine fritte'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Resoconto: ",function(done){
				request.post(base+'GetResoconto',options,function(error,response,body){
					expect(response.statusCode).toBe(200);
					expect(body).toContain("Pasta alla Genovese");
					expect(body).toContain("Cotoletta alla Milanese");
					expect(body).toContain("Patatine fritte");
					done();
				});
			});
		});
		describe("Scelta Dessert",function(){
			it("Ordino Budino: ",function(done){
				options.form = {iPiatto:'Budino'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
					done();
				});
			});
			it("Ordino Yogurt: ",function(done){
				options.form = {iPiatto:'Yogurt magro'};
				request.post(base+'ScegliPiatto',options,function(error,response,body){
					expect(response.statusCode).toBe(302);
					expect(body).toContain("Redirecting to /files/index.html");
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
					expect(body).toContain("Pasta alla Genovese");
					expect(body).toContain("Cotoletta alla Milanese");
					expect(body).toContain("Patatine fritte");
					expect(body).toContain("Budino");
					done();
				});
			});
		});
		it("LogOut: ",function(done){
			request.get(base+'LogOut',options);//Eseguo il LogOut alla fine della sequenza di test
			done();
		});
	});
});