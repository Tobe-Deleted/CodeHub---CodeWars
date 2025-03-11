// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
  const knotsToKMPH = 1.852;
  const travelHours = travelTime / 60;
  const travelKms   = avgSpeed * knotsToKMPH * travelHours;
  
  return travelKms;
}
​