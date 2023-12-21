<script>
import { defineComponent } from "vue";
import ProductCardComponent from "@/componenten/ProductCardComponent.vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import products from "@/product.json";
import { useRouter } from "vue-router";
import HeaderComponent from "@/componenten/HeaderComponent.vue";

const router = useRouter();

export default defineComponent({
    components: {HeaderComponent, ProductCardComponent, FooterComponent },
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
    <HeaderComponent/>
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
                <div>
                    <ProductCardComponent :product="product" id="product" />
                </div>
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


<style lang="scss">
//kleuren
$color1: #e2cb03;
$color2: #29503c;
$color3: #fcfeef;
$background: #fff;
$doorzichtig: rgba(0, 0, 0, 0.46);

//lettergrotes
$sizeh1: 50px;
$sizeh2: 40px;
$sizeh3: 35px;
$sizeh4: 30px;
$sizeh5: 25px;
$sizep: 20px;

//fontfamilie
$font1: 'Major Mono Display', monospace;
$font2: 'Red Hat Display', sans-serif;
$font3: 'Tilt Neon', sans-serif;

#overzicht {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem 5rem;
    background-color: $background;

    #filters {
        display: flex;
        flex-direction: column;
        max-width: 25%;

        div {
            display: flex;
            flex-direction: column;

            p {
                color: $color2;
                font-family: $font3;
                font-size: $sizep;
            }

            div {
                display: flex;
                flex-direction: row;

                button {
                    border: none;
                    border-radius: 0.5rem;
                    background-color: $color3;
                    color: $color2;
                    font-family: $font2;
                    font-size: $sizep;
                    margin: 10px;
                    padding: 5px;
                    cursor: pointer;
                    width: 150px;

                    &:hover {
                        border: 1px solid $color3;
                        background-color: $color2;
                        color: $color3;
                    }
                }
            }
        }
    }

    #producten {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .product-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 25%;

            #product {
                display: flex;
                flex-direction: column;
                padding: 1rem;
                background-color: $color3;
                border-radius: 1rem;
                margin: 1rem;
                font-family: $font2;
                color: $color2;
                text-decoration: none;
                height: 40rem;
                width: 100%;

                div {
                    width: 200px;
                    height: 200px;
                    margin: 20px 0;

                    img {
                        max-width: 250px;
                        height: 200px;
                    }
                }
                p {
                    font-size: $sizep;
                }
                h3 {
                    font-size: $sizeh3;
                }

                &:hover {
                    color: $color3;
                    background-color: $color2;
                }
                &:hover h3 {
                    color: $color3;
                }
            }
        }

        #nummers {
            div {
                a {
                    background-color: $background;
                    font-family: $font1;
                    width: 20px;
                    .clearfix {
                        clear: both;
                    }

                    button {
                        border-radius: 5px;
                        font-size: 20px;
                        font-family: "Red Hat Display", sans-serif;
                        width: 20px;
                        height: 40px;
                        color: #29503c;
                        background-color: #ffffff;
                        border: 1px solid #29503c;

                        &:hover {
                            color: white;
                            background-color: #29503c;
                            border: none;
                        }
                    }

                    &:hover {
                        color: $color1;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1400px) {
    #overzicht {
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        width: 100%;
        overflow-x: hidden;

        #filters {
            width: 100%;
        }

        #producten {
            width: 100%;

            .product-row {
                width: 50%;

                #product {
                    width: 300px;
                }
            }

            div {
                a {
                    width: 100%;
                    margin: 1rem 0.5rem;
                    padding: 1rem 0.5rem;

                    h4 {
                        height: 120px;
                    }

                    p {
                        display: none;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 800px) {
    #overzicht {
        #producten {
            width: 100%;

            .product-row {
                width: 100%;
            }
        }
    }
}
</style>