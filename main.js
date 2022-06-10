$(document).ready(function () {
    $("#contactform").submit(function (e) {
      e.preventDefault();
      $("#confirmation").modal('show');
  });
});