import initialStock from "./calculateInitialStock.js";
import soldProducts from "./calculateSoldProducts.js";

function productsLeftToSell(productArray) {
    const initialProducts = initialStock(productArray);
    const soldProduct = soldProducts(productArray);
    return initialProducts - soldProduct;
}

export default productsLeftToSell;