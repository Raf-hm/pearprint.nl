const params = new URLSearchParams(window.location.search);
const slug = params.get("product");

const product = data.catalog.find(p => p.slug === slug);

if (product) {
    document.getElementById("title").textContent = product.name;
    document.getElementById("price").textContent = product.price;

    const image = document.getElementById("image");
    image.src = product.image;

    const colorContainer = document.getElementById("colors");
    const sizeContainer = document.getElementById("sizes");

    // COLORS
    product.colors.forEach(colorName => {
        const el = document.createElement("div");
        el.className = "color";
        el.style.background = data.colors[colorName];
        el.title = colorName;
        colorContainer.appendChild(el);
    });

    // SIZES (DYNAMISCH)
    product.sizes.forEach(sizeName => {
        const el = document.createElement("div");
        el.className = "size";
        el.textContent = sizeName;

        // bredere box voor Adult / Junior
        if (sizeName === "Adult" || sizeName === "Junior") {
            el.style.width = "68px";
        }

        el.onclick = () => {
            document.querySelectorAll(".size").forEach(s => s.classList.remove("selected"));
            el.classList.add("selected");
        };

        sizeContainer.appendChild(el);
    });
}

// ------------------------
// AFBEELDING HOOGTE / BREEDTE AANPASSEN
function adjustImageSize() {
    const productInfo = document.getElementById("productInfo");
    const image = document.getElementById("image");

    image.style.height = "auto";

    let targetHeight = productInfo.offsetHeight;
    image.style.height = targetHeight + "px";

    const naturalRatio = image.naturalWidth / image.naturalHeight;
    let computedWidth = targetHeight * naturalRatio;

    if (computedWidth > 450) {
        image.style.width = "450px";
        image.style.height = "auto";
    } else {
        image.style.width = "auto";
    }
}

window.addEventListener("load", adjustImageSize);
window.addEventListener("resize", adjustImageSize);