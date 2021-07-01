var firebaseConfig ={
    apiKey: "AIzaSyBLwfSRD5fk4zBgxKG-9aBGyipo-lFRXDQ",
    authDomain: "kwitter-app-e6dae.firebaseapp.com",
    databaseURL: "https://kwitter-app-e6dae-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-e6dae",
    storageBucket: "kwitter-app-e6dae.appspot.com",
    messagingSenderId: "204859684549",
    appId: "1:204859684549:web:7c8073680329f7670f22ac"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
      {
            msg=document.getElementById("message").value;
            firebase.database().ref(room_name).push({
                  names:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("message").value="";
      }