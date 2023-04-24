//Sidenav

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("grid-containter").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("Classeviva").style.opacity = "0.2";
    document.getElementById("Moodle").style.opacity = "0.2";
    document.getElementById("Orario").style.opacity = "0.2";
    document.getElementById("Sito").style.opacity = "0.2";
    document.getElementById("main").style.opacity = "0.2";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("grid-containter").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,1)";
    document.getElementById("Classeviva").style.opacity = "1";
    document.getElementById("Moodle").style.opacity = "1";
    document.getElementById("Orario").style.opacity = "1";
    document.getElementById("Sito").style.opacity = "1";
    document.getElementById("main").style.opacity = "1";
}

//SUPER SCRIPTONE PER I LINK E I COOKIE DELLE CLASSI + differenziare pc e mobile in stile

window.onload = function() {
                

    /* Grid diversa su desktop/mobile */
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById("grid-containter").className = "grid-container-M";
        document.getElementById("main").style.transform = "scale(1.5)";

    }

    /* Cookie finder */
    var cookiecount = document.cookie.split("; ");
    var foundcookie = false;
    for (var i = 0; i < cookiecount.length; i++) {
        var cookie = cookiecount[i].split("=");
            if (cookie[0] == "preference") {
                foundcookie = cookie[1]
            }
    }

    if (foundcookie == false) {
        document.cookie = "preference=default; ";
        document.getElementById("Orario-link").href = "http://www.itismajo.it/orario/index.html";
        document.getElementById("Moodle-link").href = "http://moodle.itismajo.it/";     
    }
    else{
        var links = json_links[foundcookie].split("|");
        document.getElementById("Orario-link").href = links[0];
        document.getElementById("Moodle-link").href = links[1];   
    }
}

function setcookie() {
    var userpreference = document.getElementById("options").value;
    document.cookie = "preference=" + userpreference.toString() + "; expires= Mon, 3 Feb 2059 12:00:00 GMT";
    window.location.reload();
    if (userpreference == "default") {
        document.getElementById("Orario-link");
        href = "http://www.itismajo.it/orario/index.html";
        document.getElementById("Moodle-link");
        href = "http://moodle.itismajo.it/";
    }

}

function default_moodle() {
    window.open("http://moodle.itismajo.it/","_self");
}

function default_orario() {
window.open("http://www.itismajo.it/orario/index.html","_self");
}

function open_github() {
window.open("https://github.com/GirardHappy/MajoNavigator");
}

//MOBILE SLIDE copiato, non ne sarei capace

document.addEventListener('touchstart', handleTouchStart, false);        
        document.addEventListener('touchmove', handleTouchMove, false);

        var xDown = null;                                                        
        var yDown = null;

        function getTouches(evt) {
        return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }                                                     
                                                                                
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];                                      
            xDown = firstTouch.clientX;                                      
            yDown = firstTouch.clientY;                                      
        };                                                
                                                                                
        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
                                                                                
            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    closeNav() 
                } else {
                    openNav()
                }                       
            } else {
                if ( yDiff > 0 ) {
                    /* down swipe */ 
                } else { 
                    /* up swipe */
                }                                                                 
            }
            /* reset values */
            xDown = null;
            yDown = null;                                             
        };