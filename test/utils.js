module.exports = function getTargetProduct(productNames, productName) {
    const targetProduct = productNames.find( async function (el){
        const text = await el.getText()
       return text === productName
    });
    return targetProduct
}
