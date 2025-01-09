import { Menu } from "./hamburguer-styles"

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
            <button id="btn-menu">ssssss</button>
                <Menu id="menu">
                    <ul>
                        <li><a href="#">Opção 1</a></li>
                        <li><a href="#">Opção 2</a></li>
                        <li><a href="#">Opção 3</a></li>
                    </ul>
                </Menu>
        </div>
    )
}

export default Hamburguer