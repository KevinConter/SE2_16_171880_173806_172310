<!DOCTYPE html>
<html>
	<head>
		<title>Conferma ordinazione</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<link href="/files/css/general.css" rel="stylesheet" type="text/css">
		<link href="/files/css/final.css" rel="stylesheet" type="text/css">
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
                        <li><a  href="/files/index.html" role="button" class="btn btn-lg btn-block">Home</a></li>
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
						<h1 class="centra">Conferma ordinazione</h1>                
		            </div>
		        </div>
				<hr> 
		        <div class="row">
		                <div class=" thumbnail col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 sfondo">
		                    <h1 class="centra">
		                        Il tuo ordine è stato ricevuto correttamente
		                        <br>
		                        <span class="glyphicon glyphicon-check"></span>
		                    </h1>
		                </div>
		        </div>
		        <div class="row">
		        	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		        		<h1 class="centra">Buon Appetito!!</h1>
		        	</div>
		        </div>
		        <hr>
		        <div class="row">
		        	<div class="col-xs-5 col-xs-offset-1">
		        		<a href="/files/index.html" role="button" class="btn btn-lg btn-block btn-primary">
		        			<span class="glyphicon glyphicon-arrow-left"> </span>
		        			Torna al menù
		        		</a>
		        	</div>
		        	<div class="col-xs-5">
		        		<a href="/LogOut" role="button" class="btn btn-lg btn-block btn-danger">
		        			Esci 
		        			<span class="glyphicon glyphicon-log-out"></span>
		        		</a>
		        	</div>
		        </div>
			</div>
		</div>
	</body>
</html>
