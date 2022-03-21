        let mycanvas = document.getElementById("mycanvas")
            mycanvas.width = window.innerWidth;
            mycanvas.height = window.innerHeight;

        let  ctx = mycanvas.getContext("2d");


// removable square
mycanvas.addEventListener("mousedown", drawrect);

        function drawrect(e) {

            ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

              ctx.beginPath();
              ctx.rect(e.clientX-20, e.clientY-20, 40,40);
              ctx.fill();
              ctx.closePath();

          }
// fixed square
// mycanvas.addEventListener("mousedown", drawrect);

//           function drawrect(e) {

//               ctx.beginPath();
//               ctx.rect(e.clientX-20, e.clientY-20, 40,40);
//               ctx.fill();
//               ctx.closePath();
//           }
//drawing
        // mycanvas.addEventListener("mousemove", drawrect);
        // drawable = false;
        // mycanvas.addEventListener("mousedown", enabledrawing);
        // mycanvas.addEventListener("mouseup", disabledrawing);

        // function enabledrawing() {
        //     drawable = true;
        //   }
        //   function disabledrawing() {
        //     drawable = false;
        //   }
        //     function drawrect(e) {
        //     if (drawable) {
        //       ctx.beginPath();
        //       ctx.rect(e.clientX-20, e.clientY-20,30,30);
        //       ctx.fill();
        //       ctx.closePath();
        //     }
        //   }


