var card = document.querySelectorAll('.item-card');
card[0].addEventListener("click", function() {
    card[0].classList.toggle('flipped');
});
card[1].addEventListener("click", function() {
    card[1].classList.toggle('flipped');
});
card[2].addEventListener("click", function() {
    card[2].classList.toggle('flipped');
});


// card[1].addEventListener("click", function() {
//     card[1].textContent = "Refreshing boost of matcha with creamy goodness.";
//     card[1].classList.add("jsstyle");
// });
// card[2].addEventListener("click", function() {
//     card[2].textContent = "Earthy vibrant taste for a non-caffeinated latte.";
//     card[2].classList.add("jsstyle");
// });

