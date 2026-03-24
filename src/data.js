const data = {
    
    catalog: [
        {
            slug: "your-own-item",
            name: "Your own item",
            description: "Already have your own item? We'll customize it for you.",
            price: 0,
            sizes: ["S","M","L","XL","XXL"],
            image: "src/img/catalog/ownItem.png",
        },

        {
            slug: "premium-tee",
            name: "Premium Tee",
            description: "A heavier T-shirt with durable fabric and a clean fit. Ideal for brands that want a more premium feel.",
            price: 7.19,
            sizes: ["XS","S","M","L","XL","XXL","3XL","4XL","5XL"],
            image: "src/img/catalog/bnce190.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["black","charcoal","darkGray","gray","lightGray","white","fireRed","red","burgundy","coral","tangerine","orange","sunflower","gold","mustard","lime","irishGreen","forestGreen","darkGreen","olive","sageGreen","mint","turquoise","aqua","teal","darkTeal","skyBlue","steelBlue","royalBlue","navy","lavender","lilac","purple","plum","hotPink","beige","sand","khaki","brown","chocolate","denimBlue","slateGray","offWhite","cream"]
        },

        {
            slug: "standard-tee",
            name: "Standard Tee",
            description: "A reliable everyday T-shirt that balances comfort, durability and price.",
            price: 6.49,
            sizes: ["S","M","L","XL","XXL","3XL","4XL","5XL"],
            image: "src/img/catalog/gildanultra.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["black","charcoal","darkGray","gray","lightGray","white","fireRed","red","burgundy","coral","tangerine","orange","sunflower","gold","amber","mustard","lime","irishGreen","forestGreen","darkGreen","olive","sageGreen","mint","turquoise","aqua","teal","darkTeal","skyBlue","steelBlue","royalBlue","navy","cobaltblue","lavender","lilac","purple","plum","hotPink","magenta","blushPink","beige","sand","khaki","brown","chocolate","denimBlue"]
        },

        {
            slug: "budget-tee",
            name: "Budget Tee",
            description: "A lightweight and affordable option, suitable for large orders and events.",
            price: 4.29,
            sizes: ["XS","S","M","L","XL","XXL","3XL","4XL","5XL"],
            image: "src/img/catalog/rolyatomic150.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],
            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["black","charcoal","lightGray","white","fireRed","red","tangerine","sunflower","lime","irishGreen","turquoise","royalBlue","navy","hotPink"]
        },

        {
            slug: "stone-washed-tee",
            name: "Stone washed shirt",
            description: "A thick T-shirt with a soft stone washed finish and a relaxed vintage look.",
            price: 8.95,
            sizes: ["XS","S","M","L","XL","XXL","3XL","4XL","5XL"],
            image: "src/img/catalog/stoneWash.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["black","lightGray","beige","tangerine","irishGreen","royalBlue","hotPink","purple","brown","olive"]
        },

        { 
            slug: "standard-polo",
            name: "Standard polo",
            description: "A thick T-shirt with a soft stone washed finish and a relaxed vintage look.",
            price: 10.95,
            sizes: ["XS","S","M","L","XL","XXL","3XL","4XL","5XL"],
            image: "src/img/catalog/fotloriginalpolo.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["black","charcoal","gray","lightGray","white","fireRed","burgundy","turquoise","skyBlue","royalBlue"]
        },
        
        {
            slug: "long-sleeve-tee",
            name: "Long sleeve shirt",
            description: "A thick T-shirt with a soft stone washed finish and a relaxed vintage look.",
            price: 12.95,
            sizes: ["XS","S","M","L","XL","XXL","3XL","4XL","5XL"],
            image: "src/img/catalog/gildanultralongsleeve.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["black","charcoal","darkGray","gray","lightGray","white","fireRed","red","burgundy","tangerine","orange","sunflower","gold","lime","irishGreen","turquoise","steelBlue","royalBlue","navy","lavender","plum","beige","brown","chocolate"]
        },

        { 
            slug: "Crewneck-sweater",
            name: "Crewneck Sweater",
            description: "A clean crewneck sweatshirt with a comfortable everyday fit.",
            price: 14.29,
            sizes: ["S","M","L","XL","XXL"],
            image: "src/img/catalog/gildanheavysweat.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 3,
                "Right sleeve": 3,
            },

            colors: ["black","charcoal","darkGray","gray","lightGray","white","fireRed","red","burgundy","coral","tangerine","orange","gold","sunflower","lime","irishGreen","forestGreen","darkGreen","olive","turquoise","aqua","teal","skyBlue","steelBlue","royalBlue","navy","lavender","purple","plum","magenta","hotPink","beige","sand","khaki","brown","chocolate"]
        },

        {
            slug: "classic-hoodie",
            name: "Classic Hoodie",
            description: "A warm hoodie with thicker fabric that feels solid and comfortable.",
            price: 17.95,
            sizes: ["S","M","L","XL","XXL"],
            image: "src/img/catalog/gildanheavyhood.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve","Hood"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 3,
                "Right sleeve": 3,
                "Hood": 4
            },

            colors: ["black","charcoal","darkGray","gray","lightGray","white","fireRed","red","burgundy","coral","tangerine","orange","gold","sunflower","lime","irishGreen","forestGreen","darkGreen","olive","mint","turquoise","aqua","teal","skyBlue","steelBlue","royalBlue","navy","lavender","purple","plum","magenta","hotPink","beige","sand","khaki","brown","chocolate"]
        },

        { 
            slug: "zip-hoodie",
            name: "Zip-up Hoodie",
            description: "A comfortable zip hoodie with durable fabric and a clean finish.",
            price: 25.95,
            sizes: ["S","M","L","XL","XXL"],
            image: "src/img/catalog/gildanzip.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve","Hood"],

            printPrices: {
                "Front": 3,
                "Back": 5,
                "Left sleeve": 3,
                "Right sleeve": 3,
                "Hood": 4
            },

            colors: ["charcoal","lightGray","royalBlue","steelBlue","navy","red","beige","khaki","olive"]
        },

        {
            slug: "premium-cap",
            name: "Premium Cap",
            description: "A structured cap with a sturdy feel that keeps its shape over time.",
            price: 4.49,
            sizes: ["Adult","Junior"],
            image: "src/img/catalog/capbeechfield.png",

            printLocations: ["Front","Back","Left side","Right side"],

            printPrices: {
                "Front": 3,
                "Back": 1,
                "Left side": 2,
                "Right side": 2
            },

            colors: ["fireRed","brown","lavender","irishGreen","gold","gray","lightGray","lime","sageGreen","beige","steelBlue","royalBlue","hotPink","black","forestGreen","navy","tangerine","purple","sunflower","burgundy","darkGreen","sand","white"]
        },

        {
            slug: "basic-cap",
            name: "Basic Cap",
            description: "A simple, lightweight cap that keeps costs low while still looking neat.",
            price: 2.49,
            sizes: ["Adult"],
            image: "src/img/catalog/capresult.png",

            printLocations: ["Front","Back","Left side","Right side"],

            printPrices: {
                "Front": 3,
                "Back": 2,
                "Left side": 2,
                "Right side": 1
            },

            colors: ["irishGreen","turquoise","lightGray","sageGreen","lavender","fireRed","royalBlue","black","forestGreen","tangerine","purple","white","sunflower","navy"]
        }
    ],

    colors: {
        black: "#000000",
        charcoal: "#36454f",
        slateGray: "#708090",
        darkGray: "#4a4a4a",
        gray: "#808080",
        lightGray: "#d3d3d3",
        offWhite: "#f5f5f5",
        white: "#ffffff",
        burgundy: "#722f37",
        wineRed: "#800020",
        fireRed: "#eb251b",
        red: "#da001d",
        coral: "#f04e37",
        salmon: "#fa8072",
        tangerine: "#f47a20",
        orange: "#f06a00",
        burntOrange: "#cc5500",
        peach: "#ffe5b4",
        sunflower: "#f2dd2e",
        mustard: "#e1ad01",
        gold: "#f2c200",
        amber: "#f2a900",
        beige: "#f5f5dc",
        cream: "#fffdd0",
        sand: "#c2b280",
        khaki: "#c3b091",
        lime: "#8cc63e",
        appleGreen: "#8db600",
        irishGreen: "#009a44",
        forestGreen: "#228b22",
        darkGreen: "#196638",
        olive: "#556b2f",
        sageGreen: "#9caf88",
        bottleGreen: "#1f4f3f",
        mint: "#cfe8e8",
        turquoise: "#3fb6c6",
        aqua: "#00a8c6",
        teal: "#008080",
        darkTeal: "#006d6f",
        skyBlue: "#9dc3e6",
        babyBlue: "#89cff0",
        steelBlue: "#5f7f92",
        denimBlue: "#1560bd",
        royalBlue: "#1f5aa6",
        cobaltblue: "#2a4ea1",
        navy: "#000080",
        lavender: "#e6e6fa",
        lilac: "#c8a2c8",
        purple: "#800080",
        plum: "#8e4585",
        magenta: "#ff00ff",
        hotPink: "#ff69b4",
        blushPink: "#de5d83",
        rose: "#ff007f",
        brown: "#8b4513",
        chocolate: "#5a3a1b"
    }
};