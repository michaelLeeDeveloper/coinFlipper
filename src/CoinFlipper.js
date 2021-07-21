import React, { Component } from 'react';
import Coin from "./Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
    static defaultProps = {
        coin: [
            {
                side: "heads",
                imgSrc: "https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu"
            },
            {
                side: "tails",
                imgSrc: "https://researchmaniacs.com/Random/Images/Quarter-Tails.png"
            }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            totalFlips: 0,
            heads: 0,
            tails: 0,
            randNum: 0
        };
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        let random = Math.floor(Math.random() * 2);
        let headsCount = this.state.heads;
        let tailsCount = this.state.tails;
        let totalFlipCount = this.state.totalFlips;
        totalFlipCount++;
        if (random) {
            tailsCount++;
        } else {
            headsCount++;
        }
        this.setState({
            randNum: random,
            totalFlips: totalFlipCount,
            heads: headsCount,
            tails: tailsCount
        });
    }

    render() {
        return (
            <div>
                <Coin side={this.props.coin[this.state.randNum].side} imgSrc={this.props.coin[this.state.randNum].imgSrc}></Coin>
                <h1>You have flipped the coin {this.state.totalFlips} times. There have been {this.state.heads} heads & {this.state.tails} tails!</h1>
                <button onClick={this.flipCoin}>Flip Coin</button>
            </div>
        )

    }



}


export default CoinFlipper;