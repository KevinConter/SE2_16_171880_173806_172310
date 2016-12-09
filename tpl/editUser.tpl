<html>

<head>
	<title>Profilo</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width , initial-scale=1">

    <script type="text/javascript" src="bootstrap/jquery-3.1.1.min.js"></script>	
    <script type="text/javascript" src="bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    <link href="bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    
    <link href="css/general.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/form.js"></script>
    <script type="text/javascript" src="js/editUser.js"></script>

</head>

<body>

    <!-- navbar -->    
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/files/index.html">APSP Pasti</a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                 </button>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-left">
                    <li class="active"><a  href="/files/index.html">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li> 
                    <li><a href="#">Page 3</a></li> 
                </ul>
                
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/files/editUser.html" role="button" class="btn btn-lg btn-block">
                            <span class="glyphicon glyphicon-user"> </span>
                            Profilo
                        </a>
                    </li>
                    <li>
                        <a href="/LogOut" role="button" class="btn btn-lg btn-block">
                            <span class="glyphicon glyphicon-log-out"> </span>
                            Esci
                        </a>
                    </li>
                    
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    <!-- navbar -->

	<div class="container">

		<div class="jumbotron">
        
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1 class="centra">Profilo</h1>               
                </div>
            </div>
            <hr>
    
			<form id="modulo" action="/EditUser" method="POST">
            	<input type="hidden" class="form-control" id="iId" name="iID" value="(:id ~ Id:)"> 
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				        <div class="form-group" id="cNome">
				            <label for="iNome" class="control-label"> Nome </label>
				            <input type="text" class="form-control" id="iNome" placeholder="Inserisci Nome" maxlength="255" name="iNome" value="(:nome ~ Nome:)">
				        </div>
				   </div>
				</div>
				
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
						<div class="form-group" id="cCognome">
							<label for="iCognome" class="control-label"> Cognome </label>
							<input type="text" class="form-control" id="iCognome" placeholder="Inserisci Cognome" maxlength="255" name="iCognome" value="(:cognome ~ Cognome:)">
						</div>
					</div>
				</div>
				
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				        <div class="form-group" id="cIndirizzo">
				            <label for="iIndirizzo" class="control-label"> Indirizzo </label>
				            <input type="text" class="form-control" id="iIndirizzo" placeholder="Inserisci un indirizzo" maxlength="255" name="iIndirizzo" value="(:indirizzo ~ Indirizzo:)">
				        </div>
				   </div>
				</div>
				
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				        <div class="form-group" id="cData">
				            <label for="iData" class="control-label"> Data </label>
				            <input type="date" class="form-control" id="iData" name="iData" value="(:data ~ Data:)">
				        </div>
				   </div>
				</div>
				
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				        <div class="form-group" id="cRecapito">
				            <label for="iRecapito" class="control-label"> Numero di telefono </label>
				            <input type="number" class="form-control" placeholder="Inserisci un numero di telefono" id="iRecapito" name="iRecapito" value="(:recapito ~ Recapito:)">
				        </div>
				   </div>
				</div>
				
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
						<div class="form-group" id="cMail">
							<label for="iMail" class="control-label"> Indirizzo Mail </label>
							<input type="email" class="form-control" id="iMail" placeholder="example@gmail.com" maxlength="255" name="iMail" value="(:mail ~ Mail:)">
						</div>
					</div>
				</div>
				
				<div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
						<div class="form-group" id="cPassword">
							<label for="iPassword" class="control-label"> Password [min 8 caratteri]</label>
							<input type="password" class="form-control" id="iPassword" placeholder="Inserisci Password" maxlength="255" name="iPassword" value="(:password ~ Password:)">
						</div>
					</div>
				</div>
                
                <div class="row" >
				    <div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
						<div class="form-group" id="cAllergeni">
							<label for="iAllergeni" class="control-label"> Allergeni</label>
						  	<textarea class="form-control" rows="5" id="iAllergeni" name="iAllergeni" style="resize:none">(:allergeni ~ Allergeni:)</textarea>
						</div>
					</div>
				</div>
                
                
				
				
				<hr>
				<div class="row">
				    <div class="col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1">
				        <div class="form-group">
				            <input type="reset" class="form-control btn btn-danger" value="Annulla" onClick="resetta()">
				        </div>
				    </div>
				    <div class="col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-2 col-lg-4 col-lg-offset-2">
				        <div class="form-group">
				            <input type="button" class="form-control btn btn-success" id="btnModifica" value="Modifica" onClick="controlloInvia()">
				        </div>
				    </div>
				</div>
				
				
			</form>

		</div>
	</div>
</body>

</html>


