const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e2f7dbf92d707b97de76d2530159cb67&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        //console.log("my data", body, error)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + 'degrees.')
        }
    })
}

module.exports = forecast