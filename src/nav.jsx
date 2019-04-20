import React from 'react';

export class Nav extends React.Component {

    setaAtivo(e,item) {
        e.preventDefault();
        this.props.setAtivo(item);
    }

    render() {
        return (
            <ul>
                <li onClick={(e) => this.setaAtivo(e,1)}>item 1</li>
                <li onClick={(e) => this.setaAtivo(e,2)}>item 2</li>
                <li onClick={(e) => this.setaAtivo(e,3)}>item 3</li>
            </ul>
        )
    }

}