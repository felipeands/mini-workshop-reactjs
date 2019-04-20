import React from 'react';

export class Aba1 extends React.Component {


    render() {

        const parametro = this.props.parametro;

        return (

            <div>

                primera informaçao - {parametro}

            </div>

        );
    };
}