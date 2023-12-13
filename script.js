let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let gnbtn = document.getElementById("gnbtn");
let copyIcon = document.getElementById("copyIcon")
passIndicator = document.querySelector(".pass-indicator")

sliderValue.textContent = inputslider.value;
inputslider.addEventListener('input',() =>{
  sliderValue.textContent = inputslider.value;
});

gnbtn.addEventListener('click',() => {
  passbox.value = generatePassword();
});



let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";
let allspaces = " ";

function generatePassword(){
  let genpassword = " ";
  let allChars ="";
  allChars += lowercase.checked ? lowerChars: "";
  allChars += uppercase.checked ? upperChars: "";
  allChars += numbers.checked ? allnumbers:"";
  allChars += symbols.checked ? allsymbols:"";
  allChars += spaces.checked ? allsymbols:"";


  if(allChars == " " || allChars.length == 0){
    return genpassword;
  }

  let i = 1;
  while(i<=inputslider.value){
    genpassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
  }

  return genpassword;
}

copyIcon.addEventListener("click",() =>{
  if(passbox.value != "" || passbox.length >=1){
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText = "check"
    copyIcon.title = "Password copied";
    setTimeout(() => {
    copyIcon.innerHTML = "content_copy";
    copyIcon.title = "";
    },3000)
  }
})


const updatePassIndicator = () => {
  // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider
  //value is less than 16 then pass "medium" as id else pass "strong" as id
  passIndicator.id = inputslider.value <= 8 ? "weak" : inputslider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
  // passing slider value as counter text
  document.getElementById("sliderValue").innerText = inputslider.value;
  generatePassword();
  updatePassIndicator();
}

updateSlider();


inputslider.addEventListener("input",updateSlider)
inputslider.addEventListener("click",generatePassword)





document.addEventListener("DOMContentLoaded",function(){
  const homeButton = document.querySelector('nav ul li:nth-child(1) a');
  const aboutButton = document.querySelector('nav ul li:nth-child(2) a');

  // Highlight Home button as active (blue) by default on the Home page
  homeButton.classList.add('active');
  aboutButton.classList.remove('active');

  // Redirect to About page when About button is clicked
  aboutButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "about.html";
  });
});
