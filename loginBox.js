$(document).ready(function() {  
   
	changeTo();
  
   });

function changeTo(){
    
    $(".copen").click(function() {

       $(".c").hide();

       var cid = $(this).data("c");
       $("#"+cid).show();

    });
}