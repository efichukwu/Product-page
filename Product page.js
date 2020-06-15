$(document).ready(function(){
    $(".dropbtn").click(function(){
        $("#myDropdown").toggle();
      $('#dimmer').toggle();
     
    });
  
  $("#menu").click(function(){
    $('#nav').slideToggle(600);
  });
});

 $("#searchB").click(function(){ 
 $('#mob-search-1').slideToggle(); 
 });


  $(document).ready(function(){
    $(".more-btn").click(function(){
        $("#demo").slideToggle();
            $(this).text(function(i, v){
               return v === '-' ? '+' : '-' })
    });
    
    
     $(document).ready(function(){
    $(".less-btn").click(function(){
        $("#rev").slideToggle();
            $(this).text(function(i, v){
               return v === '-' ? '+' : '-'
            }) 
    });
  });
      });