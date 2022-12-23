import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8CN8So3jOgvps3expLKRHlBmszLdevE",
  authDomain: "tourist-guide-327c0.firebaseapp.com",
  projectId: "tourist-guide-327c0",
  storageBucket: "tourist-guide-327c0.appspot.com",
  messagingSenderId: "654312305350",
  appId: "1:654312305350:web:23568d204b52bc5e159dc7",
  measurementId: "G-TTZ9PCH49V"
};

//  const firebaseConfig = {
//    apiKey: "AIzaSyCpESFqaob2qu8vuISs34BP90BilBW-CIE",
//    authDomain: "formlogin-bdb34.firebaseapp.com",
//    projectId: "formlogin-bdb34",
//    storageBucket: "formlogin-bdb34.appspot.com",
//    messagingSenderId: "404189253566",
//    appId: "1:404189253566:web:667aa749f11e91a23973ef"
//  };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";

     let userEmail= document.getElementById("login-email").value;
     let userPassword =document.getElementById("login-password").value;
   
     let userData = {

      emailId : userEmail,
      password : userPassword,
     };

     let convertedUserData = JSON.stringify(userData);
     sessionStorage.setItem('user-login',convertedUserData);
     location.href="index.html";
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});
