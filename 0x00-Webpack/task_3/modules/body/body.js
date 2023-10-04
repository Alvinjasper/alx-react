<<<<<<< HEAD
import "./body.css";
const $ = require("jquery");
const _ = require("lodash");

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"><p>');

const updateCounter = () => {
  let times = $("#count").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
=======
const $ = require( "jquery" );
// Load the full build
const _ = require("lodash");
import "./body.css";

let count = 0;

function updateCounter() {
  count++;
  $( "#count" ).text(`${count} clicks on the button` );
}

const $button = $("<button>Click here to get started</button>").on(
  "click",
  _.debounce( updateCounter, 500, { leading: true, trailing: false })
);

$('body').append("<p>Dashboard data for the students</p>");
$('body').append($button);
$('body').append("<p id='count'></p>");
>>>>>>> f4345cad4844b5374f7b6a715bbabb5b2d0e84fd
