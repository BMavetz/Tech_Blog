const regForm = $(".register-form");

regForm.on('submit',(e)=>{
  e.preventDefault();
  console.log("working")
  signupFormHandler()
})

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response)
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  const signupFormHandler = async () => {
    const username = document.querySelector('#username-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm').value.trim();
    console.log(passwordConfirm)
    const fields = {username,password,passwordConfirm};
    const check = validateInput(fields);
    if (!check.valid){
      alert(check.message)
      return;
    }
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response.body)
        location.reload();
        // document.location.replace('/a');
      } else {
        console.log(response)
        alert('Failed to sign up.');
      }
    }
  };
  
  
  function validateInput(fields){
      
      const check = {valid:false};
  if (fields.username.length<6){
    check.message = "User name must be six characters"
    return check;
  }
 
  if (fields.password!==fields.passwordConfirm){
    check.message = "Passwords do not match"
    return check;
  }
  else {
      check.valid = true;
    return check;
}
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler); 