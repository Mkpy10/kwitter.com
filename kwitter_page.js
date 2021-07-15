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
    firebase.initializeApp(firebaseConfig);

    New_Username = localStorage.getItem("Username");
New_RoomName = localStorage.getItem("Room_Name");








function Send(){
      Message = document.getElementById("msg").value;
      firebase.database().ref(New_RoomName).push({
            Message : Message, Username : New_Username, LikeButton : 0
      });

      document.getElementById("msg").value = "";
}

function LogOut(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Room_Name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+New_RoomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
LikeButton = message_data['LikeButton'];
Username = message_data['Username'];
Message = message_data['Message'];

Username_Verify = "<b><h3>"+Username+"<img class='user_tick' src='tick.png'></h3></b>";
User_Message = "<h3 class='message_h4'>"+Message+"</h3>";
Like_Message = "<button class='btn btn-warning' id="+firebase_message_id+" value="+LikeButton+" onclick='LikeMessage(this.id)'>";
ConcatinateLikeButton = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+LikeButton+"</span></button><hr>";

Full_Message = Username_Verify + User_Message + Like_Message + ConcatinateLikeButton;

document.getElementById("output").innerHTML += Full_Message;

//End code
   } });  }); }
getData();

function LikeMessage(message_id){
      console.log("Message Info: " +message_id);
      Message_Info = message_id;
 
     Likes =  document.getElementById(Message_Info).value;
     UpdateLikes = Number(Likes)+1;
     console.log("Number Of Likes: " +UpdateLikes);
     firebase.database().ref(New_RoomName).child(message_id).update({
           LikeButton : UpdateLikes
     });
}

