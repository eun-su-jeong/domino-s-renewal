import {Link} from "react-router-dom";
import "./Header.scss";

function Header(){
    return(
        <header>
            <div className={'header-wrap'}>
                <h1>
                    <Link to={"/"}>
                        <img className={'logo'} src={`${process.env.PUBLIC_URL}/logo.png`} alt="Domino's Logo"/>
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li><Link className={'link'} to={"/brand"}>브랜드</Link></li>
                        <li><Link className={'link'} to={"/menu"}>메뉴</Link></li>
                        <li><Link className={'link'} to={"/store"}>매장</Link></li>
                        <li><Link className={'link'} to={"/news"}>뉴스</Link></li>
                        <li><Link className={'link'} to={"/startup"}>창업</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;