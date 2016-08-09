$(document).ready(function(){
  $("#editbtn").click(function(event){
    event.preventDefault();
    console.log('hi');
    $(".keg-form-details").show();
  });
});
