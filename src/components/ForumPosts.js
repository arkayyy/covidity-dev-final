import React,{useEffect} from 'react'
import Lottie from 'react-lottie'
import {fetchPosts} from '../redux/index'
import {connect} from 'react-redux'
import loadingAnimation from '../images/loadingAnimation.json'
import errorAnimation from '../images/errorAnimation.json'

function ForumPosts({posts,getPosts}) {
    const style_survey_text={ color:"#23374D", fontFamily:"Krona One, sans-serif", fontSize:"14px"}
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


    return (
        <div className="forum__body1" style={{boxShadow:"inset 5px 5px 5px rgba(0,0,0,0.2),inset -5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.3),-5px -5px 15px rgba(255,255,255,0.1)",flexDirection:"column",top:"0",borderRadius:"10px",display:"flex",  alignItems:"center" ,flexWrap:"wrap",flex:"0.8",margin:"20px",minWidth:"400px",minHeight:"80vh",overflowY:"scroll",overflowX:"hidden"}} >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}><span style={{ color:"#23374D", fontFamily:"Krona One, sans-serif", fontSize:"2rem",marginTop:"10px"}}>SHARE YOUR THOUGHTS</span><a href=""><img onClick={()=>{window.location.replace('/forum')}} src="refresh-icon.png" style={{width:"50px"}}/></a></div>
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
            <button  style={{width:"100px",height:"20px"}}> <p style={{fontSize:"10px"}}>Read More</p></button>


            </div>

             </div>
        </div>)}

        


           </div>
    )
}

const mapStateToProps=(state)=>{
  return{
      posts: state.fetchedPosts
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      getPosts: ()=>dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumPosts)

