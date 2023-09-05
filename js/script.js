
$(document).ready(function() {
    $(".questions__title").click(function (event) {
        if ($(".faq__list").hasClass("one")){
            $(".questions__title").not($(this)).removeClass('active');
            $(".questions__text").not($(this).next()).slideUp(300);
        }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

"use strict";

document.addEventListener("click", documentClick);
function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}