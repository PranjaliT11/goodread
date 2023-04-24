import { useDispatch } from "react-redux";
import { addToCart } from "./redux/actions/cart-action";
 

const Books = (props) => {
    const dispatch = useDispatch();

    const { title, image } = props.data;

    const onClickHamdler = () => {
        dispatch(addToCart(props.data));
    };
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
            
            <div className="card-body">
                <h5 className="card title">{title}</h5>
                <button onClick={ onClickHamdler } className="btn btn-dark btn-block">
                    Add to Cart
                </button>
            </div>

        </div>
        </div>

    );
};

export default Books;