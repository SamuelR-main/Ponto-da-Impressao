import { Menu, Ham, Line } from "./hamburguer-styles"

var btnMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu");

btnMenu.addEventListener("click", function(){
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
function Hamburguer(){
    return(
        <div>

        </div>
    )
}

export default Hamburguer