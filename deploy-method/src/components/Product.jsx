import useCustomHook from "./useCustomHook";

const Product = () => {
    const product = useCustomHook("https://fakestoreapi.com/products");

    console.log(product);

    return (
        <div>
            <h3>The Section below is made with custom hook!</h3>
            <h4>Product:</h4>
            {product && product.map((x) => (
                <div>
                    <h4
                        key={x.id}>{x.title} <p>- {x.price}</p> <p>- {x.category}</p>
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default Product;
