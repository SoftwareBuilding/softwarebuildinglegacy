// Logs then user in
$(".btn-login").click(function(e){

    var email = $('#email-login');    
    var password = $('#password-login'); 

    if(email.val() && password.val()){
       
        // firebase.auth().signInWithEmailAndPassword(email.val(), pass.val()).then(function(user){
        //     console.log('everything went fine');
        //     console.log('user object:' + user);
        //     //you can save the user data here.
        //     localStorage.setItem("Uid", user)
        //     M.toast({html: "Logado!"})
        // }).catch(function(error) {
        //     console.log('there was an error');
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(errorCode + ' - ' + errorMessage);
        // });

        firebase.auth().signInWithEmailAndPassword(email.val(), password.val())
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          console.log('everything went fine');
          localStorage.setItem("Uid", user)
                   M.toast({html: "Logado!"})
                   console.log(user)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          M.toast({html: errorMessage})
        }); 
    
    } else {
        console.log('fill in both fields');
    } 

   
})

//  firebase.auth().createUserWithEmailAndPassword(email.val(), pass.val()).then(function(user){})
// Advanced auth firebase codes and methods https://javascript.tutorialink.com/firebase-login-check-if-email-in-use/