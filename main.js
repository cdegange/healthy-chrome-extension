//window.addEventListener("DOMContentLoaded", (event) => {
//console.log("DOM fully loaded and parsed");
const contents = document.getElementById('LocationFrameId');

//});

contents.innerHTML = `
  <img src ='https://imgur.com/3keXNnU.gif'/>
  <h1>We see you are about to make a bad choice!</h1>

`;

const redirect = () => {
  window.location.href = 'http://www.localhost:3000';
};

setTimeout(() => {
  redirect();
}, 5000);
