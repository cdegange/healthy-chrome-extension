const contents = document.getElementById('#contents');
const contentsParent = contents.parent();

contents.remove();

contentsParent.prepend(
  "<img src ='https://static.fandomspot.com/images/11/10388/00-featured-shrek-smiling-in-mud-bath.jpg'/>"
);
const message = `It's not time for your break yet!`;
contentsParent.prepend(message);


// https://imgur.com/3keXNnU

{/* <div style="width:100%;height:0;padding-bottom:102%;position:relative;"><iframe src="https://giphy.com/embed/wOjQ7aKWQ4vBK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/fat-food-friends-wOjQ7aKWQ4vBK">via GIPHY</a></p> */}


const redirect = () => {
  window.location.href = "http://www.localhost:5500";
};


const onClick = (e) => {
  let clickedId = Number(e.id);

  switch (clickedId) {
    case(1):

      break;
    case(2):

      break;
    case(3):

      break;
    case(4):

      break;
  }
}


