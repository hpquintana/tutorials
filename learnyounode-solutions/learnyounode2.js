//process.argv [0] == 'node'
//process.argv [1] == path to file
//process.argv [2] on = input
let sum = 0;
for (let index = 2; index < process.argv.length; index++) {
    sum += Number(process.argv[index]);
}

console.log(sum);