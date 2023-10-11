import FloatingCard from "../../components/floatingCard/FloatingCard";
import './Portfolio.scss';

const Card = ({title, description, image}) => {
    return (
        <FloatingCard>
            <div className="card-title">{title}</div>
            <div className="card-body">{description}</div>
            <div className="image-container">
                <div className="image-inner-container">
                    <div className="ratio" style={{ paddingTop: '63.5%' }}>
                        <div className="ratio-inner">
                            <img src={image} alt='Card' />
                        </div>
                    </div>
                </div>
            </div>                
        </FloatingCard>
    )
}

export default Card;