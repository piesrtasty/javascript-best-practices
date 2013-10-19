// Cross Browser Console Log
function log() {
  try {
    // Try to log message using most common browser method
    console.log.apply(console, arguments);
  } catch (e) { // Catch any failure in logging
    try {
      // Try to log the Opera way
      opera.postError.apply(opera, arguments);
    } catch (e) {
      // Use alert if all else fails
      alert(Array.prototype.join.call( arguments, " "));
    }
  }
}
