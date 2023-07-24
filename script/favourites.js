function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      alert(xmlhttp.readyState);
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp);
      }
    };
    xmlhttp.open("GET", "script/favourites.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
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
