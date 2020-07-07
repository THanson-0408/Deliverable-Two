


var vacationType= window.prompt("Hello! What kind of trip would you like to go on, Muscial, Tropical, or Adventerous?");
var groupSize= window.prompt("Including yourself, how many people are you traveling with?");



var travelDestination= "";
var travelSuggestion= "";



if (groupSize <= 2){
  travelSuggestion= "first class flight";
}else if (groupSize == 3 || groupSize == 4 || groupSize == 5){
  travelSuggestion= "helicopter";
}else if (groupSize >= 6){
  travelSuggestion= "charter flight";
}



if (vacationType == "muscial"){
    travelDestination= "New Orleans";
  }else if (vacationType == "tropical"){
    travelDestination= "a beach vacation in Mexico";
  }else if (vacationType == "adventerous"){
    travelDestination= "the Grand Canyon for whitewater rafting";
  }

  
  console.log("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to " + travelDestination);