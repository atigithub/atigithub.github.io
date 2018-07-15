function setTabs () {

	document.getElementById("Tab1").style.display = "block";
	document.getElementById("firstItem").className += " active b--blue-ati b br bw2";

}

function scrollToX (param) {

    document.getElementById(param).scrollIntoView({
            behavior: 'smooth'
        });
}

function openTabs(evt, tabName) {
    // Declare all variables
    console.log("ceva");
    var i, tabcontent, tablinks;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active b--blue-ati b br bw2", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active b--blue-ati b br bw2";
}
