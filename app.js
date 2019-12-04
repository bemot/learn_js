<<<<<<< HEAD
// Themes javascript framework
//
//
//
// Reusable library/framework
// Easy to type 'T$()' structure
// Support jQuery

//var g = G$('bobik', 'bobka', 'nn');
//console.log(g);



var t = T$('Theme2','ua');
console.log(t.whatLanguage());
var lang = t.whatLanguage();
console.log(t.languages[lang]);
var theme = t.whatTheme();
console.log(theme);

=======
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("test.html", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
});
>>>>>>> dffef3e5edc5ad5fb4f843de3dc1ab158d426eee
