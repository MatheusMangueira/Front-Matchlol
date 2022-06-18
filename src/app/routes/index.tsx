
import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Dashboard, Sobre, Login, Cadastro } from "../pages";


export const Routes = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route path="*" element= {<Navigate to="/pagina-inicial" /> } />
            <Route path="/pagina-inicial" element={<Dashboard/>} />
            <Route path="/sobre" element={<Sobre/>} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />


        </Switch>
        
        
        </BrowserRouter>


    )


}