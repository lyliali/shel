/*
    Create a timeline where you hover over the marks
    and it displays the year.
*/
/* Constants */

/* Function Definitions */
function drawTimeline() {
    let html = "";
    for (let i = 0; i < 16; i++) {
        html = html.concat(`<div id="t${i}"><p>|</p></div>`);
    }
    html = html.concat(`<span id="year"></span>`);
    document.getElementById("timeline").innerHTML = html;
}

/* Function Calls */
drawTimeline();