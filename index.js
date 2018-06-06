var katzDeliLine = [];
var totalNumber = 0

function takeANumber(array) {
  totalNumber++
  return "Welcome, you are customer number " + totalNumber + " today."
}

function nowServing(array) {
  if (array.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + array.shift() + "."
  }
}

function currentLine(array) {
  var waitingLine = [];

  if (array.length < 1) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < array.length; i++) {
      waitingLine.push(" " + [i+1] + ". " + array[i])
    }
      return "The line is currently:" + waitingLine
  }
}
