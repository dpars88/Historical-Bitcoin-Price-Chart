const express = require('express');
const app = express();
const port = 3088;
const axios = require('axios');

app.use(express.static(__dirname + '/../public'));

app.get('/data', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-01-01&end=2019-11-20')
    .then((response) => {
      res.send(response.data);
    })
  });

app.listen(port, () => console.log(`App listening on port ${port}`))

