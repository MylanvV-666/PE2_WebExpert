<script>
export default {
    methods: {
        showmenu() {
            let menu = document.getElementById("menu");
            let uitklap = document.getElementById("uitklap");
            let cross = document.getElementById("cross");

            if (cross) {
                uitklap.style.display="flex";
                menu.style.display="none";
                cross.style.display="flex";
            }
        },
        hidemenu() {
            let menu = document.getElementById("menu");
            let uitklap = document.getElementById("uitklap");
            let cross = document.getElementById("cross");

            if (menu) {
                uitklap.style.display = "none";
                menu.style.display = "flex";
                cross.style.display = "none";
            }
        }
    },
    mounted() {
        this.hidemenu()
    }
}
</script>

<template>
    <nav id="nav1">
        <router-link to="/"><img src="../assets/logo.png" alt="logo"/></router-link>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/Shop">Shop</router-link>
            <router-link to="/Cart"><img id="carticon" src="../assets/shopping-cart-green.png" alt="cart"></router-link>
            <router-link to="/Login" id="login"><button>Login</button></router-link>
        </div>
    </nav>
    <nav id="nav2">
        <router-link to="/"><img src="../assets/logo.png" alt="logo"/></router-link>
        <div>
            <div @click="hidemenu" id="cross">
                <img id="groenkruis" src="@/assets/twitter.png" alt="close">
                <img id="geelkruis" src="@/assets/twitter%20(1).png" alt="close">
            </div>
            <div @click="showmenu" id="menu">
                <img id="groenmenu" src="@/assets/more.png" alt="menu">
                <img id="geelmenu" src="@/assets/more%20(1).png" alt="menu">
            </div>
            <div id="uitklap">
                <router-link to="/">Home</router-link>
                <router-link to="/Shop">Shop</router-link>
                <router-link to="/Cart">Cart</router-link>
                <router-link to="/Login" id="login">Login</router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
#nav1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background-color: #ffffff;
    img {
        width: 5rem;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        a {
            text-decoration: none;
            color: #29503c;
            font-size: 25px;
            font-family: "Red Hat Display", sans-serif;
            padding: 10px;
            margin: 0 1rem;

            #carticon {
                width: 2.5rem;
            }

            button {
                text-decoration: none;
                color: #29503c;
                font-size: 25px;
                font-family: 'Red Hat Display', sans-serif;
                padding: 10px;
                background-color: #fcfeef;
                border: none;
                border-radius: 5px;

                &:hover {
                    background-color: #29503c;
                    color: #fcfeef;
                    border: 1px solid #fcfeef;
                    cursor: pointer;
                }
            }


            &:hover {
                color: #e2cb03;
            }
        }

    }
}
#nav2 {
    display: none;
}

@media screen and (max-width: 1200px) {
    #nav1 {
        display: none;
    }
    #nav2 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 5rem;
        background-color: #ffffff;
        img {
            width: 5rem;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            #menu {
                display: flex;
                #groenmenu {
                    display: flex;
                    width: 3rem;
                }
                #geelmenu {
                    display: none;
                    width: 3rem;
                }
                &:hover {
                    #groenmenu {
                        display: none;
                    }
                    #geelmenu {
                        display: flex;
                    }
                }
            }

            #cross {
                display: flex;
                z-index: 1;
                #groenkruis {
                    display: flex;
                    width: 3rem;
                }
                #geelkruis {
                    display: none;
                    width: 3rem;
                }
                &:hover {
                    #groenkruis {
                        display: none;
                    }
                    #geelkruis {
                        display: flex;
                    }
                }
            }

            #uitklap {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 600px;
                width: 400px;
                background-color: white;
                position: fixed;
                top: 1rem;
                right: 0;

                a {
                    text-decoration: none;
                    color: #29503c;
                    font-size: 25px;
                    font-family: "Red Hat Display", sans-serif;
                    padding: 10px;
                    margin: 0 1rem;

                    &:hover {
                        color: #e2cb03;
                    }
                }
            }
        }
    }
}
</style>