import React from 'react'
import './SignUpBoth1.css'

import firebase from 'firebase/compat/app';
import 'firebase/auth';
import firebaseConfig from '../firebase/config'

const fire = firebase.initializeApp(firebaseConfig);

var usernametxt=""
class SignUpBoth1 extends React.Component{

	constructor(props){
        super(props)
		this.login=this.login.bind(this);
		this.logind=this.logind.bind(this)
        this.handleChange=this.handleChange.bind(this)
		this.signup=this.signup.bind(this)
		this.signupd=this.signupd.bind(this)
        this.state={
            email:"",
			password:"",
			email2:"",
			password2:"",
			signUpError:"",
			signInError:""
			
        }
	}
	
	login(e){
		e.preventDefault();
		var arr=null
		const database=fire.database()
		const rootRef2=database.ref("doctors")
		rootRef2.orderByChild("email_save").equalTo(this.state.email2).on("value",snapshot=>{
			arr=snapshot.val()
		})

		if(arr!=null)
		{this.setState({signInError: "Already signed up as a doctor!"})
			return;}

		else
        {fire.auth().signInWithEmailAndPassword(this.state.email2,this.state.password2).then((u)=>{
            console.log(u)
        }).catch((err)=>{
			console.log(err)
			this.setState({signInError:(Object.values(err))[1]})
        })}
	}


	logind(e){
		e.preventDefault();
		var arr=null
		const database=fire.database()
		const rootRef2=database.ref("users")
		rootRef2.orderByChild("email_save").equalTo(this.state.email2).on("value",snapshot=>{
			arr=snapshot.val()
		})

		if(arr!=null)
		{this.setState({signInError: "Already signed up as a user!"})
			return;}

		else
        {fire.auth().signInWithEmailAndPassword(this.state.email2,this.state.password2).then((u)=>{
            console.log(u)
        }).catch((err)=>{
			console.log(err)
			this.setState({signInError:(Object.values(err))[1]})
        })}
	}


	
	signupd(e){
		e.preventDefault();
		sessionStorage.setItem("typeuser","doctor")
		fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
			const userObj={email: u.user.email}
			
			fire.firestore().collection('users').doc(this.state.email).then(()=>{
				
			})
			console.log(u)
		}).catch((err)=>{
			console.log(err)
			this.setState({signUpError:(Object.values(err))[1]})
		})
	}

signup(e){
	e.preventDefault();
	
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
	}).catch((err)=>{console.log((Object.values(err))[1])
		
        this.setState({signUpError: (Object.values(err))[1]})
    })
}




handleChange(e){
	this.setState({
		[e.target.name]:e.target.value,
		
	})
}

async signIn() {
    var googleProvider =new firebase.auth.GoogleAuthProvider();
    try {
      await fire.auth().signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

    

    componentDidMount(){
        const signUpButton = document.getElementById('signUpp');
    const signInButton = document.getElementById('signInn');
	const container = document.getElementById('container69');
	
	const signUpUserButton=document.getElementById('signupuserbtn')
	const signUpDocButton=document.getElementById('signupdocbtn')
	const usernameSignup=document.getElementById("nameee")
	const emailSignup=document.getElementById("emailll")
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
	});

	const database=fire.database();
	const rootRef= database.ref("users")
	const rootRef1=database.ref("doctors")
 
	signUpUserButton.addEventListener('click', (e) => {
		e.preventDefault();
		rootRef.child(usernameSignup.value).set({
			email_save: emailSignup.value,
			username: usernameSignup.value,
		});
		const userObj={email:emailSignup.value}
	fire.firestore().collection('users').doc(emailSignup.value).set(userObj)
		usernametxt=usernameSignup.value;
		
	})

	signUpDocButton.addEventListener('click', (e) => {
		e.preventDefault();
		rootRef1.child(usernameSignup.value).set({
			email_save: emailSignup.value,
			username: usernameSignup.value,
			
		});
    const userObj={email:emailSignup.value}
	fire.firestore().collection('users').doc(emailSignup.value).set(userObj)
		//sessionStorage.setItem("currentreguser",usernameSignup.value)
		
	})

	

	
    }
    
    
    
    render(){
		const {classes}=this.props
		return (<div className="body1">
        
<div className="container69" id="container69">
	<div className="form-container sign-up-container">
		<form action="#" className="formsss">
			<h1 className="h1sss" style={{fontFamily:"Rubik,sans-serif"}}>Create Account</h1>
			<div class="social-container">
				<a href="#" className="social69"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social69" ><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social69"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="spansss">or use your email for registration</span>
			<div className="inputsss">
				<input name="name" id="nameee" style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Rubik,sans-serif"}} type="text" placeholder="Name" /></div>
			<div className="inputsss">
            <input name="email" id="emailll"onChange={this.handleChange} style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Rubik,sans-serif"}} value={this.state.email} type="text" required/></div>
			
			
			<div className="inputsss">
            <input name="password" onChange={this.handleChange} style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Rubik,sans-serif"}} value={this.state.password} type="text" required/></div>
			
			<button onClick={this.signup} id="signupuserbtn" className="buttonsss" style={{fontFamily:"Rubik,sans-serif"}}>Sign Up for user</button>
			<button onClick={this.signupd} id="signupdocbtn"className="buttonsss" style={{fontFamily:"Rubik,sans-serif"}} >Sign Up for doctor</button>
			{
				this.state.signUpError?
				<p className="errmsg" style={{color:"red"}}>{this.state.signUpError}</p>:
				null
			}
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#" className="formsss">
			<h1 className="h1sss" style={{fontFamily:"Rubik,sans-serif"}}>Sign in</h1>
			<div class="social-container">
				<a href="#" className="social69"><i class="fab fa-facebook-f"></i></a>
				<a href="#" className="social69"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" className="social69"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span className="spansss" style={{fontFamily:"Rubik,sans-serif"}}>or use your account</span>
			<div className="inputsss">
            <input name="email2" onChange={this.handleChange} value={this.state.email2} type="text" required style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Rubik,sans-serif"}}/></div>
			<div className="inputsss">
            <input name="password2" onChange={this.handleChange} value={this.state.password2} type="text" required style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Rubik,sans-serif"}}/></div>
			<a href="#" className="forgotbtn1" style={{fontFamily:"Rubik,sans-serif"}}>Forgot your password?</a>
			<button onClick={this.login} className="buttonsss" id="signinuserbtn" style={{fontFamily:"Rubik,sans-serif"}}>Sign In for User</button>
			<button onClick={this.logind} className="buttonsss" id="signindocbtn" style={{fontFamily:"Rubik,sans-serif"}}>Sign In for doctor</button>
			{
				this.state.signInError?
				<p className="errmsg" style={{color:"red"}}>{this.state.signInError}</p>:
				null
			}
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="h1sss" style={{fontFamily:"Rubik,sans-serif"}}>Welcome Back!</h1>
				<p style={{fontFamily:"Rubik,sans-serif"}}>To keep connected with us please login with your personal info</p>
				<button className="ghosttt" id="signInn" style={{fontFamily:"Rubik,sans-serif",outline:"none"}}>SIGN IN</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="h1sss" style={{fontFamily:"Rubik,sans-serif"}}>Hello, Friend!</h1>
				<p className="psss" style={{fontFamily:"Rubik,sans-serif"}}>Enter your personal details and start journey with us</p>
				<button className="ghosttt" id="signUpp" style={{fontFamily:"Rubik,sans-serif",outline:"none"}}>SIGN UP</button>
			</div>
		</div>
	</div>
</div>
</div>


    )}

}
export {usernametxt}
export default SignUpBoth1

