import ButtonCart from './ButtonCart.jsx';


function Produdct(props) {
    return (
        <div className={ props.incame >= 1?'product': 'product'+" chengeColor"} >
            <div >
                <img className="ProductImg" src={props.src_Img} alt={props.name} />
                <div>
                    <p>
                        {props.name}
                    </p>
                    <p>
                        price: {props.price}
                    </p>
                </div>
                {
                  props.incame >= 1?<ButtonCart function = {props.function}/>:<p style={{color:"red"}}>sold out</p>
                }
            </div>
        </div>
    );
}
export default Produdct