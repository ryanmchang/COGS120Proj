
const express = require('express');
const os = require('os');
const fs = require('fs');
const path = require('path');


const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


app.post('/api/form/chronotype/:chronotype', function (req, res){
  let chronotype = req.params.chronotype;
  writeChronotype(chronotype);
});

app.post('/api/form/drug/:drug', function (req, res){
  let drug = req.params.drug;
  writeDrug(drug);
});

function writeChronotype(value) {
  fs.readFile('./src/client/tempData.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      let obj = JSON.parse(data); //now it an object
      obj.form.chronotype = value; //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('./src/client/tempData.json', json, 'utf8', (err)=>{
        if (err) {
          return console.log(err);
        }
      }); // write it back
  }});
}

function writeDrug(value) {
  fs.readFile('./src/client/tempData.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      let obj = JSON.parse(data); //now it an object
      obj.form.drug = value; //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('./src/client/tempData.json', json, 'utf8', (err)=>{
        if (err) {
          return console.log(err);
        }
      }); // write it back
  }});
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'));
});

console.log(path.join(__dirname + '/../../public/index.html'));
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
