import style from "./style.module.scss";
import exit from "../../images/navbar/exit.png"


export default () =>{
    
    return(
        <nav className={style.nav}>
            <div className={style.nav__exit}>
                <img src={exit} alt="exit"></img>
            </div>
            <div className={style.nav__block}>
                <p  className={style.nav__block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ipsum, adipiscing amet in egestas sem dui, arcu faucibus scelerisque. 
                Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh quis. 
                Tortor donec pellentesque leo ac placerat. Morbi.</p>
            </div>
            <div  className={style.nav__block}>
                <ul>
                    <li className={style.nav__block_heading}>
                        Контакты
                    </li>
                    <li  className={style.nav__block_text}>
                        +7 (812) 123-45-67
                    </li>
                    <li  className={style.nav__block_text}>
                        +7 (911) 123-45-67
                    </li>
                    <li  className={style.nav__block_text}>
                        Новоостровский проспект, дом 36 лит. С
                    </li>
                </ul>
            </div>
            <div  className={style.nav__block}>
                <ul>
                    <li  className={style.nav__block_heading}>
                        Режим работы
                    </li>
                    <li  className={style.nav__block_text}>
                        C 10:00 до 21:00 (Пн-Пт)
                    </li>
                    <li  className={style.nav__block_text}>
                        С 11:00 до 20:00 (Сб-Вс)
                    </li>
                </ul>
            </div>

        </nav>
    )
}