import { auth } from '../Firebase/firebase';
import {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';
import {store} from '../Firebase/firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 










function User(){



    const [ status,SetStatus]=useState("You are not logged in ");
    const [storeinfo, setStoreInfo]=useState("");
    const [result,setResult]=useState([]);


    const handleLogOut=()=>{
        auth.signOut();
    }

    const navigate = useNavigate();

    const stateOfUser=()=>{
        onAuthStateChanged(auth, (user)=>{
           if(user){
               SetStatus("You successfuly logged in")
            }
            else{
                navigate("/")
            }
        })
    }

    useEffect(()=>{
        return stateOfUser()
    },[])

    


     const storeLogic = async () => {
        // adding Document to collection----------------------
        const docRef = await addDoc(collection(store, "users"), {
            info:storeinfo
        }).catch(err=>console.log(err));

        if(docRef){
            
        }
        getDocument();
    }
    
    const getDocument = async ()=>{

       let pollo = []
        const querySnapshot = await getDocs(collection(store, "users"));
        querySnapshot.forEach((doc) =>{
            pollo.push(doc.data())
            setResult(pollo)
        });
    }


    return (
        <>
            <div className='row-c'>
                <div className='row-1'>
                    <h1>{status}</h1>
                    <h1>welcome</h1>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
                <div className='row-2'>
                    <h1>content</h1>
                    <button onClick={storeLogic}>Post</button>
                    <textarea type="text" placeholder="type..." onChange={(e)=>{
                        setStoreInfo(e.target.value)
                    }}/>
                    <div>
                        {result.map((item, id)=>{
                            return(
                                <div className='post-c' key={id}>
                                    <p>{item.info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default User