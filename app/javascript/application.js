// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Adicione este código:
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("[data-confirm]").forEach(function(element) {
    element.addEventListener("click", function(e) {
      if (!confirm(element.getAttribute("data-confirm"))) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
});