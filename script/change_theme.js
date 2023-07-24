function changeTheme(event){
    var theme=event.value;

    var bg_color="#eaeaea"; //2 uses
    var text_color="black";
 
    // item
    var item_color="rgba(0, 0, 0, 0.15);" //2 uses
    var item_hover="#F7F7F7";
    var item_text="black"; 

    //con
    var con_hr="black";

    switch (theme) {
        case "light":
            text_color="black";
            bg_color="#eaeaea";
            item_color="rgba(0, 0, 0, 0.15)"; 
            item_hover="#F7F7F7";
            item_text="black";
            con_hr="black";
            break;
        case "dark":
            text_color="white";
            bg_color="#121212";
            item_color="#1d1d1d"; 
            item_hover="#292929";
            item_text="#e1e1e1";
            con_hr="white";
            break;
        case "beige":
        
            break;
        case "dark_blue":
        
            break;
        case "green":
        
            break;
           
        default:
            break;
    }

    document.getElementsByTagName("html")[0].style.backgroundColor=bg_color;
    document.getElementsByTagName("body")[0].style.backgroundColor=bg_color;
    document.getElementsByTagName("body")[0].style.color=text_color;
    document.getElementsByTagName("hr")[0].style.borderColor=text_color;

    var items=document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.setProperty("--no-hover",item_color); 
        items[i].style.setProperty("--on-hover",item_hover);
        items[i].style.setProperty("--text-color",item_text);
    }
    
}