 /* nav 漢堡 */

 function myNav() {
     var x = document.getElementById("myTopnav");
     if (x.className === "nav1") {
         x.className += " responsive";
     } else {
         x.className = "nav1";
     }
 }


 $(document).ready(function() {


     /* 水果種類 禮品 div 依序出現 */
     $('#footer').hide();
     $(".contentOne").hide();
     $(".contentTwo").hide();

     $(".heroP").delay(800).fadeIn(400).show(600);


     $(".first").delay(1000).show(800);

     $(".second").delay(1000).show(800);

     $('#footer').delay(2000).show(200);


     /* 收合種類div */


     /* 點menu也會收合種類div */
     $('.fruit').click(function() {
         $(".contentOne").slideToggle('slow');
         if ($('.clickMe1').text() === '–') {
             $('.clickMe1').text('+');
         } else {
             $('.clickMe1').text('–');
         }
     });

     $('.special').click(function() {
         $(".contentTwo").slideToggle('slow');
         if ($('.clickMe2').text() === '–') {
             $('.clickMe2').text('+');
         } else {
             $('.clickMe2').text('–');
         }
     });



     $(".first").click(function() {
         $(".contentOne").slideToggle('slow');
         if ($('.clickMe1').text() === '–') {
             $('.clickMe1').text('+');
         } else {
             $('.clickMe1').text('–');
         }
     });

     $(".second").click(function() {
         $(".contentTwo").slideToggle('slow');
         if ($('.clickMe2').text() === '–') {
             $('.clickMe2').text('+');
         } else {
             $('.clickMe2').text('–');
         }
     });





 });
 /* 圖片模態框 001 */
 var motai = document.getElementById('mo')
 var moimg = document.getElementById("moimg")
 var realimg = document.getElementById("real")
 var caption = document.getElementById("caption")

 realimg.onclick = function() {
     motai.style.display = "block"
     moimg.src = this.src
     caption.innerHTML = this.alt
 }

 var span = document.getElementById("close");

 span.onclick = function() {
     motai.style.display = "none";
 }