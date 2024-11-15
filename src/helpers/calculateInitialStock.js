function initialStock(productArray) {
    let total = 0;

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].originalStock;
    }

    return total;
}

export default initialStock;