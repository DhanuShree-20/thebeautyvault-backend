// backend/data/products.js
const products = [
  // ==========================
  // HAIR CARE
  // ==========================
  {
    name: "L'Oreal Professionnel Absolut Repair Shampoo",
    image: "https://tse2.mm.bing.net/th/id/OIP._Fjmt3CVg_dkzFsVJC2ZCAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Professional resurfacing shampoo for damaged hair.",
    brand: "L'Oreal",
    category: "hair-care",
    subCategory: "shampoo",
    price: 695,
    mrp: 850,
    countInStock: 20,
    rating: 4.5,
    numReviews: 1240
  },
  {
    name: "Tresemme Keratin Smooth Conditioner",
    image: "https://i.pinimg.com/1200x/26/43/86/264386b46134bb7062f4a6965d561801.jpg",
    description: "Infused with Keratin and Argan Oil for frizz-free hair.",
    brand: "Tresemme",
    category: "hair-care",
    subCategory: "conditioner",
    price: 250,
    mrp: 300,
    countInStock: 15,
    rating: 4.2,
    numReviews: 890
  },
  {
    name: "Streax Professional Vitariche Gloss Hair Serum",
    image: "https://i.pinimg.com/736x/a1/c1/9d/a1c19dfcd3becaa7bea3157056c77a3d.jpg",
    description: "Gives your hair a mirror-like shine and smoothness.",
    brand: "Streax",
    category: "hair-care",
    subCategory: "serum",
    price: 210,
    mrp: 250,
    countInStock: 40,
    rating: 4.4,
    numReviews: 2100
  },
  {
    name: "L'Oreal Paris Hyaluron Moisture Shampoo",
    image: "https://i.pinimg.com/736x/61/6b/6c/616b6c966293dac81045d4c289715917.jpg",
    description: "72H Hydrating Shampoo with Hyaluronic Acid for dehydrated hair.",
    brand: "L'Oreal",
    category: "hair-care",
    subCategory: "shampoo", //
    price: 189,
    mrp: 209,
    countInStock: 25,
    rating: 4.4,
    numReviews: 3200
  },
  {
    name: "Dove Intense Repair Conditioner",
    image: "https://i.pinimg.com/1200x/4b/b2/51/4bb25186220de346b38fc6354867775f.jpg",
    description: "Enriched with Fiber Actives to nourish and help repair damaged hair.",
    brand: "Dove",
    category: "hair-care",
    subCategory: "conditioner", //
    price: 195,
    mrp: 220,
    countInStock: 30,
    rating: 4.5,
    numReviews: 5400
  },
  {
    name: "Indulekha Bhringa Hair Oil",
    image: "https://i.pinimg.com/736x/0f/7f/53/0f7f5339095e8aee2f884ab057ec0402.jpg",
    description: "Ayurvedic Proprietary Medicine for Hair Fall and grows new hair.",
    brand: "Indulekha",
    category: "hair-care",
    subCategory: "hair-oil", //
    price: 432,
    mrp: 450,
    countInStock: 15,
    rating: 4.3,
    numReviews: 12000
  },
  {
    name: "Mamaearth Onion Hair Mask",
    image: "https://i.pinimg.com/736x/43/a8/01/43a80145cabe8478cfea99a3e1022d78.jpg",
    description: "For hair fall control with Onion Oil and Organic Bamboo Vinegar.",
    brand: "Mamaearth",
    category: "hair-care",
    subCategory: "hair-mask", //
    price: 539,
    mrp: 599,
    countInStock: 10,
    rating: 4.2,
    numReviews: 8900
  },
  {
    name: "Loreal Extraordinary Oil Serum",
    image: "https://i.pinimg.com/1200x/12/82/63/1282631dbf4e45d7289ae5a7c7c1d45c.jpg",
    description: "Multipurpose hair serum that provides shine, hydration, and frizz control.",
    brand: "L'Oreal",
    category: "hair-care",
    subCategory: "serums", //
    price: 549,
    mrp: 600,
    countInStock: 20,
    rating: 4.6,
    numReviews: 15000
  },
  // ==========================
  // SKIN CARE
  // ==========================
  {
    name: "Mamaearth Vitamin C Face Wash",
    image: "https://i.pinimg.com/1200x/a1/69/2f/a1692ffa8a8a49ed1c2ed711332dae71.jpg",
    description: "Brightens skin with the goodness of Vitamin C and Turmeric.",
    brand: "Mamaearth",
    category: "skin-care",
    subCategory: "face-wash",
    price: 249,
    mrp: 299,
    countInStock: 50,
    rating: 4.3,
    numReviews: 15000
  },
  {
    name: "Ponds Super Light Gel Moisturizer",
    image: "https://i.pinimg.com/1200x/aa/ee/c3/aaeec3004e75c021808d09b3c24010e9.jpg",
    description: "Non-sticky, lightweight water-based formula for glowing skin.",
    brand: "Ponds",
    category: "skin-care",
    subCategory: "moisturizer",
    price: 299,
    mrp: 350,
    countInStock: 25,
    rating: 4.6,
    numReviews: 12000
  },
  {
    name: "La Shield Sunscreen Gel SPF 40",
    image: "https://i.pinimg.com/1200x/18/7a/71/187a71ab2753bef9b813cea6ef7f9393.jpg",
    description: "Broad-spectrum protection against UVA and UVB rays.",
    brand: "La Shield",
    category: "skin-care",
    subCategory: "sunscreen",
    price: 790,
    mrp: 850,
    countInStock: 10,
    rating: 4.7,
    numReviews: 4500
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    image: "https://i.pinimg.com/1200x/8c/2c/fc/8c2cfce6c5eb0a7ce43f68c6d30c3122.jpg",
    description: "Hydrating face wash for sensitive skin, soap-free and fragrance-free.",
    brand: "Cetaphil",
    category: "skin-care",
    subCategory: "face-wash", //
    price: 333,
    mrp: 370,
    countInStock: 40,
    rating: 4.7,
    numReviews: 18500
  },
  {
    name: "L'Oreal Paris Glycolic Bright Serum",
    image: "https://i.pinimg.com/1200x/2d/df/72/2ddf72eeb98b2e25ad47a4826ddc047e.jpg",
    description: "Formulated with 1.0% Glycolic Acid to reduce dark spots and brighten skin.",
    brand: "L'Oreal",
    category: "skin-care",
    subCategory: "face-serums", //
    price: 442,
    mrp: 499,
    countInStock: 15,
    rating: 4.5, //
    numReviews: 1240 //
  },
  {
    name: "Simple Hydrating Moisturizer",
    image: "https://i.pinimg.com/736x/88/ca/f4/88caf460da62c7c4944859ef54d3e941.jpg",
    description: "Non-sticky, ultra-lightweight moisturizer with Hyaluronic Acid and Vitamin E.",
    brand: "Simple",
    category: "skin-care",
    subCategory: "moisturizer", //
    price: 260,
    mrp: 299,
    countInStock: 50,
    rating: 4.6,
    numReviews: 25000
  },
  {
    name: "La Shield Fisico Matte Sunscreen SPF 50",
    image: "https://i.pinimg.com/736x/2e/28/8d/2e288d5a2b0790ba99d4f64a0985bfe5.jpg",
    description: "100% physical sunscreen with Zinc Oxide, water-resistant and matte finish.",
    brand: "La Shield",
    category: "skin-care",
    subCategory: "sunscreen", //
    price: 588,
    mrp: 630,
    countInStock: 22,
    rating: 4.4,
    numReviews: 8900
  },
  {
    name: "Plum Green Tea Alcohol-Free Toner",
    image: "https://i.pinimg.com/736x/c6/ea/a3/c6eaa362d389cd3138869a6f7f103ebd.jpg",
    description: "Helps shrink pores and stop acne while giving you an antioxidant boost.",
    brand: "Plum",
    category: "skin-care",
    subCategory: "toners", //
    price: 351,
    mrp: 390,
    countInStock: 18,
    rating: 4.3,
    numReviews: 11200
  },

  // ==========================
  // BODY CARE - POPULAR TOPICS
  // ==========================
  {
    name: "Nivea Shea Smooth Body Milk",
    image: "https://i.pinimg.com/1200x/af/01/d6/af01d62eddaae59d458c32e3a2226c70.jpg",
    description: "Deep moisture serum and shea butter for 48h smoother skin.",
    brand: "Nivea",
    category: "body-care",
    subCategory: "body-lotion", //
    price: 359,
    mrp: 399,
    countInStock: 45,
    rating: 4.5,
    numReviews: 21000
  },
   {
    name: "Aveeno Daily Moisturizer",
    image: "https://i.pinimg.com/736x/12/d5/bd/12d5bd035b86e64037be033c6ac39528.jpg",
    description: "Deep moisture serum and shea butter for 48h smoother skin.",
    brand: "Aveeno",
    category: "body-care",
    subCategory: "body-lotion", //
    price: 359,
    mrp: 399,
    countInStock: 45,
    rating: 4.5,
    numReviews: 21000
  },
   {
    name: "Dove Smooth Body Milk",
    image: "https://i.pinimg.com/736x/89/01/40/8901406ca4f296154733109fbf382eb1.jpg",
    description: "Deep moisture serum and shea butter for 48h smoother skin.",
    brand: "Dove",
    category: "body-care",
    subCategory: "body-lotion", //
    price: 359,
    mrp: 399,
    countInStock: 45,
    rating: 4.5,
    numReviews: 21000
  },
  // ==========================
  // BODY CARE - SOAPS
  // ==========================
  {
    name: "Pears Soft & Fresh Bathing Bar",
    image: "https://i.pinimg.com/736x/bb/7c/cb/bb7ccbbdda8dc63e774c207f3bba4a3e.jpg",
    description: "Enriched with 98% pure glycerin and mint extracts for glowing, refreshed skin.",
    brand: "Pears",
    category: "body-care",
    subCategory: "soaps",
    price: 85,
    mrp: 95,
    countInStock: 100,
    rating: 4.3,
    numReviews: 8200
  },
  {
    name: "Dove Cream Beauty Bathing Bar",
    image: "https://i.pinimg.com/1200x/06/d6/6f/06d66f3083994e6eaf63a48cb5972464.jpg",
    description: "Contains 1/4 moisturizing cream to give you softer, smoother, and healthier-looking skin.",
    brand: "Dove",
    category: "body-care",
    subCategory: "soaps",
    price: 99,
    mrp: 115,
    countInStock: 75,
    rating: 4.7,
    numReviews: 15400
  },
  {
    name: "Fiama Gel Bar - Blackcurrant & Bearberry",
    image: "https://i.pinimg.com/736x/ab/c3/3f/abc33fe705ca00e93e0f9e5094646220.jpg",
    description: "Enriched with skin conditioners and fruit extracts for a revitalizing bathing experience.",
    brand: "Fiama",
    category: "body-care",
    subCategory: "soaps",
    price: 90,
    mrp: 100,
    countInStock: 50,
    rating: 4.5,
    numReviews: 6200
  },
  {
    name: "Mcaffeine Espresso Coffee Bathing Bar",
    image: "https://i.pinimg.com/1200x/d1/f4/56/d1f45668fe71faeb42b3aea8c59b1bf7.jpg",
    description: "pH 5.5 skin-friendly soap that deeply cleanses and tones with pure coffee extracts.",
    brand: "mCaffeine",
    category: "body-care",
    subCategory: "soaps",
    price: 189,
    mrp: 199,
    countInStock: 30,
    rating: 4.4,
    numReviews: 4500
  },
  {
    name: "Dove Deeply Nourishing Body Wash",
    image: "https://i.pinimg.com/1200x/d9/75/6a/d9756aab2facd1969b4a357669b4768f.jpg",
    description: "Nourishing body wash that gives you softer, smoother skin after just one shower.",
    brand: "Dove",
    category: "body-care",
    subCategory: "body-wash", //
    price: 425,
    mrp: 499,
    countInStock: 30,
    rating: 4.6,
    numReviews: 12500
  },
  {
    name: "mCaffeine Coffee Body Scrub",
    image: "https://i.pinimg.com/736x/b6/81/57/b68157dfe126dec1d041fd638f65234a.jpg",
    description: "Exfoliating body scrub made with pure Arabica coffee and Cold Pressed Coconut Oil.",
    brand: "mCaffeine",
    category: "body-care",
    subCategory: "body-scrub", //
    price: 445,
    mrp: 449,
    countInStock: 20,
    rating: 4.4,
    numReviews: 35000
  },
  {
    name: "Ghar Bathing Bar",
    image: "https://i.pinimg.com/736x/33/4e/ed/334eed288684e30feff0449e2300ced0.jpg",
    description: "Enriched with 98% pure glycerin and mint extracts for glowing skin.",
    brand: "Ghar",
    category: "body-care",
    subCategory: "soaps", //
    price: 85,
    mrp: 95,
    countInStock: 100,
    rating: 4.3,
    numReviews: 8200
  },

  // ==========================
  // MAKEUP
  // ==========================
  {
    name: "Maybelline New York SuperStay Matte Ink",
    image: "https://i.pinimg.com/1200x/75/72/e3/7572e395349e0f4528583abeb8f8bf6d.jpg",
    description: "Long-lasting matte liquid lipstick that lasts up to 16 hours.",
    brand: "Maybelline",
    category: "makeup",
    subCategory: "lipstick",
    price: 550,
    mrp: 699,
    countInStock: 30,
    rating: 4.5,
    numReviews: 9800
  },
  {
    name: "Lakme Absolute Skin Natural Mousse",
    image: "https://i.pinimg.com/1200x/66/4c/f2/664cf2779f882658cb8f8ba58a52d096.jpg",
    description: "SPF 8 feather-light mousse foundation.",
    brand: "Lakme",
    category: "makeup",
    subCategory: "foundation",
    price: 750,
    mrp: 850,
    countInStock: 20,
    rating: 4.2,
    numReviews: 3200
  },// ==========================
  // MAKEUP - POPULAR TOPICS
  // ==========================
  {
    name: "Lakme Absolute Matte Melt Liquid Lip Color",
    image: "https://i.pinimg.com/736x/ed/a6/1a/eda61a1830c0cdb4bc5ea5d479754df6.jpg",
    description: "Velvet matte finish that stays all day without drying your lips.",
    brand: "LAKME",
    category: "makeup",
    subCategory: "Lipstick",
    price: 450,
    mrp: 500,
    countInStock: 50,
    rating: 4.5,
    numReviews: 8200
  },
  {
    name: "Faces Canada Ultimate Pro Lip Liner",
    image: "https://i.pinimg.com/1200x/fb/d2/8e/fbd28e37c8369968d124015f9e8979fa.jpg",
    description: "Defines lips with a smooth, smudge-proof matte finish.",
    brand: "FACES CANADA",
    category: "makeup",
    subCategory: "Lipliner",
    price: 319,
    mrp: 399,
    countInStock: 25,
    rating: 4.3,
    numReviews: 1200
  },
  {
    name: "Maybelline New York Baby Lips Balm",
    image: "https://i.pinimg.com/736x/3f/a0/86/3fa086c9b737a15bac6c3e2ff3c6560d.jpg",
     description: "SPF 20 lip balm that provides 8-hour hydration and a touch of color.",
    brand: "MAYBELLINE",
    category: "makeup",
    subCategory: "lipbalm",
    price: 175,
    mrp: 199,
    countInStock: 60,
    rating: 4.6,
    numReviews: 15400
  },
  {
    name: "Maybelline New York Fit Me Foundation",
    image: "https://i.pinimg.com/736x/5d/84/2e/5d842e91f882dbbaaa6139c886ee7118.jpg",
    description: "Matte + Poreless foundation for normal to oily skin.",
    brand: "MAYBELLINE",
    category: "makeup",
    subCategory: "Foundation",
    price: 539,
    mrp: 599,
    countInStock: 35,
    rating: 4.4,
    numReviews: 25000
  },
  {
    name: "Lakme Sun Expert Compact SPF 40",
    image: "https://i.pinimg.com/1200x/95/cf/62/95cf628311a89b6443cfff57b6bc0ee1.jpg",
    description: "Non-sticky, matte sun protection compact for an even-tone skin.",
    brand: "LAKME",
    category: "makeup",
    subCategory: "compact",
    price: 235,
    mrp: 260,
    countInStock: 45,
    rating: 4.2,
    numReviews: 9800
  },
  {
    name: "Faces Canada Ultime Pro Eye Shadow Palette",
    image: "https://i.pinimg.com/1200x/e9/2f/04/e92f0424a8c7105d78f9e838ec906451.jpg",
    description: "10 highly pigmented shades ranging from matte to shimmer.",
    brand: "FACES CANADA",
    category: "makeup",
    subCategory: "color Palette",
    price: 749,
    mrp: 899,
    countInStock: 15,
    rating: 4.5,
    numReviews: 3100
  },
  {
    name: "Maybelline New York Hypercurl Mascara",
    image: "https://i.pinimg.com/736x/b8/27/b6/b827b69919aad9df3474c4c655519e69.jpg",
    description: "Waterproof formula that keeps curls in place for 18 hours.",
    brand: "MAYBELLINE",
    category: "makeup",
    subCategory: "Mascara",
    price: 395,
    mrp: 450,
    countInStock: 20,
    rating: 4.6,
    numReviews: 21000
  },
  {
    name: "Lakme Absolute Shine Liquid Eyeliner",
    image: "https://i.pinimg.com/1200x/73/4d/2d/734d2d288371151b123378d546987274.jpg",
    description: "Rich, intense color in a single stroke that lasts long.",
    brand: "LAKME",
    category: "makeup",
    subCategory: "Eyeliner",
    price: 224,
    mrp: 249,
    countInStock: 40,
    rating: 4.3,
    numReviews: 5600
  },
  {
    name: "Faces Canada Magneteyes Kajal",
    image: "https://i.pinimg.com/736x/b4/0c/69/b40c69c5fc98e6506d495868a913c7fa.jpg",
    description: "24-hour smudge-proof and waterproof deep black kajal.",
    brand: "FACES CANADA",
    category: "makeup",
    subCategory: "Kajal",
    price: 161,
    mrp: 179,
    countInStock: 100,
    rating: 4.4,
    numReviews: 32000
  },
  {
    name: "Lakme Absolute Blur Perfect Primer",
    image: "https://i.pinimg.com/1200x/cb/31/0e/cb310ea7257dfa1c773e73c8cbb9889a.jpg",
    description: "The perfect start for a flawless, professional makeup finish.",
    brand: "LAKME",
    category: "makeup",
    subCategory: "Primer",
    price: 585,
    mrp: 650,
    countInStock: 20,
    rating: 4.5,
    numReviews: 12500
  },
  {
    name: "Faces Canada Magneteyes Kajal",
    image: "https://i.pinimg.com/736x/35/3a/76/353a76d14305ee2d0c8accd17269a489.jpg",
    description: "Deep black, waterproof kajal for a bold look.",
    brand: "Faces Canada",
    category: "makeup",
    subCategory: "kajal",
    price: 179,
    mrp: 199,
    countInStock: 100,
    rating: 4.4,
    numReviews: 18000
  },

  // ==========================
  // PERSONAL CARE (BODY CARE/PEDICURE)
  // ==========================
  // ==========================
  // PEDICURE - POPULAR TOPICS
  // ==========================
  {
    name: "Dr. Foot Foot Repair Cream",
    image: "https://i.pinimg.com/736x/ba/47/a9/ba47a9a39430a3b6e4c970465f91046a.jpg",
    description: "Intense hydration for cracked heels and dry feet with Urea and Salicylic Acid.",
    brand: "DR. FOOT",
    category: "body-care",
    subCategory: "foot-cream",
    price: 349,
    mrp: 399,
    countInStock: 25,
    rating: 4.5,
    numReviews: 3200
  },
  {
    name: "Dr. Foot Deep Exfoliating Foot Scrub",
    image: "https://m.media-amazon.com/images/I/71YLgZk5OeL._SL1500_.jpg",
    description: "Removes dead skin and refreshes tired feet with Peppermint and Tea Tree Oil.",
    brand: "DR. FOOT",
    category: "body-care",
    subCategory: "foot-scrub",
    price: 299,
    mrp: 350,
    countInStock: 15,
    rating: 4.4,
    numReviews: 1800
  },
  {
    name: "Dr. Foot 10-in-1 Pedicure Kit",
    image: "https://m.media-amazon.com/images/I/71XmSVNENrL._SX679_.jpg",
    description: "Complete professional tool set including foot rasp, cuticle remover, and callus scraper.",
    brand: "DR. FOOT",
    category: "pedicure",
    subCategory: "tools-&-kits",
    price: 599,
    mrp: 799,
    countInStock: 10,
    rating: 4.6,
    numReviews: 950
  },
  {
    name: "Fresh Body Milk Nourishing Lotion",
    image: "https://i.pinimg.com/1200x/3a/32/50/3a3250b9534be520cc45c2bc9d4c2247.jpg",
    description: "Deep moisture serum for 48-hour smooth skin.",
    brand: "Fresh",
    category: "body-care",
    subCategory: "body-lotion",
    price: 399,
    mrp: 499,
    countInStock: 15,
    rating: 4.5,
    numReviews: 7600
  },
  {
    name: "Dr. Foot 5 in 1 Pedicure Kit",
    image: "https://m.media-amazon.com/images/I/613JezcRbAL._SX679_.jpg",
    description: "Complete professional pedicure tools for home use.",
    brand: "Dr. Foot",
    category: "pedicure",
    subCategory: "tools-and-kits",
    price: 899,
    mrp: 1200,
    countInStock: 5,
    rating: 4.2,
    numReviews: 450
  },
  {
    name: "Minimalist 10% Niacinamide Face Serum",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    description: "Pure Niacinamide serum for acne marks and oil control.",
    brand: "Minimalist",
    category: "skin-care",
    subCategory: "face-serums",
    price: 599,
    mrp: 650,
    countInStock: 50,
    rating: 4.8,
    numReviews: 2500
  },
  {
    name: "The Ordinary Peeling Solution AHA 30% + BHA 2%",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    description: "Advanced exfoliating solution for skin radiance.",
    brand: "The Ordinary",
    category: "skin-care",
    subCategory: "face-serums",
    price: 750,
    mrp: 900,
    countInStock: 15,
    rating: 4.9,
    numReviews: 5400
  },
  {
    name: "DermDoc 2% Salicylic Acid Face Wash",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    description: "Clinical deep cleansing for acne-prone skin.",
    brand: "DermDoc",
    category: "skin-care",
    subCategory: "face-wash",
    price: 249,
    mrp: 350,
    countInStock: 100,
    rating: 4.3,
    numReviews: 890
  },
  {
    name: "Maybelline SuperStay Matte Ink Lipstick",
    image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=800&q=80",
    description: "16-hour saturated liquid matte lip color.",
    brand: "Maybelline",
    category: "makeup",
    subCategory: "lipstick",
    price: 499,
    mrp: 699,
    countInStock: 45,
    rating: 4.6,
    numReviews: 12000
  },
  {
    name: "Revolution Forever Flawless Palette",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    description: "18 pigment-rich matte and shimmer eyeshadows.",
    brand: "Revolution",
    category: "makeup",
    subCategory: "colorPalette",
    price: 1250,
    mrp: 1500,
    countInStock: 12,
    rating: 4.7,
    numReviews: 450
  },
  {
    name: "Lakme Absolute Skin Natural Mousse",
    image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
    description: "Feather-light finish foundation with SPF 8.",
    brand: "Lakme",
    category: "makeup",
    subCategory: "foundation",
    price: 825,
    mrp: 825,
    countInStock: 30,
    rating: 4.4,
    numReviews: 3100
  },
  {
    name: "Dove Deeply Nourishing Body Wash",
    image: "https://images.unsplash.com/photo-1559567501-43823b20731c?auto=format&fit=crop&w=800&q=80",
    description: "Gives you softer, smoother skin after just one shower.",
    brand: "Dove",
    category: "body-care",
    subCategory: "body-wash",
    price: 425,
    mrp: 500,
    countInStock: 40,
    rating: 4.6,
    numReviews: 1500
  },
  {
    name: "L'Oreal Paris Extraordinary Oil Serum",
    image: "https://images.unsplash.com/photo-1527799822344-429dfa8a0fa9?auto=format&fit=crop&w=800&q=80",
    description: "Multipurpose hair serum that provides hydration and shine.",
    brand: "L'Oreal",
    category: "hair-care",
    subCategory: "serums",
    price: 549,
    mrp: 600,
    countInStock: 25,
    rating: 4.6,
    numReviews: 15000
  },
  {
    name: "Good Vibes Rosemary Hair Growth Oil",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80",
    description: "100% natural cold-pressed oil for hair strengthening.",
    brand: "Good Vibes",
    category: "hair-care",
    subCategory: "hair-oil",
    price: 299,
    mrp: 350,
    countInStock: 40,
    rating: 4.5,
    numReviews: 2100
  },
  {
    name: "Lamel Hope Lip Oil",
    image: "https://images.unsplash.com/photo-1625093748300-24c0d85f0a9a?auto=format&fit=crop&w=800&q=80",
    description: "Non-sticky nourishing lip oil with a glossy finish.",
    brand: "Lamel",
    category: "makeup",
    subCategory: "lipbalm",
    price: 350,
    mrp: 450,
    countInStock: 18,
    rating: 4.7,
    numReviews: 530
  },
  {
    name: "L.A. Girl HD Pro Conceal",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    description: "Crease-resistant, opaque coverage in a creamy yet lightweight texture.",
    brand: "L.A Girl",
    category: "makeup",
    subCategory: "Foundation",
    price: 595,
    mrp: 695,
    countInStock: 60,
    rating: 4.8,
    numReviews: 8900
  },
  {
    name: "Elle 18 Color Pop Matte Lipstick",
    image: "https://images.unsplash.com/photo-1591360236480-9c6a4cb3a6de?auto=format&fit=crop&w=800&q=80",
    description: "Bold matte colors with a long-lasting, smooth finish.",
    brand: "Elle 18",
    category: "makeup",
    subCategory: "lipstick",
    price: 110,
    mrp: 125,
    countInStock: 100,
    rating: 4.2,
    numReviews: 15000
  },
  {
    name: "Minimalist Sunscreen SPF 50 Multi-Vitamin",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
    description: "Broad-spectrum SPF 50 with Vitamins A, B, E, and F.",
    brand: "Minimalist",
    category: "skin-care",
    subCategory: "Sunscreen",
    price: 399,
    mrp: 399,
    countInStock: 35,
    rating: 4.9,
    numReviews: 4200
  },
  {
    name: "Vela Foot Repair Cream with Urea",
    image: "https://images.unsplash.com/photo-1519415510236-85592ada580e?auto=format&fit=crop&w=800&q=80",
    description: "Deeply moisturizing cream for cracked heels and dry feet.",
    brand: "Vela",
    category: "Pedicure",
    subCategory: "Foot Cream",
    price: 180,
    mrp: 250,
    countInStock: 15,
    rating: 4.4,
    numReviews: 210
  },
  {
    name: "Ruby Blood Glow Boosting Essence",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
    description: "Infused with red algae for deep hydration and a glass-skin finish.",
    brand: "Ruby Blood",
    category: "skin-care",
    subCategory: "Face Serums",
    price: 899,
    mrp: 1200,
    countInStock: 15,
    rating: 4.7,
    numReviews: 320
  },
  {
    name: "Petunia Skin Revitalizing Toner",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    description: "Alcohol-free botanical toner to balance and prep skin.",
    brand: "Petunia",
    category: "skin-care",
    subCategory: "Toners",
    price: 450,
    mrp: 550,
    countInStock: 22,
    rating: 4.5,
    numReviews: 180
  },
  {
    name: "Lamel Smart Skin Compact Powder",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-fine blurring powder for a velvet-matte finish.",
    brand: "Lamel",
    category: "makeup",
    subCategory: "compact",
    price: 425,
    mrp: 600,
    countInStock: 30,
    rating: 4.4,
    numReviews: 640
  },
  {
    name: "Elle 18 Eye Drama Kajal - Bold Black",
    image: "https://images.unsplash.com/photo-1620917670397-dc7bc45e6976?auto=format&fit=crop&w=800&q=80",
    description: "Smudge-proof and water-proof intense black kajal.",
    brand: "Elle 18",
    category: "makeup",
    subCategory: "Kajal",
    price: 95,
    mrp: 100,
    countInStock: 150,
    rating: 4.1,
    numReviews: 8500
  },
  {
    name: "Vela Professional Hair Mask",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
    description: "Deep conditioning therapy for chemically treated hair.",
    brand: "Vela",
    category: "Hair Care",
    subCategory: "Hair Mask",
    price: 750,
    mrp: 950,
    countInStock: 12,
    rating: 4.8,
    numReviews: 140
  }

];

module.exports = products;