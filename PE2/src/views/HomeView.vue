<script>
import {defineComponent} from "vue";
import HeaderComponent from "@/componenten/HeaderComponent.vue";
import Footer from "@/componenten/FooterComponent.vue";
import PopularProducts from "@/componenten/PopularProductsComponent.vue";

export default defineComponent({
    components: {PopularProducts, Footer, HeaderComponent}
})

</script>

<template>
    <HeaderComponent/>
    <header>
        <div>
            <h1>Random shop</h1>
            <h2>De shop waar rare objecten die je nooit zal gebruiken verkocht worden.<br>Maar die je stiekem wel wil
                hebben.
            </h2>
        </div>
    </header>
    <div id="home">
        <h3>Hot stuff</h3>
        <div>
            <PopularProducts></PopularProducts>
            <router-link to="/Shop">Meer producten >>></router-link>
        </div>
    </div>
    <Footer></Footer>
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

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.46);
    height: 850px;

    div {
        align-items: center;
        width: 100%;
        padding: 10rem 0;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;

            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                a {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    background-color: #fcfeef;
                    border-radius: 1rem;
                    margin: 0 1rem;
                    font-family: 'Red Hat Display', sans-serif;
                    color: #29503c;
                    text-decoration: none;
                    max-width: 20rem;
                    height: 40rem;

                    div {
                        width: 200px;
                        height: 200px;
                        margin: 20px 0;

                        img {
                            width: 200px;
                        }
                    }
                    p {
                        font-size: 20px;
                    }
                    h3 {
                        font-size: 35px;
                    }

                    &:hover {
                        color: #fcfeef;
                        background-color: #29503c;
                    }
                    &:hover h3 {
                        color: #fcfeef;
                    }
                }
            }

            a {
                font-family: 'Red Hat Display', sans-serif;
                font-size: 20px;
                color: #29503c;
                text-decoration: none;
                margin: 1rem;

                &:hover {
                    color: #e2cb03;
                }
            }
        }

        h1 {
            font-family: 'Major Mono Display', monospace;
            font-size: 50px;
            color: #fcfeef;
            text-align: center;
        }

        h2 {
            font-family: 'Red Hat Display', sans-serif;
            font-size: 40px;
            color: #e2cb03;
            text-align: center;
        }
    }
}

#home {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #fff;
    padding: 5rem 20rem;

    h3 {
        font-size: 35px;
        color: #29503c;
        font-family: 'Tilt Neon', sans-serif;
        padding: 1rem 0;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        a {
            color: #29503c;
            font-family: "Tilt Neon", sans-serif;
            font-size: 20px;
            text-decoration: none;
        }

         div {
             display: flex;
             flex-direction: row;
             justify-content: space-between;
             width: 100%;
             div {
                 width: 25%;
                 a {
                     display: flex;
                     flex-direction: column;
                     padding: 1rem;
                     background-color: #fcfeef;
                     border-radius: 1rem;
                     margin: 1rem;
                     font-family: $font2;
                     color: #29503c;
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

         }
    }
}
@media screen and (max-width: 1400px) {
    header {
        width: 100%;
    }

    #home {
        padding: 5rem 1rem;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;

        h3 {
            padding: 1rem 0;
            align-self: center;
            display: flex;
        }
        div {
            div {
                width: 100%;
                div {
                    width: 50%;

                }
            }
        }
    }
}

@media screen and (max-width: 700px) {
    header {
        display: none;
    }

    #home {
        h3 {
            font-size: 30px;
        }

        div {
            div {
                justify-content: center;
                div {
                    width: 60%;
                    a {
                        margin: 1rem;

                        div {
                            width: 250px;
                            height: 250px;

                            img {
                                width: 250px;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 500px) {
    #home {
        div {
            div {
                div {
                    width: 100%;
                }
            }
        }
    }
}
</style>