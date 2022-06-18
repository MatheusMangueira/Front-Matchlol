import { Link } from "react-router-dom";
import Logo from "../../hooks/logoLOL.png"
import { Footer } from "../footer/Footer";



export const Inicio = () => {

    return (

        <div className='h-full w-full bg-neutral-900'>

            <div className="flex justify-center items-center flex-col top-0 w-full h-full">

                <div className="p-2 flex flex-col items-center text-center">
                    <img src={Logo} alt="logo" className="w-96 mb-20" />
                    <h1 className="text-5xl font-bold font-sans text-white p-2"> Encontre jogadores para <br /> <span className="text-red-500"> jogar com você! </span> </h1>

                </div>

                <div className="mt-16">
                    <Link to={"/cadastro"} className="p-5 bg-yellow-400 hover:bg-yellow-600 text-lg font-bold rounded-lg text-2xl"> Cadastre-se</Link>
                </div>

            </div>

            <Footer />
        </div>


    );


}