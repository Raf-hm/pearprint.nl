document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".itemGrid");

    data.catalog.forEach((item) => {

        const card = document.createElement("div");
        card.classList.add("item");

        card.innerHTML = `
            <img src="${item.image}">
            
            <div class="text">
                <h3>${item.name}</h3>
                
                <p>${item.description}</p>
                
                <h4>€${item.price.toFixed(2)}</h4>
            </div>
        `;

        card.onclick = () => {
            if(item.slug != "your-own-item") {
                window.location.href = `product.html?product=${item.slug}`;
            } else {
                window.location.href = `yourownitem.html`;
            }
        };

        grid.appendChild(card);

    });

});