import './App.css'
import {products} from "./data/productsList.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";
// import MyComponent from "./components/my-component/MyComponent.tsx";

function App() {


    return (
        <>
            {
                products.map((product, index) => <MyProduct key={index} product={product}/>
                )
            }
        </>
    );
}

export default App
