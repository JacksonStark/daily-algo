// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(totalSeconds) {
  let hours = totalSeconds / 60 / 60;
  let minutes = (hours % 1) * 60;
  let seconds = (minutes % 1) * 60;

  function pad(number) {
    return number < 10 ? "0" + number : number
  }

  let confirmedHours = hours > 99 ? 99 : pad(Math.floor(hours))
  let confirmedMinutes = hours > 99 ? 59 : pad(Math.floor(minutes))
  let confirmedSeconds = hours > 99 ? 59 : pad(Math.round(seconds))

 return `${confirmedHours}:${confirmedMinutes}:${confirmedSeconds}`;
}

console.log("FINAL AMOUNT |> ", humanReadable(30000))

module.exports = humanReadable


