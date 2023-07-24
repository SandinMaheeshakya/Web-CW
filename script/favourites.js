function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      // alert(xmlhttp.readyState);
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        setHTML(xmlhttp);
      }
    };
    xmlhttp.open("GET", "script/favourites.xml", true);
    xmlhttp.send();
  }
  function setHTML(xml) {
    var xmlDoc = xml.responseXML;
    var favs="";
    var x = xmlDoc.getElementsByTagName("song");
    var y;

    for (i = 0; i <x.length; i++) { 
      y=x[i].childNodes;

      favs += "<div class='item'><div class='title'>" +
      y[1].innerHTML +
      "</div><img src='" + y[9].innerHTML +"' alt='"+y[1].innerHTML + "' height='160px' width='160px'>"+
      "<div class='desc'>" +
      "By "+y[3].innerHTML+
      "<br>Year :"+y[5].innerHTML+
      "<br>Genre :"+y[7].innerHTML+
      "</div></div>";

    }

    document.getElementsByClassName("div_container")[0].innerHTML = favs;
  }
