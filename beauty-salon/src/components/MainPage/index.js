import style from "./style.module.scss";
import Header from "../Header/index.js";
import Banner from "../Banner/index.js";



export default () => {
    return (
        <div className={style.mainPage}>
            <Header />
            <Banner />
            
        </div>
    )
}