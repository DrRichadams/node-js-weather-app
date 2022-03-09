const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const city = document.querySelector(".city")
const descrip = document.querySelector(".descrip")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    city.textContent = "Loading..."
    descrip.textContent = ""
    fetch('/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            city.textContent = data.error
        } else {
            city.textContent = data.location
            descrip.textContent = data.forecast
        }
    })
})
})