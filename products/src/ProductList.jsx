import React from "react"
import Card from "./components/Card.jsx"
function ProductList() {
    const products = [
        {
            'img': "https://rukminim1.flixcart.com/image/2880/2880/xif0q/mobile/u/b/9/-original-imahgctgvmt6kjyn.jpeg?q=90",
            'productName': 'Motorola g60',
            'productPrice': 9000,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=90",
            'productName': 'Apple iphone 17 pro max',
            'productPrice': 149990,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/d/f/0/-original-imahfkf6uyxnvmcy.jpeg?q=90",
            'productName': 'REDMI 13C',
            'productPrice': 12190,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/h/e/m/-original-imahjzf6fnm5tyzm.jpeg?q=90",
            'productName': 'realme p4',
            'productPrice': 25991,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=90",
            'productName': 'Apple iphone 17',
            'productPrice': 14990,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=90",
            'productName': 'Apple iphone',
            'productPrice': 19990,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=90",
            'productName': 'RedMI 14 PRO',
            'productPrice': 25990,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=90",
            'productName': 'Lenevo',
            'productPrice': 14005,
        },
        {
            'img': "https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/0/p/g/-original-imahft6cfwg6yta2.jpeg?q=90",
            'productName': 'Apple 13 pro',
            'productPrice': 45895,
        },
    ]
    return (
        <>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {products.map(item =>
                    <Card key={item.productName} product={item} />
                )}
            </div>
        </>
    )
}
export default ProductList