<!DOCTYPE html>
<html>
	<head>
		<title>Home</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="/files/css/general.css">
		<link rel="stylesheet" href="/files/css/index.css">
		<script type="text/javascript" src="/files/js/index.js"></script>

	</head>
	<body onload="init()">
    
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
                        <li class="active"><a  href="/files/index.html" role="button" class="btn btn-lg btn-block">Home</a></li> 
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
						<h1 class="centra">Benvenuto (:user~[:nome ~ Utente:]:)</h1>
					</div>
				</div>
                
				<hr>
				<form id="form" action="/GetPiatti" method="POST">
					<input class="form-control" type="hidden" id="iHidden" name="iTipo">
					<div class="row">
		                <div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
				            <div class="panel panel-primary">
								<div class="panel-heading">
									<h3 class="centra" id="gg"></h3>
								</div>
								<div class="panel-body panel_data">
									<h2 class="centra" id="mm"></h2>
						            <h1 class="centra" id="numgg" ></h1>
						            <h2 class="centra" id="yyyy"></h2>
								</div>
							</div>
						</div>			
		        	</div>
					
					<div class="margin-top-100">
						<div class="row margin-top-bottom-20">
							<div class="col-xs-4 col-xs-offset-1">
								<div class="form-group">
									<input type="button" class="btn btn-lg btn-block btn-primary" onclick="checkButton('primo')" value="Primi">
								</div>
							</div>
							<div class="col-xs-4 col-xs-offset-2">
								<div class="form-group">
									<input type="button" class="btn btn-lg btn-block btn-primary" onclick="checkButton('secondo')" value="Secondi">
								</div>
							</div>
						</div>
						<div class="row margin-top-bottom-20">
							<div class="col-xs-4 col-xs-offset-1">
								<div class="form-group">
									<input type="button" class="btn btn-lg btn-block btn-primary" onclick="checkButton('contorno')" value="Contorni">
								</div>
							</div>
							<div class="col-xs-4 col-xs-offset-2">
								<div class="form-group">
									<input type="button" class="btn btn-lg btn-block btn-primary" onclick="checkButton('dessert')" value="Dessert">
								</div>
							</div>
						</div>
					</div>
				</form>
				<form id="formConferma" action="#" method="POST">
					<div class="margin-top-100">
						<hr>
						<div class="row">
							<div class="col-xs-5 col-xs-offset-1">
								<div class="form-group">
									<input type="button" class="btn btn-lg btn-block btn-success" onclick="conferma()" value="Conferma Ordine">
								</div>
							</div>
							<div class="col-xs-5">
								<div class="form-group">
									<input type="button" class="btn btn-lg btn-block btn-danger" onclick="salta()" value="Salta Ordine">
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</body>
</html>
