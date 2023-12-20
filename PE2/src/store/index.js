import { createStore } from "vuex";

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function updateLocalStorageStock(stock) {
    localStorage.setItem('stock', JSON.stringify(stock))
}

export default createStore({
    state: {
        cart: [],
        stock: {}
    },
    getters: {
        productQuantity: state => product => {
            const item = state.cart.find(i => i.ID === product.ID)

            if (item) return item.quantity
            else return null
        },
        cartItems: state => {
            return state.cart
        },
        cartTotal: state => {
            return state.cart.reduce((a, b) => a + ((b.prijs + b.BTW) * b.quantity), 0)
        },
        bestaand: state => {
            return state.gegevens
        }
    },
    mutations: {
        addToCart(state, product) {
            let item = state.cart.find(i => i.ID === product.ID)

            if (item) {
                if (item.quantity < product.stock) {
                    item.quantity++
                }
            } else {
                state.cart.push({ ...product, quantity: 1 })
            }

            updateLocalStorage(state.cart)
        },

        removeFromCart(state, product) {
            let item = state.cart.find(i => i.ID === product.ID)

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.ID !== product.ID)
                }
            }

            updateLocalStorage(state.cart)
        },

        removeallFromCart(state) {
            state.cart = [];
            updateLocalStorage(state.cart);
        },

        decreasestock(state, product) {
            // Adjust this logic based on your requirements
            const item = state.cart.find(i => i.ID === product.ID);

            if (item) {
                // Subtract the total quantity in the cart from the initial stock
                state.stock[product.ID] -= item.quantity;
            }

            updateLocalStorageStock(state.stock);
        },

        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart');
            if (cart) {
                state.cart = JSON.parse(cart);
            }
        },

        updateStock(state) {
            const stock = localStorage.getItem('stock');
            if (stock) {
                state.stock = JSON.parse(stock);
            }
        }
    }
})