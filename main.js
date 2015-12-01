function read_file_to_array(file) {
  var fs = require('fs');
  return fs.readFileSync(file).toString().split("\n");
}

//load files
var csv = read_file_to_array(process.argv[2]);
var lines = read_file_to_array(process.argv[3]);

//zeroed lines
for (var i = 0; i < lines.length; i++) {
  var num = lines[i] - 1;
  if (num < 0)
    continue;
  csv[num] = ''
}

//remove zeroed lines
csv = csv.filter(
  function(item) {
    return item !== ''
  }
);

//print result
console.log(csv.join('\n'));


