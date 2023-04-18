// Get the modal
var modal = document.getElementById("myModal");

var items = document.getElementsByClassName("card");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function handleClick(event) {
        console.log(items[i].children.innerHTML);
        modal.style.display = "block";
        
    });
}
// child elemt select panurathuku link
 //  https://stackoverflow.com/questions/63165092/how-to-get-only-p-tag-text-including-span-tag#:~:text=Use%20childNodes%20and%20textContent%20and,the%20text%20of%20p%20only.

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}