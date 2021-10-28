//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBvHxhflc4aor_qdSKPUvVu1htynL4a9DQ",
    authDomain: "kwitter-68e3e.firebaseapp.com",
    databaseURL: "https://kwitter-68e3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-68e3e",
    storageBucket: "kwitter-68e3e.appspot.com",
    messagingSenderId: "958304408759",
    appId: "1:958304408759:web:14e8a54967a137c9cd2932"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
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
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  
  