function changeTheme(event){
    var theme=event.value;

    var bg_color="#eaeaea"; //2 uses
    var text_color="black";
 
    // item
    var item_color="rgba(0, 0, 0, 0.15);" //2 uses
    var item_hover="#F7F7F7";
    var item_text="black"; 
    var item_shadow="0 10px 30px rgba(0, 0, 0, 0.15)";

    //con
    switch (theme) {
        case "light":
            text_color="black";
            bg_color="#eaeaea";
            item_color="rgba(0, 0, 0, 0.15)"; 
            item_hover="#F7F7F7";
            item_text="black";
            item_shadow="0 10px 30px rgba(0, 0, 0, 0.15)";
            break;
        case "dark":
            text_color="white";
            bg_color="#121212";
            item_color="#1f1f1f"; 
            item_hover="#292929";
            item_text="#e1e1e1";
            item_shadow="0 10px 30px rgba(100, 100, 100, 0.15)";
            break;
        case "beige":
            text_color="#292727";
            bg_color="#DDD0C8";
            item_color="#9e8d83"; 
            item_hover="#baa69b";
            item_text="#323232";
            item_shadow="0 10px 30px rgba(0, 0, 0, 0.15)";
            break;
        case "dark_blue":
            text_color="#035096";
            bg_color="#130939";
            item_color="#003366"; 
            item_hover="#335599";
            item_text="#d3e1fb";
            item_shadow="0 10px 30px rgba(100, 100, 100, 0.15)";
            break;
        case "green":
            text_color="#17a349";
            bg_color="#1c1c1c";
            item_color="rgba(0, 0, 0, 0.15)"; 
            item_hover="#163623";
            item_text="#1ed760";
            item_shadow="0 10px 30px rgba(48, 166, 89, 0.15)";
            break;
           
        default:
            break;
    }

    document.getElementsByTagName("html")[0].style.backgroundColor=bg_color;
    document.getElementsByTagName("body")[0].style.backgroundColor=bg_color;
    document.getElementsByTagName("body")[0].style.color=text_color;
    document.getElementsByTagName("hr")[0].style.borderColor=text_color;
    document.getElementsByTagName("hr")[1].style.borderColor=text_color;

    var items=document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.setProperty("--no-hover",item_color); 
        items[i].style.setProperty("--on-hover",item_hover);
        items[i].style.setProperty("--text-color",item_text);
        items[i].style.setProperty("--hover-shadow",item_shadow);
    }
    
}