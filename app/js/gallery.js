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
const IMAGE_CAPTIONS = [
    "Busted mind listening to Grimes and Tame Impala on weed",
    "Discovered Kaytranada by stalking the XC boy down the hall on Spotify",
    "Started a college radio show mostly so she could listen to music on HQ speakers and drink red wine in the dark",
    "Literally could not invest emotionally in anything that wasn't <i>Bojack Horseman</i>",
    "Out of respect, Cinematography classmate decided not to use <i>Ratatouille</i> in assignment to recut a movie trailer",
    "Graduated college, moved to Boston, and found new appreciation for the struggles of pubescent boys",
    "Revived Bibimbangers radio show at a community station in East Boston focused on youth empowerment",
    `Took commissions on <a target="_blank" href="https://lyliax.wixsite.com/home/usps">USPS stickers</a> to raise money for the Boston Artist Relief Fund`,
    "Was feeling herself in an Ambercrombie & Fitch hand me down dress from her sister",
    "Started tagging things to feel alive",
    "Learned ceramics because she needed to get out of her head and into her body",
    "Got a pixie cut",
    "Embraced her identity as a jack of all trades",
    "Appropriated Taylor Swift's branding for the Reputation tour to process her own identity crisis",
    "Moved back to her hometown in New York and confronted questions about her own legacy",
    "Decided to harness the power of the Internet to make something of herself"
];
const IMAGE_YEARS = [
    "2016",
    "2016",
    "2017",
    "2018",
    "2018",
    "2018",
    "2018",
    "2019",
    "2019",
    "2020",
    "2020",
    "2022",
    "2022",
    "2023",
    "2024",
    "2024"
];

let current = 0;

/* Function Definitions */
function updateImage(i) {
    let imgURL = ASSETS_URL.concat(IMAGE_NAMES[i], ".webp");
    document.getElementById("gallery").innerHTML = `
        <figure>
            <img src="${imgURL}">
            <figcaption id="caption">${IMAGE_CAPTIONS[i]}</figcaption>
        </figure>
    `;
    document.getElementById("year").innerHTML = IMAGE_YEARS[i];
}

function galleryNav(i) {
    current = current + i;
    if (current === 0) {
        document.getElementById("gallery-prev").style.display = "none";
    }
    else if (current === IMAGE_NAMES.length - 1) {
        document.getElementById("gallery-next").style.display = "none";
    }
    else {
        document.getElementById("gallery-prev").style.display = "block";
        document.getElementById("gallery-next").style.display = "block";
    }
    updateImage(current);
}

/* Function Calls */
document.getElementById("gallery-prev").addEventListener("click", ()=>{ galleryNav(-1); });
document.getElementById("gallery-next").addEventListener("click", ()=>{ galleryNav(1); });
galleryNav(0);