const firebaseConfig = {

  apiKey: "AIzaSyBKdgADuUoBwdCZ4Hhpipwb-kgOckG3rJw",

  authDomain: "portfolio2-4dc31.firebaseapp.com",

  databaseURL: "https://portfolio2-4dc31-default-rtdb.firebaseio.com",

  projectId: "portfolio2-4dc31",

  storageBucket: "portfolio2-4dc31.appspot.com",

  messagingSenderId: "365503946585",

  appId: "1:365503946585:web:d13e9fb54fb8e4bbdc3648"

};



//reference
var contactFormDB = firebase.database().ref('contact');

document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElemetVal("name");
  var emailid = getElemetVal("emailid");
  var msgContent = getElemetVal("msgContent");


}

const getElemetVal = (id) => {
  return document.getElementById(id).value;
}



