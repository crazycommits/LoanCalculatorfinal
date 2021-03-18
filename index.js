const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static('public'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

const port =8081;
app.listen(port,()=>{
console.log(`App running on ${port}`);
})