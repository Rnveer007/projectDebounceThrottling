const KEY = LPinMS5xrnbPJDRo43ry_AmemxCzv7Shu8xWu28u - pg;
const COUNT = 15;
const URL =
    "https://api.unsplash.com/photos/random/?client_id " = KEY + "&count" + COUNT;

const postsDiv = document.querySelector("#posts");

async function getPhotos() {
    const response = await fetch(URL);
    const result = await response.json()
    displayPhotos(result)
}

function displayPhotos(data) {

}