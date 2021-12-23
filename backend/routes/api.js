const express=require('express')
const router = express.Router()
//const BlogPost = require('../models/BlogPost')
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://admin:admin@cluster0.rgwkm.mongodb.net?writeConcern=majority";
var nodemailer = require('nodemailer')
var otpGenerator=require('otp-generator')
const jwt=require('jsonwebtoken')
const path = require('path')
var createHash=require('hash-generator')
var today= new Date()

const client = new MongoClient(uri,{useUnifiedTopology:true,useNewUrlParser:true});



router.get('/',(req,res)=>{
    BlogPost.find({})
    .then((data)=>{
        console.log("DATA:",data);
        res.json(data)
    })
    .catch((err)=>{
        console.log("ERROR",err)
    })
});



router.post('/save',(req,res)=>{
    
    async function run(){
        try{
          await client.connect();
          const database = client.db("OxygenDonatorsDB");
          //const collection = database.collection(`d_${req.body.district_id}`);
          
          // create a document to be inserted
         // movies.find({district_id:"1"})
          const doc = req.body;
          const collection=database.collection(`d_${doc.district_id}`)
          const result = await collection.insertOne(doc);
           console.log(
              `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
            );
         return res.json({refNo: result.insertedId})
        } 
        catch(er){
            console.log("EERROORR:", er.message)
        }

        // finally {
        //   await client.close();
        // }
      }
      run()
})


router.post('/post_oxygen_needer',(req,res)=>{
    async function postOxyReceivers() {
        try {
          await client.connect();
          const database = client.db("OxygenNeedersDB");
          //const collection = database.collection(`d_${req.body.district_id}`);
          
          // create a document to be inserted
         // movies.find({district_id:"1"})
          const doc = req.body;
          const collection=database.collection(`d_${doc.district_id}`)
          const result = await collection.insertOne(doc);
           console.log(
              `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
            );
         return res.json({refNo: result.insertedId})
        } 
        catch(er){
            console.log("EERROORR:", er.message)
        }

        // finally {
        //   await client.close();
        // }
      }
      postOxyReceivers()
})




router.get('/fetch_oxygen_donors',(req,res)=>{
    async function fetchOxyDonors(){
        //console.log("HULLAAA", req.body.dist_id)
        try{
            await client.connect()
            const database=client.db("OxygenDonatorsDB");
            const doc=req.query
            //const collection=database.collection(`d_${req.body.dist_id}`)
            //const coll=`d_${doc.dist_id}`
            const collection=database.collection(`d_${doc.district_id}`)
            const query={}
            const options={}
            const oxyDonors=await collection.find().toArray()
            res.json({donorList: oxyDonors})
            // oxyDonors.toArray((err,result)=>{
            //     res.json({donorList: result})
            // })
            // console.log("List of oxy donors:",oxyDonors)
            

        }
        catch(err){
            res.json({error: err.message})
        }
    }
    fetchOxyDonors()
})

router.post('/send-otp',(req,res)=>{
    async function sendOtp(){
        try{

        }
        catch{

        }
    }
})

router.post('/sign-up-user',(req,res)=>{
    async function signUpUser(){
        try{
            await client.connect()
            const database=client.db("UsersDB")
            const userLoginInfo=req.body
            const collection=database.collection(`Users`)
            const alreadyExists=await collection.count({email : userLoginInfo.email},{limit:1})
            const alreadyExistsUsername=await collection.count({username : userLoginInfo.username},{limit:1})
            if(alreadyExists===1 || alreadyExistsUsername===1){
                return res.json({error: 'User with this Email/Username Already Exists!',refNo:null})
            }
            const hash=createHash(16)
            const finalUserInfo={...userLoginInfo,
            token:hash}
            const result = await collection.insertOne(finalUserInfo);
            return res.json({refNo: hash, error: null})
        }
        catch(err){
            return res.json({error: err.message, refNo: null})
        }
    }
    signUpUser()
})

router.post('/sign-in-user',(req,res)=>{
    async function signInUser(){
        try{
            await client.connect()
            const database=client.db("UsersDB")
            const userLoginInfo=req.body
            const collection=database.collection("Users")
            
            
            if(userLoginInfo.email)
            {const userExistsCountEmail=await collection.count({email: userLoginInfo.email,password: userLoginInfo.password},{limit:1})
            if(userExistsCountEmail===1){
                const hash=createHash(16)
                const myQuery={email: userLoginInfo.email}
                const newValues={$set:{token: hash}}
                const result=await collection.updateOne(myQuery,newValues)
                
                return res.json({token:hash,error:''})
            }
            else{
                return res.json({token:'',error:"User doesn't exist!"})
            }
            }
            else if(userLoginInfo.username)   
            {const userExistsCountUsername=await collection.count({username: userLoginInfo.username,password: userLoginInfo.password},{limit:1})
                if(userExistsCountUsername===1){
                    const hash=createHash(16)
                    const myQuery={username: userLoginInfo.username}
                    const newValues={$set:{token: hash}}
                    const result=await collection.updateOne(myQuery,newValues)
                    return res.json({token:hash,error:""})
                }
                else{
                    return res.json({token:'',error:"User doesn't exist!"})
                }
            
            }

        }
        catch(err){
            return res.json({error: err.message,token: ''})
        }
    }
    signInUser()
})


router.get('/validate-user',(req,res)=>{
    async function validateUser(){
        try{
            await client.connect()
            const database=client.db('UsersDB')
            const collection=database.collection('Users')
            var foundUser
            if(req.query.token && req.query.username)
            {foundUser= await collection.count({token:req.query.token,username:req.query.username},{limit:1})}
            else if(req.query.token && req.query.email){
                foundUser= await collection.count({token:req.query.token,email:req.query.email},{limit:1})
            }
            if(foundUser===1)
            {return res.json({userSignedIn:true,error:''})}
            else{
                return res.json({userSignedIn: false,error:'User not found!'})
            }
        }
        catch(err){
            return res.json({userSignedIn:false,error:err.message})
        }
    }
    validateUser()
})


router.post('/forum/new-post',(req,res)=>{
    async function newPost(){
        try{
            await client.connect()
            const postsDatabase=client.db("ForumPostsDB")
            const usersDatabase=client.db("UsersDB")
            const post=req.body
            //const lengthPostsDB = await postsDatabase.stats().collections
           // const lengthUsersDB = await usersDatabase.stats().collections
            const collectionPostsDB = postsDatabase.collection(`Posts`)
            const collectionUsersDB = usersDatabase.collection(`Users`)
            var myQuery={username: req.body.userCreated}
            var user=await collectionUsersDB.findOne({username: req.body.userCreated})
            

            const resultPostsDB = await collectionPostsDB.insertOne(post)
            if(user){var currUserPosts= user.postThreads
               
                if(currUserPosts){currUserPosts.push(post)
                const newValues={$set:{postThreads: currUserPosts}}
                const resultUsersDB=await collectionUsersDB.updateOne(myQuery,newValues)
                return res.json({error:'',insertionId:[resultPostsDB,resultUsersDB]})
            }
            
                var newPostThread=[]
                newPostThread.push(post)
                const newValues={$set:{postThreads: newPostThread}}
                const resultUsersDB=await collectionUsersDB.updateOne(myQuery,newValues)
                return res.json({error:'',insertionId:[resultPostsDB,resultUsersDB]})
            
            
            }

 
            
        }
        catch(err){
            
            return res.json({error: err.message,insertionId:[]})
        }
    }
    newPost()
})

router.get('/forum/get-posts',(req,res)=>{
    async function getPosts(){
        try{
            await client.connect()
            const db=client.db('ForumPostsDB')
            const collection=db.collection('Posts')
            const postsGot=await collection.find().toArray()
            return res.json({posts: postsGot,error:''})
        }
        catch(err){
            return res.json({error:err.message,posts:[]})
        }
    }
    getPosts()
})

router.post('/forum/like-post',(req,res)=>{
    async function likePost(){
        try{
            await client.connect()
            const db=client.db('ForumPostsDB')
            const collection=db.collection('Posts')
            var query={_id:req.body.id}
            var newVal={$push:{likes:{likedBy:req.body.likedBy,likedOn:req.body.likedOn}}}
            const result=await collection.updateOne(query,newVal)
            return res.json({insertedLikeId:result,error:""})
        }
        catch(err){
            return res.json({insertedLikeId:'',error:err.message})
        }
    }
    likePost()
})




module.exports=router
