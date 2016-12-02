<!DOCTYPE html>
<html>
	<head>
		<title>Home</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css">
		<script type="text/javascript" src="bootstrap/jquery-3.1.1.min.js"></script>
		<script type="text/javascript" src="bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="css/general.css">
		<script type="text/javascript" src="js/index.js"></script>
	</head>
	<body>
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
					<div class="margin-top-100">
						<div class="row">
							<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
								<div class="form-group">
									<label class="control-label" for="iData">Scegli il giorno per cui vuoi prenotare</label>
									<input type="date" class="form-control" id="iData" name="iData">
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
