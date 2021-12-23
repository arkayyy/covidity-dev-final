//const BlogPost=require('./models/BlogPost')
const express=require('express');
const morgan = require('morgan');
const routes = require('./routes/api')

const mongoose = require('mongoose');
const path=require('path');
const router=express.Router()

const cors=require('cors');






const { urlencoded } = require('body-parser');


const app=express();
const PORT = process.env.PORT || 5000;

const MONGO_URI='mongodb+srv://admin:admin@cluster0.rgwkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const uri ="mongodb+srv://admin:admin@cluster0.rgwkm.mongodb.net?writeConcern=majority";



mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!');
});

//Schema


//Saving to MongoDB
// const data={title:'wenfienwf',body:'dfingidnfg'};

// const newBlogPost=new BlogPost(data);

// newBlogPost.save((err)=>{
//     if(err)
//     {console.log(err);}
//     else
//     {console.log('Data saved!');}
// });
//app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(cors())
//HTTP Request Logger

app.use(morgan('tiny'));
app.use('/api',routes)


//Route


app.listen(PORT,console.log(`Server is running at ${PORT}`));


