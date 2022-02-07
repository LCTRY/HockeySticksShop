

function MessageBanner () {
    var countDownDate = new Date("Feb 2, 2022 12:16").getTime();
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("timeLeft").innerHTML = "Ends In " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("message").innerHTML = "Free Shipping on orders over $100";
          document.getElementById("timeLeft").innerHTML = "";
        }
      }, 1000);
    return (
        <div className="message__banner">
            <h1 id="message">Free Shipping On All Orders</h1>
            <h1 id="timeLeft"></h1>
        </div>
    )
}

export default MessageBanner