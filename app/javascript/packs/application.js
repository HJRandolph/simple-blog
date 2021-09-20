// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"



Rails.start()
Turbolinks.start()
ActiveStorage.start()

const Trix = require("trix")
require("@rails/actiontext")

Trix.config.blockAttributes.heading1.tagName = "h3";

import Sortable from 'sortablejs';

import '../stylesheets/application';

document.addEventListener('turbolinks:load', () => {
    document.addEventListener('click', (e) => {
        let element = e.target.closest('.paragraph-content');
        if (!element) return;

        element.classList.add('d-none');
        element.nextElementSibling.classList.remove('d-none');
    })

    document.addEventListener('click', (e) => {
        if (!e.target.matches('.cancel')) return;
        e.preventDefault();
        let element = e.target.closest('.paragraph-form');

        element.classList.add('d-none');
        element.previousElementSibling.classList.remove('d-none');
    })

    document.addEventListener('click', (e) => {
        if (!e.target.matches('.cancel')) return;
        e.preventDefault();
        let element = e.target.closest('.image');

        element.remove();
    })

    let el = document.getElementById('elements')
    Sortable.create(el, { animation: 150 })
    
   
});




import "controllers"
