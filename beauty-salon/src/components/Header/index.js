import style from "./style.module.scss";
import {Link} from "react-router-dom";
import logo from '../../images/header/logo.png';
import menu from '../../images/header/menu.png';
import inst from '../../images/header/inst.png';
import Navbar from "../Navbar/index.js";
import { useState } from 'react';

export default () =>{
     const [showNav, setShowNav] = useState(true);

    return(
        <header className={style.header}>   
            <div className={style.header__inst}>
               <a href="https://www.instagram.com/"><img src={inst} alt="inst"></img></a> 
            </div> 
            <ul className={style.header__list}>
                <li className={style.header__list_item}>
                    <Link to="/">Главная</Link>
                </li>
                <li className={style.header__list_item}>
                    <Link to="/masters">Мастера</Link>
                </li>
                <li className={style.header__list_item}>
                    <Link to="/cosmetic">Косметика</Link>
                </li>
            </ul>
            <div className={style.header__logo}>
                <Link to="/"><img src={logo} alt="logo"></img></Link>
            </div> 
            <ul className={style.header__list}>
                <li className={style.header__list_item}>
                    <Link to="stocks">Акции</Link>
                </li>
                <li className={style.header__list_item}>
                    <Link to="reviews">Отзывы</Link>
                </li>
                <li className={style.header__list_item}>
                    <Link to="contacts">Контакты</Link>
                </li>
            </ul>
            <div className={style.header__menu}>
                <img src={menu} alt="menu" onClick={() => setShowNav(true)}></img>
            </div>
            <Navbar className={style.header__navbar} showNav={showNav} setShowNav={setShowNav}/>
        </header>
    )
}
