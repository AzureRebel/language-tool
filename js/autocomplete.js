$(function(){
  var images = [
    { value: 'A', data: 'A.gif,V' },
    { value: 'B', data: 'B.gif,C' },
  ];
  
  var thehtml = "";
  /*global $*/
  $('#autocomplete').keyup(function(ev) {
    
     thehtml = "";
     $('#outputcontent').html("");
    
    
     var textValue =  $('#autocomplete').val();
    
    
     for (var z = 0; z < textValue.length; z++) {
    
        for (var i = 0; i < images.length; i++) {
        	if (images[i].value == textValue.charAt(z).toUpperCase()) {
        	  
        	  var res = images[i].data.split(",");
        		
        		thehtml = thehtml + "<img src='img/" + res[0] + "' />";
        		break;
        	}
        }
     }
     
      $('#outputcontent').html(thehtml);
      
  });
  
  
  
  
  $('#btnClear').click(function(ev) {
    $('#outputcontent').html("");
    $('#autocomplete').val("");
  });

});
