const data = {
    
    catalog: [
        {
            slug: "your-own-item",
            name: "Your own item",
            description: "Already have your own item? We'll customize it for you.",
            price: 0,
            sizes: ["S","M","L","XL","XXL"],
            image: "src/img/catalog/ownItem.png",

            printLocations: ["Front","Back","Left sleeve","Right sleeve"],

            printPrices: {
                "Front": 2,
                "Back": 5,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
        },


        {
            slug: "premium-tee",
            name: "Premium Tee",
            description: "A heavier T-shirt with durable fabric and a clean fit. Ideal for brands that want a more premium feel.",//
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["royalblue","bottlegreen","heathergrey","black","brown","purple","pink","orange","irishgreen","sand"]
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

            colors: ["royalblue","bottlegreen","heathergrey","black","brown","purple","pink","orange","irishgreen","sand","amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint"]
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

            colors: ["royalblue","bottlegreen","heathergrey","black","brown","purple","pink","orange","irishgreen","sand","amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint"]
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["amber","aqua","ash","black","bottlegreen","brown","burgundy","chocolate","cobaltblue","darkgrey","darkteal","fireRed","irishgreen","gold","lavender","mint","natural","navy","charcoal","orange","lime","lightpink","sportgrey","safetyyellow","purple","red","royalblue","sand","skyblue","sunflower","fuchsia","heathergrey","steelblue","coral","turquoise","olive","tangerine","plum","darkcharcoal","white"]
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

            colors: ["irishgreen","aqua","heathergrey","lime","pink","fireRed","royalblue","black","darkGreen","orange","purple","white","sunflower","navy"]
        }
    ],


    colors: {
        red: "#d0001c",
        fireRed: "#e1251b",
        coral: "#f04e37",
        tangerine: "#f47a20",
        orange: "#f06a00",
        sunflower: "#f2dd2e",
        gold: "#f2c200",
        amber: "#f2a900",
        safetyyellow: "#e6e600",
        lime: "#8cc63e",
        irishgreen: "#009a44",
        darkGreen: "#196638",
        olive: "#556b2f",
        bottlegreen: "#1f4f3f",
        mint: "#cfe8e8",
        turquoise: "#3fb6c6",
        aqua: "#00a8c6",
        darkteal: "#006d6f",
        skyblue: "#9dc3e6",
        steelblue: "#5f7f92",
        royalblue: "#1f5aa6",
        cobaltblue: "#2a4ea1",
        navy: "#2c344d",
        lavender: "#b9a0d3",
        purple: "#5a3a6e",
        plum: "#5a3a54",
        fuchsia: "#c4005a",
        pink: "#c489bd",
        lightpink: "#f3d3db",
        sand: "#d7c7a7",
        natural: "#efe6d4",
        brown: "#4b3621",
        chocolate: "#5a3a2e",
        burgundy: "#6b1f2a",
        sportgrey: "#cfcfcf",
        ash: "#d9d9d9",
        heathergrey: "#9c9c9c",
        darkgrey: "#4a4a4a",
        charcoal: "#3c3f4a",
        darkcharcoal: "#333333",
        black: "#1a1a1a",
        white: "#f5f5f5"
    }
};