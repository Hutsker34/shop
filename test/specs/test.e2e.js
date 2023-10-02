const { expect, browser, $ } = require('@wdio/globals')
const   getTargetProduct = require('../utils.js')

describe('Should load products', () => {
    it('Should add products to cart', async () => {
        // Открываем сайт
        await browser.url(`http://localhost:2288/`)
        await browser.pause(3000)
        // Проверяем, что карточка продукта существует
        await expect($('.product')).toBeExisting()
        // Проверяем, что в корзине ноль товаров
        await expect((await $('.basket__link span'))).toHaveText('0')
        // Кликаем добавить в корзину
        const productName = 'jamper';

        // Получим все элементы с классом product__name
        const productNames = $$('.product__name');

        // Найдем нужный элемент по тексту
        
        const targetProduct = getTargetProduct(productNames, productName)


        // Если продукт найден, то найдем кнопку рядом с ним
        if (targetProduct) {
            const parent = targetProduct.parentElement().parentElement();

            // Найдем кнопку внутри родительского элемента
            const button = parent.$('.product__info--btn');
            button.click();
        } else {
            console.error(`Product with name ${productName} not found!`);
        }
        await browser.pause(1000)
        // И еще раз
        await $('.product .product__info--btn').click()
        await browser.pause(1000)
        // Проверяем, что в корзине два товара
        await expect((await $('.basket__link span'))).toHaveText('2')
    })
    
})