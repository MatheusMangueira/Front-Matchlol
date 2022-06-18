import Logo from "../../hooks/logoLOL.png";
import { useState } from "react";

export const UserCadastro = () => {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(nome, email, password);

};

return (
    <div className="h-full bg-neutral-900 flex justify-center items-center flex-col">

        <img src={Logo} alt="logo" className="mb-10 w-96" />

        <form onSubmit={handleSubmit} className=" h-3/6 w-2/6 bg-neutral-800 rounded-lg flex justify-center flex-col items-center ">

            <h1 className="text-white text-xl"> Faça seu cadastro</h1>

            <div>

                <label className="block text-white"> Nome </label>
                <input id="nome" type="text" className="w-96 mb-5 p-2" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label className="block text-white"> Email </label>
                <input type="email" name="email" id="email" placeholder="Email" className="w-96 mb-5 p-2" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="block text-white"> Senha </label>
                <input type="password" name="senha" id="senha" className="w-96 mb-5 p-2" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />

            </div>

            <button type="submit" className="h-10 w-96 cursor-pointer bg-yellow-400 hover:bg-yellow-600 rounded-lg font-bold text-xl"> Cadastrar </button>
        </form>

    </div>


);
}