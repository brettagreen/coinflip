import pennyFront from './pennyFront.jpg';
import pennyBack from './pennyBack.jpg';
import './Coin.css';

const Coin = (props) => {
    let img;
    if (!props.side) {
        img = null;
    } else if (props.side === 'heads') {
        img = <img data-testid="coin" className="coin" src={pennyFront} alt="heads" />;
    } else {
        img = <img data-testid="coin" className="coin" src={pennyBack} alt="tails" />;
    }
    return (
        <div>
            {img}
        </div>
    )
}

export default Coin;