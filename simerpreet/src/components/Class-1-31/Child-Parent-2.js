import React, { Component } from 'react';


const Humbug = {
    name: 'Humbug',
    level: 5,
    hp: 20,
    type: 'cpu',
    moves: {
        move_1: {
            name: "Tackle",
            power: 4
        },
        move_2: {
            name: "Growl",
            power: 0
        }
    }
}
const Geek = {
    name: 'Geek',
    level: 6,
    hp: 10,
    type: 'cpu',
    moves: {
        move_1: {
            name: "Scratch",
            power: 4
        },
        move_2: {
            name: "Leer",
            power: 0
        }
    }
}

export class GameMgr extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getAttack = (zombie, move) => {
        let newState = this.state;
        newState = {
            attack: {
                zombie: zombie,
                move: move.name
            }
        }
        this.setState(newState);
    }

    showMessage = () => {
        if (this.state.attack) {
            return (
                <div>
                    <p>{`${this.state.attack.zombie} uses ${this.state.attack.move}!`}</p>
                </div>
            )
        }
        return false;
    }

    render() {
        return (
            <div>
                <Zombie
                    {...Geek}
                    sendAttack={this.getAttack.bind(this)}>
                </Zombie>
                <Zombie {...Humbug} sendAttack={this.getAttack.bind(this)}></Zombie>
                {this.showMessage()}
            </div>
        )
    }
}

export default GameMgr;
class Zombie extends Component {

    attack = (move) => {
        this.props.sendAttack(this.props.name, move);
    }

    render() {
        return (
            <div>
                <h1>Player: {this.props.name}</h1>
                <ul style={{ listStyle: 'none' }}>
                    <li><span>Level: {this.props.level}</span></li>
                    <li><span>hp: {this.props.hp}/{this.props.hp}</span></li>
                </ul>

                <ul style={{ listStyle: 'none' }}>
                    <li><button onClick={() => this.attack(this.props.moves.move_1)}>{this.props.moves.move_1.name}</button></li>
                    <li><button onClick={() => this.attack(this.props.moves.move_2)}>{this.props.moves.move_2.name}</button></li>
                </ul>
            </div>
        )
    }
}
