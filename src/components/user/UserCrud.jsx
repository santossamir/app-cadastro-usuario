import React, {Component} from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de unuários: Incluir, Listar, Alterar e Exluir!'
}

export default class UserCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário    
            </Main>
        )
    }
}