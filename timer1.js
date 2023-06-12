const alarm = function (times) {
  times
    .sort((a, b) => a - b)
    .forEach((time) => {
      if (parseInt(time) >= 0) {
        setTimeout(() => {
          process.stdout.write("\x07");
        }, time * 1000);
      }
    });
};

alarm(process.argv.slice(2));
