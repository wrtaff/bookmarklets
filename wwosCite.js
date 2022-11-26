javascript: 

/* A simple tool for cites in mediawiki for wwos*/
/* adding another line of comment code */

/* alert('quote is marked'); */

var mouseSelectedText = document.getSelection() ;

/* alert(mouseSelectedText) ; */

var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');

var mm = String(today.getMonth() + 1).padStart(2, '0');

var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

/* alert(today); */

var pageURL = window.location.href;

var totalCiteString = "\"" + mouseSelectedText + "\"" + " \<ref\>" + pageURL + " retrieved " + today + "<\/ref\>";

/*%20alert(totalCiteString);%20*/

alert(totalCiteString);
