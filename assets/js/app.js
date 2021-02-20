// Init local starage
let db = window.localStorage;

// Get all activites
let activities = document.querySelectorAll("input.form-check-input");

// Iterate through activities
activities.forEach(function (el) {
  //Add listener to checkboxes
  el.addEventListener("click", function (event) {
    let checkbox = event.target;
    db.setItem(event.target.id, event.target.checked);
  });

  //Define if it is checked or not
  el.checked = db.getItem(el.id);
});
