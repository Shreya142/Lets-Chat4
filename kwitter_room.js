// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDK7hJNGvPiZ1q1xc5v9N7YOs2vPYEOA-k",
    authDomain: "project-kwitter-8a6c1.firebaseapp.com",
    databaseURL: "https://project-kwitter-8a6c1-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-8a6c1",
    storageBucket: "project-kwitter-8a6c1.appspot.com",
    messagingSenderId: "248639239744",
    appId: "1:248639239744:web:80a5bb7b9ee41194f951a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+username+"!";

      function addRoom()
      {
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);

            window.location="kwitter_page.html";
      }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       console.log("room_name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
       });});}
 getData();


 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="kwitter.html";
 }
 