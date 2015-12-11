let fs = require("fs");
let $ = require("jquery");

// Load css stylesheet
// Inlined using brfs ( https://github.com/substack/brfs )
let css = fs.readFileSync("./src/css/boilerplate.css");

// Add css to the page
GM_addStyle(css);

// Flicker all <span> to multiple colors
const FLICKER_CSS_CLASSES = ["boilerplate-flicker-a", "boilerplate-flicker-b", "boilerplate-flicker-c"]
const FLICKER_RATE = 500; // ms
let flicker_index = 0;

setInterval(() => {
  $('span').each((index, element) => {
    $(element)
      .removeClass(FLICKER_CSS_CLASSES.join(" "))
      .addClass(FLICKER_CSS_CLASSES[flicker_index++]);

    flicker_index %= FLICKER_CSS_CLASSES.length;
  });
}, FLICKER_RATE);
