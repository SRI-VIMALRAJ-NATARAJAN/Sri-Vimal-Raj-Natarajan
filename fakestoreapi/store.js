let URL = "https://fakestoreapi.com/products" 

async function fetchproducts(){

    let response = await fetch(URL)

    let data = await response.json()

    console.log(data)
}

fetchproducts()

