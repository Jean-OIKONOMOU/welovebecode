var image = document.getElementById ('mood-image');
var tri = 'b.jpg';
var happy = 'a.jpg';
const text = document.getElementById ('mood-word');

image.onclick = () => {
if (image.src === happy) {
       image.src = tri;
       text.innerHTML = 'sad';
   } else {
       image.src = happy;
       text.innerHTML = 'happy';
       }
    }
