var short_btn = document.getElementById("short-term-btn")
short_btn.addEventListener("click", function () {
    var shortgoal = document.getElementById("short-term").value;
    console.log(shortgoal);
    if(shortgoal){
        var shortlist = document.getElementById("ol-1");
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(shortgoal));
        shortlist.appendChild(entry);
        document.getElementById("short-term").value="";
    }
  
});

var long_btn = document.getElementById("long-term-btn")
long_btn.addEventListener("click", function () {
    var longgoal = document.getElementById("long-term").value;
    console.log(longgoal);
    if(longgoal){
        var longlist = document.getElementById("ol-2");
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(longgoal));
        longlist.appendChild(entry);
        document.getElementById("long-term").value="";
    }
  
});
