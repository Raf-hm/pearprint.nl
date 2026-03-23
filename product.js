const params = new URLSearchParams(window.location.search);
const slug = params.get("product");

const product = data.catalog.find(p => p.slug === slug);

let selectedColor = null;
let selectedSize = null;

if (product) {
    document.getElementById("title").textContent = product.name;
    document.getElementById("price").textContent = `€${product.price.toFixed(2)}`;

    const image = document.getElementById("image");
    image.src = product.image;

    const colorContainer = document.getElementById("colors");
    const sizeContainer = document.getElementById("sizes");

    // Kleur selectie
    product.colors.forEach(colorName => {
        const el = document.createElement("div");
        el.className = "color";
        el.style.background = data.colors[colorName];
        el.title = colorName;

        const check = document.createElement("div");
        check.className = "check";
        check.textContent = "✓";
        el.appendChild(check);

        if (colorName === "black") {
            el.classList.add("selected");
            selectedColor = colorName;
        }

        el.onclick = () => {
            document.querySelectorAll(".color").forEach(c => c.classList.remove("selected"));
            el.classList.add("selected");
            selectedColor = colorName;
        };

        colorContainer.appendChild(el);
    });

    // Maat selectie
    product.sizes.forEach(sizeName => {
        const el = document.createElement("div");
        el.className = "size";
        el.textContent = sizeName;

        if (sizeName === "Adult" || sizeName === "Junior") {
            el.style.width = "68px";
            // el.style.gridTemplateColumns = "repeat(7, 70px)"
        }

        el.onclick = () => {
            document.querySelectorAll(".size").forEach(s => s.classList.remove("selected"));
            el.classList.add("selected");
            selectedSize = sizeName;
        };

        sizeContainer.appendChild(el);
    });
} else {
    // 404 product not found. (overwrite html and offer redirect to catalog.)
    console.log("?")
}

// Afbeelding aanpassen aan hoogte product info
function adjustImageSize() {
    const productInfo = document.getElementById("productInfo");
    const image = document.getElementById("image");

    image.style.height = "auto";
    const targetHeight = productInfo.offsetHeight;
    image.style.height = targetHeight + "px";

    const naturalRatio = image.naturalWidth / image.naturalHeight;
    const computedWidth = targetHeight * naturalRatio;

    if (computedWidth > 450) {
        image.style.width = "450px";
        image.style.height = "auto";
    } else {
        image.style.width = "auto";
    }
}

window.addEventListener("load", adjustImageSize);
window.addEventListener("resize", adjustImageSize);

const modal = document.getElementById("quoteModal");

// Open modal
document.querySelector(".cart").onclick = () => {
    if (!selectedColor || !selectedSize) {
        alert("Select a color and size first");
        return;
    }
    modal.style.display = "flex";
};

// Sluit modal
document.querySelector(".closeModal").onclick = () => modal.style.display = "none";
modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// Print locaties in modal
const locationsContainer = document.getElementById("printLocations");
product.printLocations.forEach(location => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = location;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(location));
    locationsContainer.appendChild(label);
});

function calcPrice(dataInput) {
    const quantity = dataInput.quantity;
    const basePrice = dataInput.product.price;

    let printCost = 0;

    // Printprijzen optellen
    dataInput.locations.forEach(location => {
        printCost += dataInput.product.printPrices[location] || 0;
    });

    // Korting bepalen
    let discount = 0;

    if (quantity >= 100) {
        discount = 0.20;
    } else if (quantity >= 50) {
        discount = 0.15;
    } else if (quantity >= 25) {
        discount = 0.10;
    } else if (quantity >= 10) {
        discount = 0.05;
    }

    // Korting alleen op printkosten
    const discountedPrintCost = printCost * (1 - discount);

    // Setupkosten
    const setupCost = dataInput.locations.length * 7.5;

    // Totaal
    const total = ((basePrice + discountedPrintCost) * quantity) + setupCost;

    return total.toFixed(2);
}

// Verzenden van quote
const sendBtn = document.querySelector(".sendQuote");
sendBtn.onclick = () => {
    const quantity = document.getElementById("quantity").value;
    const locations = [];
    document.querySelectorAll("#printLocations input:checked").forEach(cb => locations.push(cb.value));

    if (!quantity) {
        alert("Enter a quantity");
        return;
    }

    const price = calcPrice({
        product: product,
        color: selectedColor,
        size: selectedSize,
        quantity: Number(quantity),
        locations: locations
    });

    const modalContent = document.querySelector(".modalContent");
    modalContent.innerHTML = `
        <div style="text-align:center">
            <div style="font-size:40px;font-weight:700;margin-bottom:20px">
                €${price} | ${(price/quantity).toFixed(2)}/pc
            </div>
            <div style="color:#666;margin-bottom:30px">
                This is an estimated price. Final pricing may vary depending on artwork and print method.
            </div>
            <div style="display:flex; gap:15px; justify-content:center; flex-wrap:wrap">
                <button id="newQuote" style="background:#f0f0f0;color:#111;border:none;padding:14px 24px;font-weight:600;cursor:pointer;border-radius:6px;">
                    New quote
                </button>
                <button id="getInTouch" style="background:#13b013;color:white;border:none;padding:14px 24px;font-weight:600;border-radius:6px;">
                    Get in touch
                </button>
            </div>
        </div>
    `;

    const modalTitle = document.querySelector(".modalTitle");
    modalTitle.textContent = "Estimated price";

    document.getElementById("getInTouch").onclick = () => window.location.href = "contact.html";

    document.getElementById("newQuote").onclick = () => {
        const modalBox = document.querySelector(".modalBox");
        modalBox.innerHTML = `
            <div class="modalHeader">
                <div class="modalTitle">Request a quote</div>
                <div class="closeModal">✕</div>
            </div>
            <div class="modalContent">
                <div class="question">
                    <strong>Where do you want the item printed?</strong>
                    <p class="hint">Multiple options allowed</p>
                    <div id="printLocations"></div>
                </div>
                <div class="question">
                    <strong>How many items do you need?</strong>
                    <input type="number" id="quantity" min="1" placeholder="Amount">
                </div>
                <button class="sendQuote">Request quote</button>
            </div>
        `;

        // herlaad print locaties
        const locationsContainer = document.getElementById("printLocations");
        product.printLocations.forEach(location => {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = location;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(location));
            locationsContainer.appendChild(label);
        });

        document.querySelector(".closeModal").onclick = () => modal.style.display = "none";
        modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
        document.querySelector(".sendQuote").onclick = sendBtn.onclick;
    };
};