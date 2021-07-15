function LogIn(){
   Username =  document.getElementById("UserName").value;

   localStorage.setItem("Username", Username);

   window.location = "kwitter_room.html";
}