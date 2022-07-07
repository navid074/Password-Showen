 // Functions for select elems with id & class
 let $ = document;
 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems
 let togglePassword = _class("toggle-password");
 let passwordField = _id("password-field");
 let toggleIcon = document.querySelector('.fa-eye');

 // Fire click event on eye icon
 toggleIcon.addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     toggleIcon.classList.remove("active");
   } else {
     passwordField.type = "text";
     toggleIcon.classList.add("active");
   }
 })