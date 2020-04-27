function returnFeedback(mental,physical,coping){
  
  var mentalLength = mental.filter("[name=mental]:checked").length / mental.filter("[name=mental]").length;
  var physicalLength = mental.filter("[name=physical]:checked").length / mental.filter("[name=physical]").length;
  var copingLength = mental.filter("[name=coping]:checked").length / mental.filter("[name=coping]").length;

  var mentalIsHigh = (mentalLength > .7);
  var physicalIsHigh = (physicalLength > .7);
  var copingIsHigh = (mentalLength > .7);

  
}

$(document).ready(function(){
  $("form").submit(function(e){
   e.preventDefault();
   var all = $("input");
   returnFeedback(all);
  });
})