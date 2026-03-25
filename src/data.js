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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["apricot","atoll","ashHeather","black","bottleGreen","brown","burgundy","chocolate","cobaltBlue","darkGrey","divaBlue","fireRed","kellyGreen","gold","millennialLilac","millennialMint","natural","navy","navyBlue","orange","orchidGreen","orchidPink","pacificGrey","pixelLime","radiantPurple","red","royalBlue","sand","skyBlue","solarYellow","sorbet","sportGreyHeather","stoneBlue","sunsetOrange","swimmingPool","urbanKhaki","urbanOrange","urbanPurple","usedBlack","white"]
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["ashGrey","azalea","blueDusk","cardinalRed","carolinaBlue","charcoal","cherryRed","cornsilk","daisy","darkChocolate","darkHeather","gold","heliconia","iceGrey","indigoBlue","iris","irishGreen","jadeDome","lightBlue","lightPink","lime","maroon","militaryGreen","olive","orchid","pistachio","red","royal","safetyGreen","sand","sapphire","sportGrey","stoneBlue","tan","tangerine","black","orange","purple","white","forestGreen","heatherNavy","kellyGreen","natural","navy"]
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["yellow","white","turquoise","royalBlue","rosette","red","orange","navyBlue","kellyGreen","heatherGrey","black"]
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
                "Front": 3.5,
                "Back": 6,
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 2,
                "Right sleeve": 2
            },

            colors: ["azureBlue","black","burgundy","deepNavy","heatherGrey","lightGraphite","newSkyBlue","red","royalBlue","white"]
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 3,
                "Right sleeve": 3
            },

            colors: ["ashGrey","cardinalRed","carolinaBlue","charcoal","darkChocolate","darkHeather","gold","irishGreen","lightBlue","lightPink","maroon","red","royal","safetyGreen","sportGrey","black","orange","white","forestGreen","navy"]
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 3,
                "Right sleeve": 3,
            },

            colors: ["antiqueCherryRed","ashGrey","carolinaBlue","charcoal","cherryRed","darkChocolate","darkHeather","garnet","gold","graphiteHeather","heliconia","indigoBlue","irishGreen","lightBlue","lightPink","maroon","militaryGreen","red","royal","safetyGreen","sand","sapphire","sportGrey","black","orange","purple","white","forestGreen","navy"]
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 3,
                "Right sleeve": 3,
                "Hood": 4
            },

            colors: ["antiqueCherryRed","antiqueSapphire","ashGrey","azalea","carolinaBlue","charcoal","cherryRed","darkChocolate","darkHeather","garnet","gold","graphiteHeather","heliconia","indigoBlue","irishGreen","lightBlue","lightPink","maroon","militaryGreen","mintGreen","orchid","red","royal","safetyGreen","sand","sapphire","sportGrey","violet","black","orange","purple","white","forestGreen","navy"]
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
                "Front": 3.5,
                "Back": 6,
                "Left sleeve": 3,
                "Right sleeve": 3,
                "Hood": 4
            },

            colors: ["royal","sportGrey","brokenWhite","red","sand","stoneBlue","militaryGreen","navy","black"]
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

            colors: ["brightRed","chocolate","classicPink","emerald","gold","graphiteGrey","lightGrey","limeGreen","oliveGreen","sand","skyBlue","surfBlue","fuchsia","black","bottleGreen","brightRoyal","orange","purple","white","yellow","burgundy","kellyGreen","natural"]
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

            colors: ["appleGreen","aqua","doveGrey","lime","pink","red","royal","black","bottleGreen","orange","purple","white","yellow","navy"]
        }
    ],

    colors: {
        apricot: "#F4A300",
        atoll: "#1F8FA3",
        ashHeather: "#D9D9D9",
        black: "#2B2B2B",
        bottleGreen: "#2F5D3A",
        brown: "#4A3A33",
        burgundy: "#6E2C3A",
        chocolate: "#5A3A2E",
        cobaltBlue: "#2F4FA2",
        darkGrey: "#55585C",
        divaBlue: "#1C7A8C",
        fireRed: "#E1251B",
        kellyGreen: "#1F8F4E",
        gold: "#F2C200",
        millennialLilac: "#A79BCB",
        millennialMint: "#BFD9D3",
        natural: "#E9E2D6",
        navy: "#2E3440",
        navyBlue: "#2A3F7A",
        orange: "#F26A00",
        orchidGreen: "#7FA35A",
        orchidPink: "#E6A8C8",
        pacificGrey: "#BFC3C7",
        pixelLime: "#B7D430",
        radiantPurple: "#5B4A6E",
        red: "#D60C2E",
        royalBlue: "#1F4FA3",
        sand: "#D8C6A6",
        skyBlue: "#8FB6D9",
        solarYellow: "#E5E600",
        sorbet: "#d60064",
        sportGreyHeather: "#CFCFCF",
        stoneBlue: "#6F8A9B",
        sunsetOrange: "#F36C21",
        swimmingPool: "#3FA7B3",
        urbanKhaki: "#7A6A4F",
        urbanOrange: "#E85C0D",
        urbanPurple: "#5A4A63",
        usedBlack: "#3A3A3A",
        white: "#F5F5F5",
        ashGrey: "#B2BEB5",
        azalea: "#F7C6C7",
        blueDusk: "#4A6FA5",
        cardinalRed: "#C41E3A",
        carolinaBlue: "#56A0D3",
        charcoal: "#36454F",
        cherryRed: "#DE3163",
        cornsilk: "#FFF8DC",
        daisy: "#FFFF31",
        darkChocolate: "#3F2A14",
        darkHeather: "#A9A9A9",
        heliconia: "#FF3855",
        iceGrey: "#E8ECEF",
        indigoBlue: "#3F48CC",
        iris: "#5A4FCF",
        irishGreen: "#009A44",
        jadeDome: "#00A86B",
        lightBlue: "#ADD8E6",
        lightPink: "#FFB6C1",
        lime: "#00FF00",
        maroon: "#800000",
        militaryGreen: "#4B5320",
        olive: "#808000",
        orchid: "#DA70D6",
        pistachio: "#93C572",
        royal: "#4169E1",
        safetyGreen: "#00FF7F",
        sapphire: "#0F52BA",
        sportGrey: "#C0C0C0",
        tan: "#D2B48C",
        tangerine: "#F28500",
        purple: "#800080",
        forestGreen: "#228B22",
        heatherNavy: "#2A3B5F",
        yellow: "#FFFF00",
        turquoise: "#40E0D0",
        rosette: "#FF66CC",
        heatherGrey: "#B6B6B6",
        azureBlue: "#007FFF",
        deepNavy: "#00005A",
        lightGraphite: "#A8A9AD",
        newSkyBlue: "#76D7EA",
        antiqueCherryRed: "#9E1B32",
        garnet: "#733635",
        graphiteHeather: "#6E6E6E",
        mintGreen: "#98FF98",
        violet: "#8F00FF",
        brokenWhite: "#F8F8F0",
        appleGreen: "#8DB600",
        aqua: "#00FFFF",
        doveGrey: "#6D6D6D",
        pink: "#FFC0CB",
        brightRed: "#FF2400",
        classicPink: "#F4C2C2",
        emerald: "#50C878",
        graphiteGrey: "#474A51",
        lightGrey: "#D3D3D3",
        limeGreen: "#32CD32",
        oliveGreen: "#556B2F",
        surfBlue: "#00AEEF",
        fuchsia: "#FF00FF",
        brightRoyal: "#4169E1"
    }
};