const añadirJuegoCarritoURL = "/anadirJuegoCarrito";

const addGameToCart = async (data) => {
    try {
        const jsonId = {"id":`${data}`}
        console.log(data)
        const response = await fetch(añadirJuegoCarritoURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonId)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Juego añadido al carrito');
    } catch (error) {
        console.error('Error al añadir juego al carrito:', error);
    }
 }
 
window.addGameToCart = addGameToCart;