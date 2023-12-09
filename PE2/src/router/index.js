import { createRouter, createWebHistory } from 'vue-router'
import Overzicht from '@/views/OverzichtView.vue'
import Product from '@/views/ProductView.vue'
import Cart from '@/views/CartView.vue'
import CheckOut from '@/views/CheckOutView.vue'
import Gelukt from '@/views/GeluktView.vue'
import Login from '@/views/LoginView.vue'
import NotFound from "@/views/NotFoundView.vue"
import HomeView from "@/views/HomeView.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Overzicht
    },
    {
      path: '/Shop/:ID',
      name: 'Product',
      component: Product
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/CheckOut',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/Gelukt',
      name: 'Gelukt',
      component: Gelukt
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})

export default router
