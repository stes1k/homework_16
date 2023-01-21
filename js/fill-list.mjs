const fillList = (list, data) => {
    for (let key in data) {
        let sale =(data[key]["price"] * 0.75);
        list.insertAdjacentHTML(`beforeend`, `
            <li>
                <div class="info">
                    <img src="${data[key]["avatar"]}">
                    <span>${data[key]["name"]}</span>
                </div>
                <div class="reactions">
                    <span>${data[key]["price"]}</span>
                    <span>${sale}</span>
                    <span>${data[key]["pieces"]}</span>
                </div>
            </li>
            `)
    }
}

export default fillList