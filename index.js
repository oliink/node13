const fs = require('fs'); 

let datatxt = 'Hello!';
// fs.writeFileSync('text.txt', datatxt, 'utf-8');
fs.writeFile('text.txt', datatxt, 'utf-8', (err) => {
    // if(err){
    //     console.log('error');
    // }
    console.log('data written');
});

let content = '\nsome content';
// fs.appendFileSync('text.txt', content);
fs.appendFile('text.txt', content, (err) => {
    console.log('data added');
});

// let readText = fs.readFileSync('text.txt', 'utf-8');
// console.log(readText);
fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(data)
});
