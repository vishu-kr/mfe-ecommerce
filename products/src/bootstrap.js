import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import ProductList from './ProductList.jsx'
import { store } from 'shared/store'

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <ProductList />
    </Provider>
)