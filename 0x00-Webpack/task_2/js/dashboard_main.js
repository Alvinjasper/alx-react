<<<<<<< HEAD
import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let conunt = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
=======
const $ = require( "jquery" );
// Load the full build
const _ = require("lodash");
import "../css/main.css";

let count = 0;

function updateCounter() {
  count++;
  $( "#count" ).text(`${count} clicks on the button` );
}

const $button = $("<button>Click here to get started</button>").on(
  "click",
  _.debounce( updateCounter, 500, { leading: true, trailing: false })
);

$('body').append("<div id='logo'></div>");
$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append($button);
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");
>>>>>>> f4345cad4844b5374f7b6a715bbabb5b2d0e84fd
