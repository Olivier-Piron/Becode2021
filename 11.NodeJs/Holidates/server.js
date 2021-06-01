const axios = require('axios');
const country = require("country-list");
const url = "https://date.nager.at/api/v2/PublicHolidays";

let currentYear = new Date().getFullYear()

if (process.argv.length != 3) {
    console.log("Specify a country name in your command line, eg: Belgium");
    return
}
else {
    var getCountry = process.argv[2];
}

if (country.getCode(getCountry) === undefined) {
    console.log("Specify a valid country name in your command line, eg: Belgium")
    return
}
else {
    var countryCode = country.getCode(getCountry);
}

axios.get(url + '/' + currentYear + '/' + countryCode).then(holidays => {

    holidays.data.forEach(el => {
        console.log(el.date + ' : ' + el.name);
    });
});