import {auth} from '../Firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(){

    const [email ,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((user)=>{
            console.log(user)
            alert("Thank you for signing up")
            navigate("/signin")
        })
        .catch(() => {
            alert("Please ensure your credentials are correct")
        });
    }

    return(
        <>
            <div className='signup'>
                <form onSubmit={handleSignUp}>
                    <input type="email" placeholder="email" required onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input type="password" placeholder="password" required onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <button>sign up</button>
                </form>
                <div className='redirect'>
                    <h1>Already have an account. Awsome!</h1>
                    <a href="signin"><button>click here</button></a>
                </div>
            </div>
        </>
    )
}
export default Signup