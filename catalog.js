document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".itemGrid");

    data.catalog.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("item");

        card.innerHTML = `
            <img src="${item.image}">
            <div class="text">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;

        card.onclick = () => {
            window.location.href = `product.html?product=${item.slug}`;
        };

        grid.appendChild(card);

    });

});