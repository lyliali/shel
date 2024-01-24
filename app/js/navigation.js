/*
    NAVIGATION SCRIPT - Only used by pages in the html folder.
    index.html and html/idx.html have special navigation bars.
*/
/* Constants */
const PAGES = [
    "title",
    "advance praise",
    "dedication",
    "epigraph",
    "bio",
    "projects",
    "art is not a luxury",
    "only the things worth seeing",
    "snakes and ladders",
    "this",
    "genealogy",
    "index"
];

const SLUGS = [
    "/",
    "/praise",
    "/dedication",
    "/epigraph",
    "/about",
    "/projects",
    "/art-is-not-a-luxury",
    "/worth-seeing",
    "/snakes-ladders",
    "/this",
    "/genealogy",
    "/index"
]

const URL_PREFIX = "https://lylia.li";

/* Function Definitons */
function documentTitleToArrIndex() {
    for (let i = 0; i < PAGES.length; i++) {
        if (document.title.startsWith(PAGES[i])) {
            return i;
        }
    }
}

function populateNavigation() {
    let current = documentTitleToArrIndex();

    // Nav for title page
    if (current === 0){
        let enter = `<a href="${URL_PREFIX.concat(SLUGS[1])}">Enter</a>`;
        document.getElementById("enter").innerHTML = enter;
        console.log("done");
        return;
    }

    let prevUrl = URL_PREFIX.concat(SLUGS[current - 1]);
    let indexUrl = URL_PREFIX.concat(SLUGS[SLUGS.length - 1]);
    let nextUrl = URL_PREFIX.concat(SLUGS[current + 1]);
    let prev = `
        <a href="${prevUrl}">
            <span class="desktop-nav">Previous page</span>
            <span class="mobile-nav">&larr;</span>
        </a>
    `;
    let index = `
        <a href="${indexUrl}">
            <span class="desktop-nav">Flip to the end</span>
            <span class="mobile-nav">Index</span>
        </a>
    `;
    let next = `
        <a href="${nextUrl}">
            <span class="desktop-nav">Next page</span>
            <span class="mobile-nav">&rarr;</span>
        </a>
    `;
    document.getElementById("prev").innerHTML = prev;
    document.getElementById("idx").innerHTML = index;
    document.getElementById("next").innerHTML = next;
}

/* Function Calls */
populateNavigation();