import React from "react";
import Main from "../template/Main";

export default props => {
    return(
        <Main icon="home" title="Início" subtitle="Ainda a definir.">
            <div className='display-4'>
                Bem vindo!
            </div>
            <hr />
            <p className="mb-0">
                Sistema cadastro em React
            </p>
        </Main>
    )
}