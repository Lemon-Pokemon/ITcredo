import './Card.css';

function Card({ img, text }) {
    return (
        <div className="card">
            <div className="card_img">
                <img src={img} alt="img" />
            </div>
            <div className="card_info">
                {text}

            </div>
        </div>
    )
}

export default Card;