//window.addEventListener("DOMContentLoaded", (event) => {
    //console.log("DOM fully loaded and parsed");
    const contents = document.getElementById('LocationFrameId');
    const orderFoodBtn = document.getElementsByClassName('btn-round btn-round--red');

//});
// const contentsParent = contents.parentNode;

// contents.remove();

contents.innerHTML = `
<style backgroundColor = 'lightblue'>
  <img src ='https://imgur.com/3keXNnU.gif'/>
  <h1>We see you are about to make a bad choice!</h1> </span>"
</style>
`


//{/* <script>document.getElementById('LocationFrameId').style.backgroundColor = 'lightblue'</script>` */}


// orderFoodBtn.addEventListener("click", (event) => {
// alert('hello')
// });

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


