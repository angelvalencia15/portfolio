
function validate_username(username) {
  let errors = []; //array that will hold different types of errors
  let minError = "Username must be 5 characters or longer.";
  let maxError = "Username may not exceed 40 characters limit.";
  let whitespaceError = "Username cannot contain space.";
  let commaError = "Username cannot contain commas.";
  let semicolonError = "Username cannot contain semicolons.";
  let equalError = "Username cannot contain =.";
  let invalidCharError = "Username can only use characters from the following string:\n abcdefghijklmnopqrstuvwxyz\n ABCDEFGHIJKLMNOPQRSTUVWXYZ\n 0123456789\n !@#$%^*()-_+[]{}:'|`~<.>/?";
  let invalidusername = "Username cannot be 'Username' ";
 
 //Check conditions for errors
 if (username.length < 5){
    errors.push(minError);
  }
  if (username.length > 40){
    errors.push(maxError);
  }
   if (username.includes(" ")){
    errors.push(whitespaceError);
  }
  if (username.includes(",")){
    errors.push(commaError);
  }
  if (username.includes(";")){
    errors.push(semicolonError);
  }
  if(username.includes("=")){
   errors.push(equalError);
  }
  if (username.includes("&")){
  errors.push(invalidCharError);
  }
  if (username.includes("Username")){
  errors.push(invalidusername);
  }
  
  //Check to see if the username has any errors
  if (errors.length > 0){
    if (errors.length < 2 && errors.includes(invalidCharError)){ //Checks for only 1 error and that it is invalid characters
      alert(invalidCharError);
      return;
    }
    for (let i = 0; i < errors.length; ++i){
    alert(errors[i]);
    }
    return;
  }
  create_cookie(usernameBox.value);
  //a loading screen that says successfully saved username
  window.location.assign('browse.html');
  return;
}

const usernameBox = document.getElementById('usernameBox');
usernameBox.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    validate_username(usernameBox.value);
  }
});

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function(){
  const usernamebox = document.getElementById('usernameBox');
  validate_username(usernamebox.value);
  
});

function create_cookie(username){
  document.cookie = `username=${username}; expires=${hour_in_future()}`;
}

//meant to work with create_cookie to create a cookie for one hour
function hour_in_future() {
  let hour_in_future = new Date();
  hour_in_future.setHours(hour_in_future.getHours() + 1);
  return hour_in_future.toUTCString();
}

window.onload = function(){
  //fill in username box
  const storedUsername = get_username(); // get_username() should be defined in username.js
  if (storedUsername) {
    usernamebox.value = storedUsername;
}
};
