import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth =getAuth();
createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
userCredential.auth
})

function SignIn(){
    return(
        <>
            <div>

            </div>
        </>
    )
}
export default SignIn