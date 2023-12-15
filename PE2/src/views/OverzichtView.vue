<script>
import { defineComponent } from "vue";
import ProductCardComponent from "@/componenten/ProductCardComponent.vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import products from "@/product.json";
import { useRouter } from "vue-router";

const router = useRouter();

export default defineComponent({
    components: { ProductCardComponent, FooterComponent },
    data() {
        return {
            products: products,
            weirdness: "",
            bruikbaar: "",
            itemsPerPage: 12,
            currentPage: 1,
            selectedProduct: ""
        }
    },
    computed: {
        filteredProducts() {
            const weirdnessFilter = !this.weirdness ? () => true : (product) => product.weirdness === this.weirdness;
            const bruikbaarFilter = !this.bruikbaar ? () => true : (product) => product.bruikbaar === this.bruikbaar;

            return this.products.filter((product) => weirdnessFilter(product) && bruikbaarFilter(product));
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredProducts.slice(start, start + this.itemsPerPage);
        }
    },
    methods: {
     //   showProductDetails(product) {
            // Set the selectedProduct to the clicked product
     //       this.selectedProduct = product;

            // Use the router to navigate to the product details page
      //      if (this.selectedProduct) {
     //           router.push(`/Shop/${this.selectedProduct.ID}`);
      //      }
      //  },
        changePage(page) {
            this.currentPage = page;
        }
    }
});
</script>

<template>
    <main id="overzicht">
        <section id="filters">
            <div>
                <p>weirdness</p>
                <div>
                    <button @click="weirdness = 'boring'">boring</button>
                    <button @click="weirdness = 'fun'">fun</button>
                    <button @click="weirdness = 'weird'">weird</button>
                    <button @click="weirdness = 'crazy af'">crazy af</button>
                    <button @click="weirdness = ''">All</button>
                </div>
            </div>
            <div>
                <p>bruikbaar</p>
                <div>
                    <button @click="bruikbaar = 'ja'">ja</button>
                    <button @click="bruikbaar = 'nee'">nee</button>
                    <button @click="bruikbaar = ''">Beide</button>
                </div>
            </div>
        </section>
        <section id="producten">
            <div class="product-row" v-for="product in paginatedProducts" :key="product.ID">
                <!-- Use router-link for navigation to product details -->
                <router-link :to="{ name: 'Product', params: { id: product.ID } }">
                    <div>
                        <ProductCardComponent :product="product" id="product" />
                    </div>
                </router-link>
            </div>
            <nav id="nummers">
                <div>
                    <a v-for="page in totalPages" :key="page">
                        <button @click="changePage(page)" :class="{ 'active': page === currentPage }">
                            {{ page }}
                        </button>
                    </a>
                </div>
            </nav>
        </section>
    </main>
    <FooterComponent></FooterComponent>
</template>


<style>

</style>