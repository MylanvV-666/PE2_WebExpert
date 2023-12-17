import { createStore } from "vuex";

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
    state: {
        cart: []
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
            return state.cart.reduce((a, b) => a + (b.prijs * b.quantity), 0)
        }
    },
    mutations: {
        addToCart (state, product) {
            let item = state.cart.find(i => i.ID === product.ID)
                if (item) {
                    if (item.quantity < product.stock) {
                        item.quantity++
                    }
                }
                else  {
                    state.cart.push({...product, quantity: 1})
                }

            updateLocalStorage(state.cart)
        },

        removeFromCart (state, product) {
            let item = state.cart.find(i => i.ID === product.ID)

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
                else {
                    state.cart = state.cart.filter(i => i.ID !== product.ID)
                }
            }

            updateLocalStorage(state.cart)
        },

        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart');
            if (cart) {
                state.cart = JSON.parse(cart);
            }
        }
    }
})