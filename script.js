//your JS code here. If required.
function savePreferences() {
  const fontSize = document.getElementById('fontsize').value;
  const color = document.getElementById('fontcolor').value;
  
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.color = color;
  
  // Store preferences as cookies
  document.cookie = 'font-size=' + fontSize ;
  document.cookie = 'color=' + color;
}
