function returnFeedback(all){
  
  var mentalLength = all.filter("[name=mental]:checked").length / all.filter("[name=mental]").length;
  var physicalLength = all.filter("[name=physical]:checked").length / all.filter("[name=physical]").length;
  var copingLength = all.filter("[name=coping]:checked").length / all.filter("[name=coping]").length;

  var mentalIsHigh = (mentalLength > .4);
  var physicalIsHigh = (physicalLength > .4);
  var copingIsHigh = (mentalLength > .4);

  var results = [];
  if(mentalIsHigh){
      results.push("You have a lot of mental stress")
  }
  if(physicalIsHigh){
    results.push("You have a lot of physical stress")
  }
  if((mentalIsHigh || physicalIsHigh) && copingIsHigh){
    results.push("However it looks like you are doing some good coping exercizes to deal with it.")
  }
  if ((mentalIsHigh || physicalIsHigh) && (copingIsHigh === false)){
    results.push("You really could stand to use more coping exercizes.")
  }
  if((mentalIsHigh && physicalIsHigh) === false && copingIsHigh){
    results.push("You don't have any significant stress but it looks like you are doing exercizes that may be preventing that from happening. Keep up the good word")
  }
  return results;
}

$(document).ready(function(){
  $("form").submit(function(e){
   e.preventDefault();
   var all = $("input");
   var results = returnFeedback(all);
   results.forEach(function(result){
     $("#results").append("<p>"+ result +"</p>");
   })

   function clear(){
     $("#results p").remove();
   }
  });
})