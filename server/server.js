const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/",(req,res) => {

    res.json({message:"Error"})
})
//listen for request
app.listen(3000);
