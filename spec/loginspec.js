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
	
	describe("Get /files/error.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'files/error.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /files/admin.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'files/admin.html',options,function(error,response,body){
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
	
	describe("Get /files/final.html\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'files/final.html',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Get /Conferma\n",function(){
		it("Non loggato: ",function(done){
			request.get(base+'Conferma',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /EditUser\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'EditUser',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /GetPiatti\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'GetPiatti',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /ScegliPiatto\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'ScegliPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /GetResoconto\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'GetResoconto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /SaltaOrdine\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'SaltaOrdine',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /EliminaPiatto\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'EliminaPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /GetPiatto\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'GetPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /AddPiatto\n",function(){
		it("Non loggato: ",function(done){
			request.post(base+'AddPiatto',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
				done();
			});
		});
	});
	
	describe("Post /LogIn\n",function(){
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
	
	describe("Get /LogOut\n",function(){
		it("Provo a sloggarmi: ",function(done){
			request.get(base+'LogOut',options,function(error,response,body){
				expect(response.statusCode).toBe(302);
				expect(body).toContain("Redirecting to /files/logIn.html");
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