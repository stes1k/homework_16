import getData from "./get-data.mjs"
import fillList from "./fill-list.mjs"

const URL = "http://localhost:3000/ITEMS"
const BTN = document.querySelector('.btn')
const LIST = document.querySelector('.list')

BTN.addEventListener('click', async () => {
    let data = await getData(URL)
    fillList(LIST, data)
})