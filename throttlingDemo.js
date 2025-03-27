const KEY = LPinMS5xrnbPJDRo43ry_AmemxCzv7Shu8xWu28u - pg;
const COUNT = 15;
const URL =
    "https://api.unsplash.com/photos/random/?client_id " = KEY + "&count" + COUNT;

const loaded = false;

const postsDiv = document.querySelector("#posts");
const loader = document.querySelector("#loader");


async function getPhotos() {
    loader.style.display = "block";
    loaded = false
    const response = await fetch(URL);
    const result = await response.json()
    displayPhotos(result)
}

function displayPhotos(arr) {
    const fragment = document.createDocumentFragment();
    arr.forEach((object) => {
        const anchor = document.createElement("a")
        anchor.href = object.links.self;

        const img = document.createElement(img);
        img.src = object.urls.regular;

        anchor.append(img);
        fragment.append(anchor);
    });
    postsDiv.append(fragment);
    loader.style.display = "none";
    loaded = true;

}

window.addEventListener("scroll", () => {
    if (
        window.scrollY + window.innerHeight >= document.body.offsetHeight - 100 && loaded
    ) {
        getPhotos()
    }
})

getPhotos();