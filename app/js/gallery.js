/*
    Create an html gallery where when you click the image,
    it rotates to the next image!
*/
/* Constants */
// Relative to location of bio.html
const ASSETS_URL = "../../assets/bio/";
const IMAGE_NAMES = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16"
];
let current = 0;

/* Function Definitions */
function updateImage() {
    let imgURL = ASSETS_URL.concat(IMAGE_NAMES[current], ".webp");
    document.getElementById("gallery").innerHTML = `<img src="${imgURL}">`;
    current++;
    if (current === IMAGE_NAMES.length) {
        current = 0;
    }
}

/* Function Calls */
document.getElementById("gallery").addEventListener("click", updateImage);
updateImage();