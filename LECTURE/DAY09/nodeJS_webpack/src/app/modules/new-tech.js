/* new tech js */

let win = this;

this.addEventListener('DOMContentLoaded');

import $ from 'jquery';
// let $ = require('jquery');

let init = => {

    let nav = $('nav');
    let nav_links = nav.find('a');

    nav_links.each((idx, item) => {
    });
};

$(document).ready(init);
