<!DOCTYPE html>
<html>
	<head>
		<title>Elenco (:tipo ~ piatti:)</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="bootstrap/bootstrap-3.3.7-dist/css/bootstrap.min.css">
		<script type="text/javascript" src="bootstrap/jquery-3.1.1.min.js"></script>
		<script type="text/javascript" src="bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="css/general.css">
	</head>
	<body>
		<div class="container">
			<div class="jumbotron">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1 class="centra">Elenco (:tipo ~ piatti:)</h1>
					</div>
				</div>
				<hr>
				<form action="/scegliPrimo" method="POST">
					<div class="list-group">
						<div class="list-group-item panel panel-primary">
							<div class="panel-body">
								<div class="row">
									<div class="col-xs-4">
										<a href="#dettagliPiatto?id=1">
											<img class="img-max-height-150 img-responsive center-block" src="#">
										</a>
									</div>
									<div class="col-xs-7">
										<div class="row">
											<div class="col-xs-12">
												<h3>(:piatto ~ Nome del piatto 1:)</h3>
											</div>
										</div>
									</div>
									<div class="col-xs-1">
										<input type="radio" class="radio" name="iPrimo" value="(:piatto.id ~ 1:)">
									</div>
								</div>
							</div>
						</div>
						<div class="list-group-item panel panel-primary">
							<div class="panel-body">
								<div class="row">
									<div class="col-xs-4">
										<a href="#dettagliPiatto?id=2">
											<img class="img-max-height-150 img-responsive center-block" src="#">
										</a>
									</div>
									<div class="col-xs-7">
										<div class="row">
											<div class="col-xs-12">
												<h3>(:piatto ~ Nome del piatto 2:)</h3>
											</div>
										</div>
									</div>
									<div class="col-xs-1">
										<input type="radio" class="radio" name="iPrimo" value="(:piatto.id ~ 2:)">
									</div>
								</div>
							</div>
						</div>
						<div class="list-group-item panel panel-primary">
							<div class="panel-body">
								<div class="row">
									<div class="col-xs-4">
										<a href="#dettagliPiatto?id=3">
											<img class="img-max-height-150 img-responsive center-block" src="#">
										</a>
									</div>
									<div class="col-xs-7">
										<div class="row">
											<div class="col-xs-12">
												<h3>(:piatto ~ Nome del piatto 3:)</h3>
											</div>
										</div>
									</div>
									<div class="col-xs-1">
										<input type="radio" class="radio" name="iPrimo" value="(:piatto.id ~ 3:)">
									</div>
								</div>
							</div>
						</div>
						<div class="list-group-item panel panel-primary">
							<div class="panel-body">
								<div class="row">
									<div class="col-xs-4">
										<a href="#dettagliPiatto?id=4">
											<img class="img-max-height-150 img-responsive center-block" src="#">
										</a>
									</div>
									<div class="col-xs-7">
										<div class="row">
											<div class="col-xs-12">
												<h3>(:piatto ~ Nome del piatto 4:)</h3>
											</div>
										</div>
									</div>
									<div class="col-xs-1">
										<input type="radio" class="radio" name="iPrimo" value="(:piatto.id ~ 4:)">
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr>
					<div class="row">
						<div class="col-xs-4 col-xs-offset-4">
							<input type="button" class="btn btn-lg btn-block btn-success" value="Conferma">
						</div>
					</div>
				</form>
			</div>
		</div>
	</body>
</html>
