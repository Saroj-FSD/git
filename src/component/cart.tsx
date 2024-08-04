interface ICart{
    name:string;
    address:string;
}


const Cart = (props: ICart)=>{
    return(
        <div>
            <h1 className="bg-red-600 text-white">{props.name}</h1>
            <p>{props.address}</p>
        </div>
    );
}
export default Cart;