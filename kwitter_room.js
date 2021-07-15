
var firebaseConfig = {
      apiKey: "AIzaSyBUh8JzmLwCE8BkDfhu9Tst7IWRaMqh0qg",
      authDomain: "kwitter-website-d4bbe.firebaseapp.com",
      databaseURL: "https://kwitter-website-d4bbe-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-d4bbe",
      storageBucket: "kwitter-website-d4bbe.appspot.com",
      messagingSenderId: "41027305400",
      appId: "1:41027305400:web:65ae6c6550a105d8dd594d",
      measurementId: "G-7G24EMGJET"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
  
    UserName = localStorage.getItem("Username");
    document.getElementById("UserName").innerHTML = "Welcome To Kwitter" + "&nbsp" + UserName;

    function FindRoom(){
          RoomName = document.getElementById("CreateRoom").value;
          firebase.database().ref("/").child(RoomName).update({
                Room_Name : "Room_Name" 
          });

          localStorage.setItem("Room_Name", RoomName);

          window.location = "kwitter_page.html";
          
          

          
    }

    

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("The Room Name Is:"+"&nbsp"+Room_names);
      Test = "<div class='text-danger' id='Room_names' onclick='Hello(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML = Test;
      //End code
      });});}

      
getData();

function Hello(e){
      localStorage.setItem("Test", e);
      console.log(e);
      window.location = "kwitter_room.html";
}

function LogOut(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Room_Name");
      window.location = "index.html";
}