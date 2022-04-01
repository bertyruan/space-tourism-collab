 /* Open when someone clicks on the span element */
 function openNav() {
     document.getElementById("myNav").style.height = "100%";
 }

 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeNav() {
     document.getElementById("myNav").style.height = "0%";
 }

 /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
         document.getElementById("myNav").style.top = "0";
     } else {
         document.getElementById("myNav").style.top = "-100px";
     }
     prevScrollpos = currentScrollPos;
 }