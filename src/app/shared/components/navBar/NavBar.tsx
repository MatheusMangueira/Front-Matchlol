import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
        <div>
            <Link to={"/pagina-inicial"} className='text-white hover:text-red-400 font-bold text-lg p-2 mx-2'> Inicio </Link>
            <Link to={"/sobre"} className='text-white hover:text-red-400 font-bold text-lg p-2 mx-2'> Sobre </Link>
            <Link to={"/login"} className='bg-stone-300 hover:bg-red-400 p-2 text-lg font-bold rounded-lg mx-2'> Login </Link>

        </div>

    );

}