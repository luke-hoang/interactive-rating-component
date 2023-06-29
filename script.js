const ratings = document.getElementsByName('rating');
ratings.forEach(rating => {
  rating.addEventListener("click", function(event) {
    updateRatingSelected(event.target.value);
    enableSubmitBtn();
  })
});

document.getElementById('submit').addEventListener("click", showConfirmation);

function updateRatingSelected(rating) {
  document.getElementById('rating-selected').innerHTML = rating;
}

function showConfirmation() {
  document.getElementById('component-rating').style.display = "none";
  document.getElementById('component-confirmation').style.display = "block";
}

function enableSubmitBtn() {
  document.getElementById('submit').removeAttribute('disabled');
}