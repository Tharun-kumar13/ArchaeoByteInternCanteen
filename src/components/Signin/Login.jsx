import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';
import { Link, Route, Routes } from 'react-router-dom'
import { auth, firestore } from './Firebase/Firebase';
import { collection, setDoc, getDocs, addDoc, getDoc, doc, DocumentReference, query, where } from 'firebase/firestore'
import { Database, get } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { StoreContext } from '../../context/Storecon';
import { useNavigate } from 'react-router-dom';
import { Firestore } from 'firebase/firestore';
const Login = ({ set }) => {
    const [currentState, setCurrentstate] = useState("Sign Up");

    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { userName, addId, addUser } = useContext(StoreContext)
    const { userDetails, addDetails } = useContext(StoreContext)






    const create = (e) => {
        e.preventDefault();

        const auth = getAuth()
        if (currentState === "Sign Up") {

            createUserWithEmailAndPassword(auth, email, password).then((e) => {
                const user = e.user
                // create1(user.uid, username, email, password)
                console.log(user.email)
                alert("SuccessFull user Created")
                setdoc(user.uid, username, email, password)


            }).catch((error) => {
                alert(error.message)
            })


        }
        else if (currentState === "Login") {
            signInWithEmailAndPassword(auth, email, password).then((e) => {
                const user = e.user
                console.log("Welcome ", user.email)
                console.log(user)
                user ? set(false) : set(true)
                //getDocumnet(user.uid)
                //fetchDocumentById(user.uid);
                add(user.email)

            }).catch((error) => {
                alert(error)
            })




        }
    }

    async function setdoc(id, username, email, password) {

        const frankDocRef = doc(firestore, "Data", email);

        await setDoc(frankDocRef, {
            Name: username,
            email: email,
            password: password,
            id: id

        });
    }




    async function add(id) {
        const querySnapshot = await getDocs(collection(firestore, "Data"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if (doc.data().email === id) {
                console.log(doc.data());
                addUser(doc.data().Name)
                addId(doc.data().id)
                addDetails(doc.data())


            }
        });
    }





    /* async function getDocumnet(id) {
         const q = query(collection(firestore, "cities"), where("id", "==", id));
         const querySnapshot = await getDocs(q);
         if (querySnapshot) {
             querySnapshot.forEach((doc) => {
                 // doc.data() is never undefined for query doc snapshots
                 console.log(doc.id, " => ", doc.data());
             });
         }
         else {
             console.log("eoo")
         }
 
     }*/

    /* async function getDocumnet(id) {
         const user = auth.currentUser;
         const docSnap = await getDoc(doc(firestore, "Data", id));
         if (docSnap.exists()) {
             console.log(docSnap)
         }
         else {
             console.log("Error")
         }
 
     }
 */


    /*  const fetchDocumentById = async () => {
          try {
              const docRef = doc(firestore, "Data");
              const doc = await getDoc(docRef)
  
              if (doc.exists) {
                  console.log("Document data:", doc.data());
                  return doc.data();
              } else {
                  console.log("No such document!");
                  return null;
              }
          } catch (error) {
              console.error("Error getting document:", error);
          }
      };
        fetchDocumentById()
 
    // Usage
*/





    function create1(uid, username, email, password) {
        const data = collection(firestore, "Data")

        var userDetails = {
            id: uid,
            Name: username,
            email: email,
            password: password
        }
        try {
            const decref = addDoc(data, userDetails);
            console.log(decref)
            alert("Sucessly user data Saved")
        }
        catch (error) {
            alert(error)
        }








    }






    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={create}>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => set(false)} src={assets.cross_icon} />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Your Name ' value={username} onChange={(e) => setusername(e.target.value)} required />}

                    <input type='email' placeholder='Your emali' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type='password' placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>I agree to the terms of use & privacy policy.</p>

                </div>
                {currentState === 'Login' ? <p>Create  a New Account? <span onClick={() => setCurrentstate("Sign Up")}>Click Here</span></p>
                    : <p>Already have an ACcount ? <span onClick={() => { setCurrentstate("Login") }}>Click Here</span></p>
                }


            </form>
        </div>
    )
}

export default Login
