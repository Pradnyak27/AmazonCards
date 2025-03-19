import Product from "./Product.jsx";


function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "center",  
        alignItems: "center", 
        // textAlign:"center",
       marginLeft:"350px",
       marginBottom:"500px"
    }

    let productStyles = {
        width: "200px", 
        margin: "10px"  
    };
    return(
        <div style={styles}>
            <Product title="Logitech MX Master" idx="0" style={productStyles}/>
            <Product title="Apple Pencil (2nd Gen)" idx="1" style={productStyles}/>
            <Product title="Zebronics zab-transformer" idx="2" style={productStyles}/>
            <Product title="Petronics Toades" idx="3" style={productStyles}/>
        </div>
    );
}

export default ProductTab;