const params = new URLSearchParams(window.location.search);
const slug = params.get("product");

const product = data.catalog.find(p => p.slug === slug);

if(product){

document.getElementById("title").textContent = product.name;
document.getElementById("price").textContent = product.price;
document.getElementById("image").src = product.image;

const colorContainer = document.getElementById("colors");

product.colors.forEach(colorName => {

const el = document.createElement("div");
el.className = "color";
el.style.background = data.colors[colorName];
el.title = colorName;

colorContainer.appendChild(el);

});

}




document.querySelectorAll(".size").forEach(size => {

size.onclick = () => {

document.querySelectorAll(".size")
.forEach(s => s.classList.remove("selected"));

size.classList.add("selected");

};

});