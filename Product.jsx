import Price from "./Price";
import "./Product.css";

function Product({title,idx, style}){
    let OldPrice=["12,495","11,900","99,000","70,000"];
    let NewPrice=["8,999","9,199","70,000","50,000"];
    let Description=[["8,000 UPI","5 Pogrammable buttons"],["Intuitive surface","Designed iPaid Pro"],["Designed iPaid Pro","Intuitive surface"],["Wireless","Optical Orientation"]];
    return(
        <div className="Product">
            <h5>{title}</h5>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]}/>
        </div>
    )
}
export default Product;