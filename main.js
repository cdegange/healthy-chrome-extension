const contents = document.getElementById('LocationFrameId');
// const contentsParent = contents.parentNode;

// contents.remove();

contents.innerHTML = `
  <img src ='https://imgur.com/3keXNnU.gif'/>
  <h1>We see you are about to make a bad choice!</h1> `


//order-button-group flex
const button = document.querySelector('order-button-group flex')
button.addEventListener('click', function(){
    alert('Hang on a sec....')
    redirect()
})




const redirect = () => {
  window.location.href = "http://www.localhost:5500";
};

setTimeout(() => {
  redirect();
}, 5000);


// const onClick = (e) => {
//   let clickedId = Number(e.id);

//   switch (clickedId) {
//     case(1):

//       break;
//     case(2):

//       break;
//     case(3):

//       break;
//     case(4):

//       break;
//   }
// }


