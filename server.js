const express = require('express')
const mongoose = require('mongoose')
const Recipe = require('./models/recipe')

const app = express()

const dbURI = 'mongodb+srv://admin-chef:Pv83YmBdIaOssYTw@dbcluster.mdgif.mongodb.net/recipis?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedToPology:true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

app.get('/add',(req,res)=>{
    const recipe = new Recipe({
        title:'Adobo para sa pagbabago',
        body: 'Add the new era'
    })
    recipe.save()
        .then((result) => {
            console.log("added documents")
            res.send(result)
        })
        .catch((err) =>{
            console.log(err)
        })
})