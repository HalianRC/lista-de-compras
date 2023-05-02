const body = document.querySelector("body")

const div_1 = document.createElement("div")
body.appendChild(div_1)
div_1.className = "divImagem"

let img = document.createElement("img")
img.src = "assets/img/vegetables-155616_1280.png"
div_1.appendChild(img)


const div_2 = document.createElement("div")
body.appendChild(div_2)

let listUnorder = document.createElement("ul")
div_2.appendChild(listUnorder)
listUnorder.className = "container"

let item_1 = document.createElement("li")
listUnorder.appendChild(item_1)
item_1.innerText = "Banana"
item_1.className = "box"

let item_2 = document.createElement("li")
listUnorder.appendChild(item_2)
item_2.innerText = "Morango"
item_2.className = "box"

let item_3 = document.createElement("li")
listUnorder.appendChild(item_3)
item_3.innerText = "Goiaba"
item_3.className = "box"

let item_4 = document.createElement("li")
listUnorder.appendChild(item_4)
item_4.innerText = "Pêssego"
item_4.className = "box"