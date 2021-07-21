import React, { Component } from 'react';
import "./Coin.css";


class Coin extends Component {
    static defaultProps = {
        side: "heads",
        imgSrc: "https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu"
    }

    render() {
        return (
            <div>
                <img className="Coin" src={this.props.imgSrc} alt={this.props.side}></img>
            </div>
        )
    }
}

export default Coin;