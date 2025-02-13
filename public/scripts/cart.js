const añadirJuegoCarritoURL = "/anadirJuegoCarrito";
const eliminarJuegoCarritoURL = "/eliminarJuegoCarrito";
const countItemsInCarURL = "/countItemsInCart";
const cartLink = document.getElementById("cart-link");

document.addEventListener("DOMContentLoaded", async (e) => {
    updateCartCount();
})

const addGameToCart = async (data) => {
    try {
        const jsonId = {"id":`${data}`};

        const response = await fetch(añadirJuegoCarritoURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonId)
        });
        console.log('Juego añadido al carrito');

        updateCartCount();
    } catch (error) {
        console.error('Error al añadir juego al carrito:', error);
    }
}

const deleteGameFromCart = async(id) => {

    try {
    
        const response = await fetch(`${eliminarJuegoCarritoURL}/${id}`, {
            method: 'DELETE',
        });
        console.log(id);
        console.log('Juego eliminado del carrito');

        window.location.href = "/carrito"
    } catch (error) {
        console.error('Error al añadir juego al carrito:', error);
    }

}

const updateCartCount = async() => {
    try{
        const  response = await fetch(countItemsInCarURL);
        const resJson = await response.json();
        const {cartCount} = resJson;
        cartLink.textContent = `CART (${cartCount})`
        console.log(cartCount);
        
    }
    catch(error){
        console.log(error)
    }
}



window.addGameToCart = addGameToCart;

window.deleteGameFromCart = deleteGameFromCart;