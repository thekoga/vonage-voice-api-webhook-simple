const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());



app.get('/answer', (req, res) => {
  console.log(req.body);

	let ncco = [
	  {
		  action: 'talk',
			text: 'this is Vonage.  Thank you for calling.'
		}
	];

	res.json(ncco);
});

app.post('/event', (req, res) => {
	console.log(req.body);
	res.sendStatus(200);
});


app.listen(3000);
