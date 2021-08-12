
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  submmit();
});

const submmit = () => {
 
  let email = document.getElementById("email").value;
  let span = document.getElementById("message"); 

  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(!email){
  form.classList.remove("success");
  form.classList.add("error");
  span.innerHTML="Whoops! It looks like you forgot to add your email";
  span.style.color="red";
}

  else if(email.match(emailformat)){
form.classList.add("success");
form.classList.remove("error ");
span.innerHTML="correct email";
span.style.color="#00ff00";
  }else{
    form.classList.remove("success");
    form.classList.add("error");
    span.innerHTML="Please provide a valid email address";
    span.style.color="red";
  }
  
};


