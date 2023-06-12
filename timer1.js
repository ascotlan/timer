const alarm = function (times) {
  times
    .sort((a, b) => a - b) // sort alarm times in ascending order
    .forEach((time) => {
      // parse an integer from the string element in the times array
      if (parseInt(time) >= 0) {
        // if time is an interger >= 0
        setTimeout(() => {
          // beep alarm at time * 1000ms
          process.stdout.write("\x07");
        }, time * 1000);
      }
    });
};

alarm(process.argv.slice(2)); //slice an array of the arguments entered and pass it to function alarm
