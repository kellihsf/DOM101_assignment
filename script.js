//creating a JS, document item 
let containerDIV = document.getElementById("container");
let bodyElement = document.body;

let elementH1 = document.createElement("h1")
elementH1.textContent = "Le Cheese Page";
containerDIV.appendChild(elementH1);

let newList = document.createElement("ul")
newList.textContent = "Cheese list"
containerDIV.appendChild(newList)

let listItem = document.createElement("li")
listItem.textContent = "Cheddar"
newList.appendChild(listItem)

let listItem2 = document.createElement("li")
listItem2.textContent = "Manchego"
newList.appendChild(listItem2)

let listItem3 = document.createElement("li")
listItem3.textContent = "Fontina"
newList.appendChild(listItem3)

let elementParagraph = document.createElement("p")
elementParagraph.textContent = "Cheese and biscuits gouda camembert de normandie. Hard cheese blue castello airedale mozzarella monterey jack cheesy grin ricotta paneer. Bavarian bergkase cheesy feet chalk and cheese rubber cheese cheese strings everyone loves chalk and cheese cheesecake. Monterey jack pepper jack cheddar macaroni cheese boursin cheese and biscuits fromage frais."
containerDIV.appendChild(elementParagraph)


let elementParapragh2 = document.createElement("p")
elementParapragh2.textContent = "Manchego jarlsberg caerphilly. Say cheese parmesan emmental fromage frais blue castello who moved my cheese stinking bishop mascarpone. Pepper jack halloumi fromage frais mozzarella stinking bishop cauliflower cheese cheese strings cheese and biscuits. Cauliflower cheese cheeseburger."
containerDIV.appendChild(elementParapragh2)

let elementParapragh3 = document.createElement("p")
elementParapragh3.textContent = "Macaroni cheese danish fontina cheesy grin. Brie bavarian bergkase pecorino bocconcini red leicester chalk and cheese goat stilton. When the cheese comes out everybody's happy cheese slices gouda gouda boursin the big cheese brie airedale. Ricotta say cheese stinking bishop."
containerDIV.appendChild(elementParapragh3)

let myButton = document.createElement("button")
myButton.textContent = "Click this..."
containerDIV.appendChild(myButton)

myButton.addEventListener("click", () => {
    bodyElement.style.backgroundColor = "yellow";
})

let myButton2 = document.createElement("button")
myButton2.textContent = "Now Click this"
containerDIV.appendChild(myButton2);

myButton2.addEventListener("click", () => {
    bodyElement.style.backgroundColor = "green";
})