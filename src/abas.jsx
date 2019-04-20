import React from 'react';

import { Aba1 } from './aba1.jsx';
import { Aba2 } from './aba2.jsx';
import { Aba3 } from './aba3.jsx';

export class Abas extends React.Component {

    render() {

        const ativo = this.props.ativo;
        const contagem = this.props.contagem;

        return (

            <div className="abas">
                {ativo === 1 ? <Aba1 parametro={contagem} /> : null}
                {ativo === 2 ? <Aba2 parametro={contagem} /> : null}
                {ativo === 3 ? <Aba3 parametro={contagem} /> : null}
            </div>

        );

    }

}