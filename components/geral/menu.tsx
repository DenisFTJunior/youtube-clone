import React from "react";
import Item from "./item"
import style from "../../styles/Menu.module.css"


export default class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <nav className = {style.menu}>
            <div className = {style.containerMenu}>
              <div className = {style.microContainer}>
                  <Item src= "/lateralMenu/inicio.png" text="Inicio" style = {style} hover ={true} visible/>
                  <Item src= "/lateralMenu/emalta.png" text="Em alta" style = {style} hover ={true} visible/>
                  <Item src= "/lateralMenu/incricoes.png" text="Inscrições" style = {style} hover ={true} visible/>
              </div>
              <div className = {style.microContainer}>
                  <Item src= "/lateralMenu/biblioteca.png" text="Biblioteca" style = {style} hover ={true} visible />
                  <Item src= "/lateralMenu/historico.png" text="Historico" style = {style} hover ={true} visible/>
                  <Item src= "/lateralMenu/seusvideos.png" text="Seus videos" style = {style} hover ={true} visible/>
                  <Item src= "/lateralMenu/assistirtarde.png" text="Assistir mais tarde" style = {style} hover ={true} visible/>
                  <Item src= "/lateralMenu/videosgostei.png" text="Videos marcados como gostei" style = {style} hover ={true} visible/>
              </div>
              <div className = {style.microContainer}>
                  <h3 className = {style.tittleIncricoes}>INSCRIÇÔES</h3>
                  <div><Item src= "/canais/rocketseat.png" text="Rocktseat" style = {style} hover ={false} visible/></div>
                  <div><Item src= "/canais/xteam.png" text="xteam" style = {style} hover ={false} visible/></div>
                  <div><Item src= "/canais/davi504.png" text="davi504" style = {style} hover ={false} visible/></div>
              </div>
            </div>
        </nav>
      );
    }
}

