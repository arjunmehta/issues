process.stdout.write('\033[?25l\033[?1049h\033[H');
process.on('exit', function() {
    process.stdout.write('\033[?25h\033[?1049l');
});

process.stdout.on('resize', function() {
    console.log(process.stdout.columns);
});

setInterval(function() {}, 1000); // just to keep the script running
