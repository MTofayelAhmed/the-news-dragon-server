const express = require ('express')
const app = express();
const port = 5000;
const categories = require ('./Data/categories.json')
const cors= require('cors')

app.use(cors())
app.get('/', (req, res)=> {
  res.send('Dragon is running')
})

app.get('/categories', (req, res)=> {
  res.send(categories)
})

app.listen(port, ()=>{
  console.log(`dragon api is running on port: ${port}`)
})