const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://admin-chef:Pv83YmBdIaOssYTw@dbcluster.mdgif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedToPology:true})
    .then((result) => console.log("connected to the db"))
    .catch((err) => console.log(err))