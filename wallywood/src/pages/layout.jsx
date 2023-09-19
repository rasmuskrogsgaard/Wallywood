import style from "./layout.module.scss"
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
return (
<>
<nav className={style.heronav}>
    <h1>Wallywood</h1>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/plakater">Plakater</Link>
        </li>
        <li>
            <Link to="/about">Om os</Link>
        </li>
        <li>
            <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>   
    </ul>
</nav>
<Outlet/>
<footer>
<div> 
<p className={style.pHeader}>Wallywood</p>
<p>Øster Uttrupvej 1</p>
<p> 9000 Aalborg</p>
</div>
<div> 
<p>CVR: 123456789</p>
<p>MAIL: INFO@plakatshoppen.dk</p>
<p>MOBIL: +45 9812 3456</p>
</div>

<div>   
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1000 1000"><path fill="#888888" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1000 1000"><path fill="#888888" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1000 1000"><path fill="#888888" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1000 1000"><path fill="#888888" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"/></svg>
</div>



</footer>

</>
)
};

export default Layout;