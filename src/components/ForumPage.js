import React, {useEffect, useState} from 'react'
import Header from './Header'
import {useCookies} from 'react-cookie'
import SignInSignUpComponent from './SignInSignUpComponent'
import {connect} from 'react-redux'
import {newPost,fetchPosts} from '../redux/index'
import loadingAnimation from '../images/loadingAnimation.json'
import Lottie from 'react-lottie'
import errorAnimation from '../images/errorAnimation.json'
import ForumPosts from './ForumPosts'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'



//import './styles/Forum.css'


function ForumPage({sendNewPost,insertionIds,posts,getPosts}) {
    const {loginWithPopup,loginWithRedirect,logout,user, isAuthenticated, isLoading} = useAuth0()
    const style_survey_text={ color:"#23374D", fontFamily:"Krona One, sans-serif", fontSize:"14px"}
    const [modalOpen, setmodalOpen] = useState(false)
    const [newPostContent,setNewPostContent]=useState("")
    const [cookies,setCookies,removeCookies]=useCookies(["user"])
    const [loggedIn,setLoggedIn]=useState(false)
    const [loading,setLoading]=useState(true)
    const [validateError,setValidateError]=useState('')

    // const promiseOfValidate=axios.get('/api/validate-user',{params:{token:cookies.tokenCovidity,username:cookies.usernameCovidity,email:cookies.emailCovidity}}).then((resp)=>{
    //     if(resp.data.error){console.log("validation error",resp.data.error)
    //         return {loading:false,userSignedIn:false,error:resp.data.error}
    //     }
    //     else{console.log("SUCCESS VALIDATION")
    //         return {loading:false,userSignedIn:true,error:''}
    //     }
        
    // }).catch((err)=>{return {loading:false,userSignedIn:false, error: err.message}})

    // window.onload=async()=>{
    //     let result=await promiseOfValidate
    //     setLoading(result.loading)
    //     setLoggedIn(result.userSignedIn)
    // }


    const [newPostTitle,setNewPostTitle]=useState("")
    const animOptions={
        loop: true,
        autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    const errAnimOptions={
        loop: true,
        autoplay: true,
      animationData: errorAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    useEffect(()=>{
        getPosts()
    },[])

    const refreshPage=()=>{
        window.location.reload(false)
    }
const submitPost=()=>{
    const postData={
        title: newPostTitle,
        body:newPostContent,
        userCreated: cookies.usernameCovidity,
        likes:[],
        comments:[]
    }
    sendNewPost(postData)
}


    return (
        <>
        {isAuthenticated?(
        
    
        <div> 
        <Header/>
          
        { <div className="forum__body" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center",flexWrap:"wrap",width:"100%"}}>
        
            {/* <div className="forum__body1" style={{boxShadow:"inset 5px 5px 5px rgba(0,0,0,0.2),inset -5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.3),-5px -5px 15px rgba(255,255,255,0.1)",flexDirection:"column",top:"0",borderRadius:"10px",display:"flex",  alignItems:"center" ,flexWrap:"wrap",flex:"0.8",margin:"20px",minWidth:"400px",minHeight:"80vh",overflowY:"scroll",overflowX:"hidden"}} >
            <div><span style={{ color:"#23374D", fontFamily:"Krona One, sans-serif", fontSize:"2rem",marginTop:"10px"}}>SHARE YOUR THOUGHTS</span><img src="refresh-icon.png" /></div>
               {posts.loading?(<Lottie 
                            options={animOptions}
                            height={400}
                            width={400}
                        />):(posts.error?(<><Lottie options={errAnimOptions} height={400} width={400}/></>):(<></>))}
           { posts && posts.posts && posts.posts.map((elem)=><div className="card" style={{width:"95%", margin:"10px"}}>
                 <div className="box">
                 <div className="content" style={style_survey_text}>
                <div className="title" style={{}}>
                    {elem.title}
                </div>
                <div className="post_body"style={{fontSize:"1.1rem", color:"85C3FF"}}>
                    {elem.body} 
                </div>
                <button onClick={()=> {setmodalOpen(true)}} style={{width:"150px",height:"30px"}}> <p>Learn More</p></button>


                </div>

                 </div>
            </div>)}

            {console.log(posts.posts)}


               </div> */}

               <ForumPosts/>
             

            <div className="forum__body2" style={{boxShadow:"inset 5px 5px 5px rgba(0,0,0,0.2),inset -5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.3),-5px -5px 15px rgba(255,255,255,0.1)",minHeight:"500px",minWidth:"400px",display:"flex", flexDirection:"column",flex:"0.2",flexWrap:"wrap",borderRadius:"10px",alignItems:"center",justifyContent:"center",marginRight:"20px"}}>
            <span style={style_survey_text}>Create post:</span>
                 <input placeholder="Post title" value={newPostTitle} onChange={(e)=>{setNewPostTitle(e.target.value)}} style={{margin:"10px"}}/>
                 <textarea placeholder="Post Content" value={newPostContent} onChange={(e)=>{setNewPostContent(e.target.value)}} style={{margin:"10px"}}/>
                <button onClick={()=>{submitPost();}} style={{margin:"10px"}}>SUBMIT</button>
                {/* {insertionIds.insertionIds && !insertionIds.error ?(<><h3>POST SUBMITTED</h3></>):(<>{insertionIds.error?(<h3>{insertionIds.error}</h3>):(<></>)}</>)} */}
                {insertionIds.loading && !insertionIds.insertionIds ? (<h3>LOADING...</h3>):(<>{!insertionIds.error?(<></>):(<div style={{display:"flex",width:"150px",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginLeft:"15%",marginBottom:"-15px"}}><p style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>{insertionIds.error}</p></div>)}</>) }
            </div>
            
            
            </div>

            

            
              }

        </div>):(<>{isLoading?(<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}><div style={{ display:"flex",flexDirection:"column", alignItems:"center", paddingTop:"18%"}}><img src="load-med.svg"/></div></div>):(<>{loginWithRedirect()}</>)}</>) }
        
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        insertionIds: state.newPostInsertionIds,
        posts: state.fetchedPosts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendNewPost: (post)=>dispatch(newPost(post)),
        getPosts: ()=>dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumPage)
