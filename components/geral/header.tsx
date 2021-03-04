import style from "../../styles/Header.module.css"
import Image from "next/image"
import Item from "./item"

export default function Header(){
    return(
        <div className = {style.containerHeader}>
           <div className = {style.menuLogo}>
                <button className={style.menuAction}>
                   <Image src = "/header/menu.png" alt = "Menu" width ="108px" height="108px"></Image>
                </button>
                <div className = {style.logoContainer}>
                    <Image src="/header/youtube-logo.png" alt ="logo" height = "108" width = "324"></Image>
                </div>
           </div>
            <form className={style.pesquisarContainer}>
                    <input type="text" placeholder = "Pesquisar" className ={style.pesquisar}/>
                    <input type="submit" value="" className = {style.submitPesquisar} />
            </form>
            <div className = {style.containerItems}>
                <Item src = "/header/camera.png" style={style} hover ={false}/>
                <Item src = "/header/quadrados.png" style={style} hover ={false}/>
                <Item src = "/header/sino.png" style={style} hover ={false}/>
                <Item src = "/header/perfil.png" style={style} hover ={false}/>
            </div>

        </div>
    )
}