const { expect, browser, $ } = require('@wdio/globals')

describe('Should load products', () => {
    it('Should add products to cart', async () => {
        // Открываем сайт
        await browser.url(`http://localhost:3000/`)
        // Проверяем, что карточка продукта существует
        await expect($('.product')).toBeExisting()
        // Проверяем, что в корзине ноль товаров
        await expect((await $('.basket__link span'))).toHaveText('0')
        // Кликаем добавить в корзину
        await $('.product .product__info--btn').click()
        // И еще раз
        await $('.product .product__info--btn').click()
        // Проверяем, что в корзине два товара
        await expect((await $('.basket__link span'))).toHaveText('2')
    })
})

