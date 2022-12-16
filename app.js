const express = require('express');
const app = express();
const port = 8000;
var A = [
	'Ac-cent-tchu-ate the Positive',
	'Accidents Will Happen',
	'Adeste Fideles',
	'Ad-Lib Blues',
	'An Affair to Remember (Our Love Affair)',
	"After You've Gone",
	"Ain't She Sweet",
	"Ain't Cha Ever Comin' Back?",
	'Air For English Horn',
	'Alice Blue Gown',
	'All Alone',
	'All By Myself',
	'All I Do Is Dream of You',
	'All I Need is the Girl',
	'All My Tomorrows',
	'All of Me',
	'All of You',
	'All or Nothing at All',
	'All the Things You Are',
	'All the Way'
]
var n = A.length;

app.get('/', (req, res) => {
	res.send(A[ Math.floor( Math.random() * n ) ])
});

app.get('/birth_date', (req, res) => {
	res.send('December 12, 1915')
});

app.get('/birth_city', (req, res) => {
	res.send('Hoboken, New Jersey, U.S.')
});

app.get('/wives', (req, res) => {
	res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
});

app.get('/picture', (req, res) => {
	res.send('https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg')
});

app.get('/public', (req, res) => {
	res.send("Everybody can see this page")
});

app.get('/protected', function(req, res, next)
{
	var authorization = req.get('authorization');

	if (!authorization)
	{
		res.set('WWW-Authenticate', 'Basic realm=\'Authorization Required\'');
		return res.status( 401 ).send('401 Not authorized');
	}
	else
	{
		var credentials = new Buffer.from(authorization.split(' ').pop(), 'base64').toString('ascii').split(':');
		if (credentials[ 0 ] === 'admin' && credentials[ 1 ] === 'admin' || credentials[ 0 ] === 'iamgoingtobeabillionaire' && credentials[ 1 ] === 'markmywords')
		{
			return res.send("Welcome, authenticated client");
		}
		else
		{
			return res.status( 403 ).send("403 Forbidden");
		}
	}
}); // basic-auth.js, John Flesch `flesch`, 11.05.2013, https://gist.github.com/flesch/7323594
// This part was shamelessly stolen, because fuck this shit. I tried, seriously, but I'm in a hurry, so... Express 4 did not ship with middleware, and basicAuth was part of it, so it broke a lot of stuff. At least, I get it. Also, I could've taken the implementation from the Express repo. https://github.com/expressjs/basic-auth-connect/blob/master/index.js

app.listen(port, () => {
	console.log(`Backend app listening on port ${port}!`)
});
