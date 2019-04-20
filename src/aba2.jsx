import React from 'react';

export class Aba2 extends React.Component {


    render() {

        const parametro = this.props.parametro;

        return (

            <div>

                segunda informaçao - {parametro}

            </div>

        );
    };
}