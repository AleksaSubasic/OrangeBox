// Database
var categoriesArr = [
    {cId: 1, cName: "Headphones", cImage: "assets/img/SVG/headphones-category.svg"},
    {cId: 2, cName: "Speakers", cImage: "assets/img/SVG/speakers-category.svg"},
    {cId: 3, cName: "Gadgets", cImage: "assets/img/SVG/gadgets-category.svg"},
    {cId: 4, cName: "Gaming", cImage: "assets/img/SVG/gaming-category.svg"},
    {cId: 5, cName: "Computers", cImage: "assets/img/SVG/computers-category.svg"},
    {cId: 6, cName: "Components", cImage: "assets/img/SVG/components-category.svg"},
    {cId: 7, cName: "Tablets", cImage: "assets/img/SVG/tablets-category.svg"},
    {cId: 8, cName: "Television", cImage: "assets/img/SVG/television-category.svg"}
]
var productsArr = [
    {pId: 1, pName: "iMac 24\"", pImage: "assets/img/computer-1.png", pPrice: "1299.99", pCategory: "Computers", pDesc: "Mac is powerful, capable, and packed with everything you need to bring your work to the next level. Take your productivity and creativity further with apps for anything you can imagine."},
    {pId: 2, pName: "Acer Aspire 3", pImage: "assets/img/computer-2.png", pPrice: "199.99", pCategory: "Computers", pDesc: "Whatever the stage of your computing journey, we've got you covered. Find an Aspire that gives you a personalized, productive experience."},
    {pId: 3, pName: "Asus ROG G73", pImage: "assets/img/computer-3.png", pPrice: "999.99", pCategory: "Computers", pDesc: "Asus is making a completely fresh start with the G73, a new design, matt surfaces, an improved cooling system, all go to make up this 17.3-inch gaming hot-shot."},
    {pId: 4, pName: "MacBook Pro 15\"", pImage: "assets/img/computer-4.png", pPrice: "1399.99", pCategory: "Computers", pDesc: "Easy to learn. Astoundingly powerful. Battery life beyond belief. MacBook is designed to let you work, play, and create in ways you never imagined."},
    {pId: 5, pName: "Toshiba NB15T", pImage: "assets/img/computer-5.png", pPrice: "399.99", pCategory: "Computers", pDesc: "The Toshiba NB15T offers a lot for an affordable price. It easily better than a web-reliant Chromebook, with some of the power you'd expect from a larger laptop."},
    {pId: 6, pName: "Lenovo E490", pImage: "assets/img/computer-6.png", pPrice: "699.99", pCategory: "Computers", pDesc: "The ThinkPad E490 scores with a quiet or silent operation, very good input devices, simple maintenance options, and a long battery life."},
    {pId: 7, pName: "New Nintendo 3DS XL", pImage: "assets/img/console-1.png", pPrice: "199.99", pCategory: "Gaming", pDesc: "New Nintendo 3DS XL offers new customisation options, new speed, new controls, new 3D viewing and a whole new experience!"},
    {pId: 8, pName: "Nintendo Switch", pImage: "assets/img/console-2.png", pPrice: "299.99", pCategory: "Gaming", pDesc: "The Nintendo Switch is a hybrid video game console developed by Nintendo, it's designed to fit your life, transforming from home console to portable system in a snap."},
    {pId: 9, pName: "Playstation 4 Pro", pImage: "assets/img/console-3.png", pPrice: "499.99", pCategory: "Gaming", pDesc: "Play the latest PS4 blockbuster games and PlayStation exclusives in stunning 4K from the PS4 Pro console on your 4K TV, and stream your favourite entertainment."},
    {pId: 10, pName: "Xbox One S", pImage: "assets/img/console-4.png", pPrice: "249.99", pCategory: "Gaming", pDesc: "Play the biggest blockbusters, most popular franchises, and Xbox classics from three generations of favorites that you can play again or experience for the first time."},
    {pId: 11, pName: "Deepcool GTE V2", pImage: "assets/img/cooler-1.png", pPrice: "29.99", pCategory: "Components", pDesc: "120mm PWM fan with upgraded performance, including new copper pipes that improve heat transfer and dissipation efficiency and RGB lighting."},
    {pId: 12, pName: "Cooler Master T400", pImage: "assets/img/cooler-2.png", pPrice: "69.99", pCategory: "Components", pDesc: "Cooler Master Blizzard T400 Pro providing the best balance between airflow and static pressure to take the heat away. Compatible with Intel and AMD platforms."},
    {pId: 13, pName: "Cooler Master T400i", pImage: "assets/img/cooler-3.png", pPrice: "49.99", pCategory: "Components", pDesc: "Cooler Master Blizzard T400i provides a great balance of performance and noise levels. Universal Mounting For Intel Platforms."},
    {pId: 14, pName: "X DREAM P115", pImage: "assets/img/cooler-4.png", pPrice: "29.99", pCategory: "Components", pDesc: "Low profile aluminum extrusion fin with only 48.8mm/1.93 in height. Cross shaped design centralizes airflow for heat dissipation."},
    {pId: 15, pName: "Intel Xeon E5640", pImage: "assets/img/cpu-1.png", pPrice: "199.99", pCategory: "Components", pDesc: "This Intel Xeon CPU comes with DDR3 memory, 4 cores and 8 threads, 12MB cache, 2.66 GHz of base frequency, TDP of 80W."},
    {pId: 16, pName: "Intel Core i3-12100F", pImage: "assets/img/cpu-2.png", pPrice: "144.99", pCategory: "Components", pDesc: "The new processor architecture is also compatible with the latest platform innovations, giving you performance improvements throughout your PC."},
    {pId: 17, pName: "Ryzen 5 3600", pImage: "assets/img/cpu-3.png", pPrice: "189.99", pCategory: "Components", pDesc: "AMD Ryzen 3000 Series processors power demanding games, immersive experiences and demanding multithreaded tasks like 3D and video rendering, and software compiling."},
    {pId: 18, pName: "HyperX Pro 32GB", pImage: "assets/img/ram-1.png", pPrice: "129.99", pCategory: "Components", pDesc: "Aluminum heat spreader. Intel XMP 2.0 (automatic overclocking). Optimized for Intel 100, 200 series and X99 chipsets."},
    {pId: 19, pName: "Green House S1 4GB", pImage: "assets/img/ram-2.png", pPrice: "24.99", pCategory: "Components", pDesc: "The Green House S1 series memory kits were hand tested for quality assurance and seamless compatibility with Intel's DDR3 compatible processors and chipsets."},
    {pId: 20, pName: "Fury HyperX 16GB", pImage: "assets/img/ram-3.png", pPrice: "98.99", pCategory: "Components", pDesc: "HyperX FURY DDR4 memory automatically overclocks, plug-and-play functionality that gets you in the game faster and instant top-level performance that helps you win it."},
    {pId: 21, pName: "Kingston 8GB", pImage: "assets/img/ram-4.png", pPrice: "29.99", pCategory: "Components", pDesc: "The Kingston K1 series memory kits were hand tested for quality assurance and seamless compatibility with Intel's DDR3 compatible processors and chipsets."},
    {pId: 22, pName: "AMD RX580 (MSI)", pImage: "assets/img/gpu-1.png", pPrice: "239.99", pCategory: "Components", pDesc: "The 4th generation GCN architecture is engineered for gamers who play anything from the latest MOBA's to the most popular AAA titles."},
    {pId: 23, pName: "GTX 1660 Super (MSI)", pImage: "assets/img/gpu-2.png", pPrice: "239.99", pCategory: "Components", pDesc: "Gaming performance and power efficiency reach new heights with this video card by MSI. It's built using the all-new NVIDIA Turing shaders."},
    {pId: 24, pName: "GTX 1080 (Gigabyte)", pImage: "assets/img/gpu-3.png", pPrice: "399.99", pCategory: "Components", pDesc: "GIGABYTE G1 Gaming Series graphics cards are crafted for perfection in pursuit of the ultimate graphics experience for gaming enthusiasts."},
    {pId: 25, pName: "Nvidia Titan V", pImage: "assets/img/gpu-4.png", pPrice: "2999.99", pCategory: "Components", pDesc: "NVIDIA TITAN V is the most powerful Volta-based graphics card ever created for the PC. NVIDIA's supercomputing GPU architecture is now here."},
    {pId: 26, pName: "WD 500GB", pImage: "assets/img/hdd-1.png", pPrice: "39.99", pCategory: "Components", pDesc: "Built to WD's high standards of quality and reliability, WD Blue mobile hard drives offer the features that are ideal for your everyday mobile computing needs."},
    {pId: 27, pName: "Seagate 1TB", pImage: "assets/img/hdd-2.png", pPrice: "89.99", pCategory: "Components", pDesc: "Seagate has dominated the data storage industry for 40 years. They crafted Barracuda Desktop and Barracuda Laptop hard drives to help you achieve your goals."},
    {pId: 28, pName: "WD 3TB", pImage: "assets/img/hdd-3.png", pPrice: "149.99", pCategory: "Components", pDesc: "Built to WD's high standards of quality and reliability, WD Blue mobile hard drives offer the features that are ideal for your everyday mobile computing needs."},
    {pId: 29, pName: "Corsair 120GB SSD", pImage: "assets/img/ssd-1.png", pPrice: "89.99", pCategory: "Components", pDesc: "Great for the latest high-performance PCs. Force Series 3 SSDs have even quicker read and write than ever before."},
    {pId: 30, pName: "Samsung 2TB SSD", pImage: "assets/img/ssd-2.png", pPrice: "399.99", pCategory: "Components", pDesc: "Samsung announced the introduction of the Samsung 950 PRO SSD, designed to meet the demands of high-performance consumer and business laptops and PCs."},
    {pId: 31, pName: "Kingston 512GB SSD", pImage: "assets/img/ssd-3.png", pPrice: "149.99", pCategory: "Components", pDesc: "Kingston's SSD dramatically improves the responsiveness of your existing system with incredible boot, loading and transfer times compared to mechanical hard drives."},
    {pId: 32, pName: "Crucial 128GB SSD", pImage: "assets/img/ssd-4.png", pPrice: "69.99", pCategory: "Components", pDesc: "Make long wait times a thing of the past by loading apps in seconds, booting up almost instantly, and accelerating nearly everything on your computer."},
    {pId: 33, pName: "Pioneer HDJ-1500S", pImage: "assets/img/headphones-1.png", pPrice: "129.99", pCategory: "Headphones", pDesc: "Take your performances to the next level with these Pioneer HDJ-1500-S DJ headphones that feature a sound-isolating design to help prevent background noise distractions."},
    {pId: 34, pName: "Sony WH-1000MX4", pImage: "assets/img/headphones-2.png", pPrice: "349.99", pCategory: "Headphones", pDesc: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hours battery life."},
    {pId: 35, pName: "Sony NWZ-WH505", pImage: "assets/img/headphones-3.png", pPrice: "239.99", pCategory: "Headphones", pDesc: "Headphones with 30mm drivers, built-in 16GB MP3 Player, surround sound speakers and sound enhancement modes. Next-level music with Edge-AI."},
    {pId: 36, pName: "Airpods 2nd Gen", pImage: "assets/img/headphones-4.png", pPrice: "129.99", pCategory: "Headphones", pDesc: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience."},
    {pId: 37, pName: "Jabra Halo Fusion", pImage: "assets/img/headphones-5.png", pPrice: "49.99", pCategory: "Headphones", pDesc: "Engineered for calls and music like never before. Fully adjustable Jabra Advanced Active Noise-Cancellation in a compact true wireless design."},
    {pId: 38, pName: "Mackie CR5BT", pImage: "assets/img/speakers-1.png", pPrice: "234.99", pCategory: "Speakers", pDesc: "Designed for multimedia creation and entertainment, these Mackie Creative Reference SRSCR4 studio monitors feature a high-frequency waveguide for crystal-clear sound."},
    {pId: 39, pName: "JBL Extreme", pImage: "assets/img/speakers-2.png", pPrice: "159.99", pCategory: "Speakers", pDesc: "Wirelessly connect up to 3 smartphones or tablets to the speaker and take turns playing earth-shaking, powerful stereo sound."},
    {pId: 40, pName: "Logitech Z323", pImage: "assets/img/speakers-3.png", pPrice: "249.99", pCategory: "Speakers", pDesc: "Immersive Logitech 360-degree sound for crystal-clear, room-filling audio. Ported, down-firing subwoofer delivers deep, rich bass."},
    {pId: 41, pName: "Amazon Tap", pImage: "assets/img/speakers-4.png", pPrice: "149.99", pCategory: "Speakers", pDesc: "Just tap and ask for music from Amazon Music, Spotify, Pandora, iHeartRadio, and TuneIn. Enable hands-free mode to control music and more from a distance."},
    {pId: 42, pName: "Logitech Z200", pImage: "assets/img/speakers-5.png", pPrice: "69.99", pCategory: "Speakers", pDesc: "Enrich your music and movie experience with room-filling sound and adjustable bass. Simple controls allow you to access everything on the right speaker."},
    {pId: 43, pName: "Razer Edge Pro", pImage: "assets/img/tablet-1.png", pPrice: "249.99", pCategory: "Tablets", pDesc: "Razer Edge Pro Gaming Tablet: Built for the hardcore gamer on the go, this powerful tablet is capable of running your favorite PC games."},
    {pId: 44, pName: "Z-Tab S", pImage: "assets/img/tablet-2.png", pPrice: "129.99", pCategory: "Tablets", pDesc: "The Sony Z-Tab S tablet has 10.1-inch FHD display and is IP67 certified. Its other features include 64-bit octa-core processor, 16GB of internal storage."},
    {pId: 45, pName: "Sony Xperia Z4", pImage: "assets/img/tablet-3.png", pPrice: "249.99", pCategory: "Tablets", pDesc: "The Sony Xperia Z4 tablet has 10.1-inch QHD display and is IP68 certified. Its other features include 64-bit octa-core processor, 32GB of internal storage."},
    {pId: 46, pName: "Asus Transformer", pImage: "assets/img/tablet-4.png", pPrice: "399.99", pCategory: "Tablets", pDesc: "Stay connected on the go with this Asus Transformer Pad Infinity TF700T-C1-GR tablet that features built-in wireless networking and an Android 4.0 Ice Cream Sandwich."},
    {pId: 47, pName: "Samsung QLED 85\"", pImage: "assets/img/tv-1.png", pPrice: "2599.99", pCategory: "Television", pDesc: "Quantum Dot technology has the finest image so far. With 100% color volume, QT transforms light into stunning colors that stay true in all possible lighting conditions."},
    {pId: 48, pName: "LG Z2668B 50\"", pImage: "assets/img/tv-2.png", pPrice: "3499.99", pCategory: "Television", pDesc: "The Pure Colors feature brings a stunning picture in Real 4K resolution to NanoCell TVs. With around 8 million pixels, a real 4K TV provides an image that is sharper and more detailed."},
    {pId: 49, pName: "Sony 4K 60\"", pImage: "assets/img/tv-3.png", pPrice: "1299.99", pCategory: "Television", pDesc: "Experience stunning picture quality - from Blu-ray Discs and regular TV broadcasts to web videos and smartphone clips."},
    {pId: 50, pName: "Apple Watch SE", pImage: "assets/img/gadget-1.png", pPrice: "249.99", pCategory: "Gadgets", pDesc: "Apple Watch can do what your other devices can't because it's on your wrist. Move. Exercise. Stand. Track all the ways you're active."},
    {pId: 51, pName: "Microsoft Band 2", pImage: "assets/img/gadget-2.png", pPrice: "199.99", pCategory: "Gadgets", pDesc: "The Microsoft Band is primarily a sensor-packed health device, but the inclusion of smartphone notifications and other services makes it more of a hybrid offering."},
    {pId: 52, pName: "Apple Watch 7", pImage: "assets/img/gadget-3.png", pPrice: "499.99", pCategory: "Gadgets", pDesc: "Apple Watch can do what your other devices can't because it's on your wrist. Move. Exercise. Stand. Track all the ways you're active."}
];
var newProductsArr = productsArr.filter((prod, index) => {
    if(index % 2 == 0) return prod;
});
var bestSellerArr = productsArr.filter((prod, index) => {
    if(index % 2 != 0) return prod;
});