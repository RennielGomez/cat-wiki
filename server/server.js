require('dotenv').config();
const express = require("express");
const https = require("node:https");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors());

app.get("/cat-list", (req, res) => {

   const link = "https://api.thecatapi.com/v1/breeds?page=0&limit=30&api_key=" + process.env.API_KEY;

   https.get(link, resp => {
      let data = "";

      resp.on('data', chunk => {
         data += chunk
      });

      resp.on('end', () => {
         res.json(JSON.parse(data))
      });

   }).on('error', err => {
      console.log('Error: ', err.message);
   });

})

app.post("/cat-page", (req, res) => {

   const breed_ids = req.body.breed_ids;
   const link = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_ids}&limit=10&api_key=`+ process.env.API_KEY;

   https.get(link, resp => {
      let data = "";

      resp.on('data', chunk => {
         data += chunk
      });

      // res.json(JSON.parse(data));

      resp.on('end', () => {
         res.json(JSON.parse(data))
      });

   }).on('error', err => {
      console.log('Error: ', err.message);
   });

})


app.listen(3000, () => console.log("Connect to port: 3000"));