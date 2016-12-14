var request = require("request")
var options = {followRedirect:false,jar:true};

var base='http://localhost:8848/';

describe("Login Test\n",function(){
	describe("-> /\n",function(){
		it("Get: ",function(done){
			request.get(base,options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base,options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/logIn.html",function(){
		it("Get:",function(done){
			request.get(base+'files/logIn.html',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/logIn.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/signIn.html",function(){
		it("Get:",function(done){
			request.get(base+'files/signIn.html',options,function(error,response,body){
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/signIn.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/index.html\n",function(){
		it("Get: ",function(done){
			request.get(base+'files/index.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/index.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/error.html\n",function(){
		it("Get: ",function(done){
			request.get(base+'files/error.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/error.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/admin.html\n",function(){
		it("Get: ",function(done){
			request.get(base+'files/admin.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/admin.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /GetDettagliPiatto\n",function(){
		it("Get: ",function(done){
			request.get(base+'GetDettagliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'GetDettagliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/editUser.html\n",function(){
		it("Get: ",function(done){
			request.get(base+'files/editUser.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/editUser.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /files/final.html\n",function(){
		it("Get: ",function(done){
			request.get(base+'files/final.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'files/final.html',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /Conferma\n",function(){
		it("Get: ",function(done){
			request.get(base+'Conferma',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'Conferma',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	
	
	
	describe("-> /EditUser\n",function(){
		it("Get: ",function(done){
			request.get(base+'EditUser',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'EditUser',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /GetPiatti\n",function(){
		it("Get: ",function(done){
			request.get(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /ScegliPiatto\n",function(){
		it("Get: ",function(done){
			request.get(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /GetResoconto\n",function(){
		it("Get: ",function(done){
			request.get(base+'GetResoconto',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'GetResoconto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /SaltaOrdine\n",function(){
		it("Get: ",function(done){
			request.get(base+'SaltaOrdine',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'SaltaOrdine',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /EliminaPiatto\n",function(){
		it("Get: ",function(done){
			request.get(base+'EliminaPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'EliminaPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /GetPiatto\n",function(){
		it("Get: ",function(done){
			request.get(base+'GetPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'GetPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /AddPiatto\n",function(){
		it("Get: ",function(done){
			request.get(base+'AddPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'AddPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("-> /GetElencoPrenotazioni\n",function(){
		it("Get: ",function(done){
			request.get(base+'GetElencoPrenotazioni',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain('Redirecting to /');
				done();
			});
		});
		it("Post: ",function(done){
			request.post(base+'GetElencoPrenotazioni',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("-> /LogIn\n",function(){
		it("Get: ",function(done){
			request.get(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		
		it("Provo a loggarmi con utente sbagliato: ",function(done){
			options.form = {iMail:'asd@asd.asd',iPassword:'password'};
			request.post(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		
		it("Provo a loggarmi con utente giusto: ",function(done){
			options.form = {iMail:'nome@gmail.com',iPassword:'password'};
			request.post(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
	});
	
	describe("-> /LogOut\n",function(){
		it("Post: ",function(done){
			request.post(base+'LogOut',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
		
		it("Provo a sloggarmi: ",function(done){
			request.get(base+'LogOut',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe('-> /SignIn',function(){
		it("Get: ",function(done){
			request.get(base+'SignIn',options,function(error,response,body){
				expect(response.statusCode).toBe(404);
				done();
			});
		});
	});
	
	describe("Nuova registrazione corretta\n",function(){
		it("Registrazione Utente: ",function(done){
			options.form = {
				iNome : 'prova',
				iCognome : 'prova',
				iIndirizzo : 'via da qui',
				iData : '2016-12-09',
				iRecapito : '0123456789',
				iMail : 'prova@gmail.com',
				iPassword : 'password'
			};
			request.post(base+'SignIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		it("Provo a sloggarmi: ",function(done){
			request.get(base+'LogOut',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		
		it("Provo a loggarmi con utente nuovo: ",function(done){
			options.form = {iMail:'prova@gmail.com',iPassword:'password'};
			request.post(base+'LogIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		it("Mi sloggo: ",function(done){
			request.get(base+'LogOut',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
		
	});
	
	
	describe("Nuova registrazione errata\n",function(){
		it("Registrazione Utente già presente: ",function(done){
			options.form = {
				iNome : 'nome',
				iCognome : 'cognome',
				iIndirizzo : 'via da qui',
				iData : '2016-12-09',
				iRecapito : '0123456789',
				iMail : 'nome@gmail.com',
				iPassword : 'password'
			};
			request.post(base+'SignIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
		
		it("Registrazione Utente: ",function(done){
			options.form = {
				iNome : 'prova',
				iCognome : 'prova',
				iIndirizzo : 'via da qui',
				iData : '2016-12-09',
				iRecapito : '0123456789',
				iMail : 'prova@gmail.com',
				iPassword : 'password'
			};
			request.post(base+'SignIn',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/index.html");
				done();
			});
		});
	});
	
});