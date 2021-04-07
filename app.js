const express = require('express');
const app = express();
const port = 8000;
let A = [
    {
        songtitle: 'Ac-cent-tchu-ate the Positive',
        yearsrecorded: '1950 (television)',
        songwriters: 'Harold Arlen, Johnny Mercer'
    },
    {
        songtitle: 'Accidents Will Happen',
        yearsrecorded: '1950',
        songwriters: 'Johnny Burke, Jimmy Van Heusen'
    },
    {
        songtitle: 'Adeste Fideles',
        yearsrecorded: '1946, 1957',
        songwriters: 'John Francis Wade'
    },
    {
        songtitle: 'Ad-Lib Blues',
        yearsrecorded: '1954 (film)',
        songwriters: 'Yip Harburg, Burton Lane'
    },
    {
        songtitle: 'An Affair to Remember (Our Love Affair)',
        yearsrecorded: '1962',
        songwriters: 'Harold Adamson, Leo McCarey, Harry Warren'
    },
    {
        songtitle: "After You've Gone",
        yearsrecorded: '1984',
        songwriters: 'Henry Creamer, Turner Layton'
    },
    {
        songtitle: "Ain't She Sweet",
        yearsrecorded: '1962',
        songwriters: 'Milton Ager, Jack Yellen'
    },
    {
        songtitle: "Ain't Cha Ever Comin' Back?",
        yearsrecorded: '1947',
        songwriters: 'Axel Stordahl, Irving Taylor, Paul Weston'
    },
    {
        songtitle: 'Air For English Horn',
        yearsrecorded: '1945',
        songwriters: 'Alec Wilder'
    },
    {
        songtitle: 'Alice Blue Gown',
        yearsrecorded: '1940 (radio)',
        songwriters: 'Joseph McCarthy, Harry Tierney'
    },
    {
        songtitle: 'All Alone',
        yearsrecorded: '1962',
        songwriters: 'Irving Berlin'
    },
    {
        songtitle: 'All By Myself',
        yearsrecorded: '1976',
        songwriters: 'Eric Carmen'
    },
    {
        songtitle: 'All I Do Is Dream of You',
        yearsrecorded: '1958',
        songwriters: 'Nacio Herb Brown, Arthur Freed'
    },
    {
        songtitle: 'All I Need is the Girl',
        yearsrecorded: '1967',
        songwriters: 'Stephen Sondheim, Jule Styne'
    },
    {
        songtitle: 'All My Tomorrows',
        yearsrecorded: '1958, 1969',
        songwriters: 'Sammy Cahn, Jimmy Van Heusen'
    },
    {
        songtitle: 'All of Me',
        yearsrecorded: '1946, 1947, 1954',
        songwriters: 'Gerald Marks, Seymour Simons'
    },
    {
        songtitle: 'All of You',
        yearsrecorded: '1979',
        songwriters: 'Cole Porter'
    },
    {
        songtitle: 'All or Nothing at All',
        yearsrecorded: '1939, 1961, 1966, 1977',
        songwriters: 'Arthur Altman, Jack Lawrence'
    },
    {
        songtitle: 'All the Things You Are',
        yearsrecorded: '1945',
        songwriters: 'Oscar Hammerstein II, Jerome Kern'
    },
    {
        songtitle: 'All the Way',
        yearsrecorded: '1957, 1963',
        songwriters: 'Sammy Cahn, Jimmy Van Heusen'
    }
]
var n = A.length;
//var X = A[Math.floor(Math.random() * n)];

app.get('/', (req, res) => {
  res.send(A[Math.floor( Math.random() * n )])
});

app.get('/birth_date', (req, res) => {
  res.send('December 12, 1915')
});

app.get('/birth_city', (req, res) => {
  res.send('Hoboken, New Jersey, U.S.')
});

app.get('/wives', (req, res) => {
  res.send('Nancy Barbato (m. 1939; div. 1951), Ava Gardner (m. 1951; div. 1957), Mia Farrow (m. 1966; div. 1968), Barbara Marx (m. 1976)')
});

app.get('/picture', (req, res) => {
  res.send('https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg')
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}!`)
});
