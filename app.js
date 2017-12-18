 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/app", function(req, res) {
	console.log('GET  ' + req.url);
	console.log('>>>> payload : ' + JSON.stringify(req.params));
    res.sendFile( __dirname + '/app/index.html');
 });

  app.get("/servizi/test.json", function(req, res) { 
	console.log('GET   ' + req.url);
    console.log('>>>> payload : ' + JSON.stringify(req.params));
	var objOK = {status:"OK", message:"Richiesta Elaborata Correttamente!!"};
	var objKO = {status:"OK", message:"Richiesta terminata in errore!!", detail: "java.lang.NullPointerException : Line 56"};
	if(Math.ceil(2*Math.random())==1)
		res.send(objOK);
	else
		res.send(objKO);
  });

  app.post("/servizi/test.json", function(req, res) { 
	console.log('POST  ' + req.url);
    console.log('>>>> payload : ' + JSON.stringify(req.params));
	var objOK = {status:"OK", message:"Richiesta Elaborata Correttamente!!"};
	var objKO = {status:"OK", message:"Richiesta terminata in errore!!", detail: "java.lang.NullPointerException : Line 56"};
	if(Math.ceil(2*Math.random())==1)
		res.send(objOK);
	else
		res.send(objKO);
  });
  app.get("/servizi/hello/:nome", function(req, res) { 
	console.log('GET   ' + req.url);
    console.log('>>>> payload : ' + JSON.stringify(req.params));
	var obj = {status:"OK", message:"Benvenuto, " + req.params.nome};

	res.send(obj);
  });
  
  
  
 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
	 console.log('GET  ' + req.url);
     console.log('>>>> payload : ' + JSON.stringify(req.params));
     res.sendFile( __dirname + req.params[0]); 
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });