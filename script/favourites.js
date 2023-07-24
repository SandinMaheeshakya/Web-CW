function loadXML() {
    var xml=new XMLHttpRequest();
    xml.open("GET", "favourites.xml", true);
    xml.send();
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Author</th></tr>";
    var x = xmlDoc.getElementsByTagName("song");
    for (i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("fav_table").innerHTML = table;
}
