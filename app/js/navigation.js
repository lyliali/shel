/*
    NAVIGATION SCRIPT - Only used by pages in the html folder.
    index.html and html/idx.html have special navigation bars.
*/
/* Constants */
const PAGES = [
    "title",
    "epigraph",
    "bio",
    "projects",
    "art is not a luxury",
    "only the things worth seeing",
    "snakes and ladders",
    "genealogy",
    "index"
];

const PAGE_PATHS = [
    "index.html",
    "html/epigraph/invitation.html",
    "html/about/bio.html",
    "html/projects/projects.html",
    "html/projects/anal.html",
    "html/projects/seeing.html",
    "html/projects/snakes.html",
    "html/about/genealogy.html",
    "html/idx.html"
]

/* Function Definitons */
function documentTitleToArrIndex() {
    for (let i = 1; i < PAGES.length; i++) {
        if (document.title.startsWith(PAGES[i])) {
            return i;
        }
    }
}

function populateNavigation() {
    let current = documentTitleToArrIndex();
    let url = window.location.href.split("html")[0];
    let prevUrl = url.concat(PAGE_PATHS[current - 1]);
    let indexUrl = url.concat(PAGE_PATHS[PAGE_PATHS.length - 1]);
    let nextUrl = url.concat(PAGE_PATHS[current + 1]);
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
    console.log(prev);
    console.log(index);
    console.log(next);
    const prevElem = document.getElementById("prev");
    prevElem.innerHTML = prev;
    const idxElem = document.getElementById("idx");
    idxElem.innerHTML = index;
    const nextElem = document.getElementById("next");
    nextElem.innerHTML = next;
}

/* Function Calls */
populateNavigation();