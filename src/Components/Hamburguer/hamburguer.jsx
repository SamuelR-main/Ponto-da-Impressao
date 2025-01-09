import {Menus, HamburgerMenu} from "./hamburguer-styles"
import Hamburger from "hamburger-react"
import { useState } from "react"

export default function HamburguerComponent() {
    const [open, setOpen] = useState(false);
    return (
        <HamburgerMenu>
            <Hamburger size={20} toggled={open} toggle={setOpen} />
            {open && <Menus className="hamburger-div">
                <Hamburger size={20} toggled={open} toggle={setOpen} />
                    <ul>
                        <li>sla1</li>
                        <li>sla1</li>
                        <li>sla1</li>
                        <li>sla1</li>
                    </ul>
                </Menus>}
        </HamburgerMenu>

    )
}