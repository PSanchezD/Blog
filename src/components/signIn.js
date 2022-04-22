
import { signInWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase'




function SignIn(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  
 

        const navigate = useNavigate();
   

    // signing in user --------------
    const handleSignIn=(e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((user)=>{
           if(user){
               console.log(user)
               alert("thank you for signing in")
               navigate("/user")
            }
        })
    .catch(() => {
      alert("Please ensure your credentials are correct")
        });
    }
    ;

    // if user is logged in -----------
  

    return(
        <>
            
            <div className="signin">
                <form onSubmit={handleSignIn}>
                    <input type="email" name="email" placeholder="Email" required onChange={(e)=>{
                       
                        setEmail(e.target.value)
                    }}/>
                    <input type="password" name="password" placeholder="Password" required onChange={(e)=>{
                        
                        setPassword(e.target.value)
                    }}/>
                    <button>sign in</button>
                </form>
                <div className="redirect">
                    <h1>Don't have an account yet? Dont worry.</h1>
                    <a href="signup"><button>click here</button></a>
                </div>
            </div>
        </>
    )
}
export default SignIn;