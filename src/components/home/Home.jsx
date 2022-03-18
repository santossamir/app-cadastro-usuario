import React from "react";
import Main from "../template/Main";

export default props => {
    return(
        <Main icon="home" title="Início" subtitle="Projeto Cadastro de Usuários desenvolvido em React.">
            <div className='display-4'>
                Bem vindo!
            </div>
            <hr />
            <p className="mb-0">
                Esse é um Sistema de Cadastro que foi desenvolvido na biblioteca Javascript React.
                Nele é possível adicionar usuário na lista, assim como editar as informações e excluí-las.
            </p>
            <p> A persistência de dados ficou responsável pelo <i>JSON Serve</i> simulando um <i>API REST</i>.
                Além disso nosso projeto possui responsividade e um layout organizado e gerenciado pelo Bootstrap.
            </p>
        </Main>
    )
}