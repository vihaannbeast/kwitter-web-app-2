var firebaseConfig = {
      apiKey: "AIzaSyDdQwrg4rFMf7MqYRLfFcfwFSd_q7dHuYk",
      authDomain: "kwitter-c1f3c.firebaseapp.com",
      databaseURL: "https://kwitter-c1f3c-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1f3c",
      storageBucket: "kwitter-c1f3c.appspot.com",
      messagingSenderId: "38962300708",
      appId: "1:38962300708:web:0f7606d020485cc2c115b1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


