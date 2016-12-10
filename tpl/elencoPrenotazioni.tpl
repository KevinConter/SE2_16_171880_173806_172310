<!DOCTYPE html>
<html>
	<head>
		<title>Elenco prenotazioni</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="files/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css">
		<script type="text/javascript" src="files/bootstrap/jquery-3.1.1.min.js"></script>
		<script type="text/javascript" src="files/bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="files/css/general.css">
	</head>
	<body>
    
    	<!-- navbar -->    
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/files/admin.html">APSP Pasti</a>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                 	 </button>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-left">
                        <li><a  href="/files/admin.html" role="button" class="btn btn-lg btn-block">Home</a></li>
                        <li class="active"><a href="/GetElencoPrenotazioni" role="button" class="btn btn-lg btn-block">
                        	<span class="glyphicon glyphicon-list-alt"></span> 
                        	Elenco Prenotazioni
                        	</a>
                        </li>
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
						<h1 class="centra">Elenco prenotazioni (:data:)</h1>
					</div>
				</div>
				<hr>
				<div class="list-group">
					(:elenco ~
					<div class="list-group-item panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">[:user ~ {:nome:} {:cognome:} tel: {:recapito:} Indirizzo: {:via:}:]</h3>
						</div>
						<div class="panel-body">
							<ul>
								[:piatti ~
									<li><b>{:tipo:}</b> -> {:nome:}</li>
								:]
							</ul>
						</div>
					</div>
					:)
				<hr>
				<div class="row">
					<div class="col-xs-4 col-xs-offset-4">
	    				<a role="button" class="btn btn-lg btn-block btn-danger" href="javascript:history.back()">Indietro</a>
	    			</div>
				</div>
			</div>
		</div>
	</body>
</html>
