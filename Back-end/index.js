const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var fs = require("fs");
var text = fs.readFileSync("./dictionaries/nederlands3.txt").toString('utf-8');
var dutchDictionary = text.split("\n")

app.get('/', (req, res) => {
  res.send({ isWord: true });
  console.log('request');
});

app.get('/:word', (req, res) => {
  if(dutchDictionary.includes(req.params.word) && req.params.word.length > 1){
    res.send({ isWord: true });
  }
  else{
    res.send({ isWord: false });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));