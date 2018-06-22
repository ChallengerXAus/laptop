
const request= require('request');
const argv= require('yargs').argv;

let apiKey='48d3cd40ce6b5fe920b7fa8cde4c806a';
let city= argv.c || 'Melbourne'
let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`



request(url,function(err, resonse, body){
    if (err){
        console.log('error', error);

    }else{
        let weather = JSON.parse(body);
        let message = `it's ${weather.main.temp} degrees in ${weather.name}!`;

        console.log(message);
    }
});