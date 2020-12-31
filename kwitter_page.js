username = localStorage.getItem("user_name")
  var firebaseConfig = {
    apiKey: "AIzaSyB29BvWq8izAtb8Ie35Gey_jJdKRPa2ptQ",
    authDomain: "kwiiiiiiiiter.firebaseapp.com",
    databaseURL: "https://kwiiiiiiiiter-default-rtdb.firebaseio.com",
    projectId: "kwiiiiiiiiter",
    storageBucket: "kwiiiiiiiiter.appspot.com",
    messagingSenderId: "215602381314",
    appId: "1:215602381314:web:10292ffc5080566a4e9d1b"
  };
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })

}