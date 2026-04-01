// === LISTAS DE MODELOS POR MARCA ===
const modelosApple = [
  "iPhone 6s","iPhone 6s Plus",
  "iPhone 7","iPhone 7 Plus",
  "iPhone 8","iPhone 8 Plus",
  "iPhone X","iPhone XS","iPhone XS Max","iPhone XR",
  "iPhone SE (1ª geração, 2016)","iPhone SE (2ª geração, 2020)","iPhone SE (3ª geração, 2022)",
  "iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
  "iPhone 12 mini","iPhone 12","iPhone 12 Pro","iPhone 12 Pro Max",
  "iPhone 13 mini","iPhone 13","iPhone 13 Pro","iPhone 13 Pro Max",
  "iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max",
  "iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max",
  "iPhone 16","iPhone 16 Plus","iPhone 16 Pro","iPhone 16 Pro Max","iPhone 16e",
  "iPhone 17","iPhone 17 Plus","iPhone 17 Air","iPhone 17 Pro","iPhone 17 Pro Max"
];

const modelosSamsung = [
  // Linha S
  "Galaxy S10","Galaxy S10+","Galaxy S10e","Galaxy S10 Lite",
  "Galaxy S20","Galaxy S20+","Galaxy S20 Ultra","Galaxy S20 FE",
  "Galaxy S21","Galaxy S21+","Galaxy S21 Ultra","Galaxy S21 FE",
  "Galaxy S22","Galaxy S22+","Galaxy S22 Ultra",
  "Galaxy S23","Galaxy S23+","Galaxy S23 Ultra","Galaxy S23 FE",
  "Galaxy S24","Galaxy S24+","Galaxy S24 Ultra","Galaxy S24 FE",
  "Galaxy S25","Galaxy S25+","Galaxy S25 Ultra","Galaxy S25 Edge",
  // Linha A
  "Galaxy A01","Galaxy A02","Galaxy A02s",
  "Galaxy A03","Galaxy A03 Core","Galaxy A03s",
  "Galaxy A04","Galaxy A04e","Galaxy A04s",
  "Galaxy A05","Galaxy A05s",
  "Galaxy A06","Galaxy A06s",
  "Galaxy A07","Galaxy A07s",
  "Galaxy A10","Galaxy A10s","Galaxy A10e",
  "Galaxy A11","Galaxy A12","Galaxy A12 Nacho",
  "Galaxy A13","Galaxy A13 5G",
  "Galaxy A14","Galaxy A14 5G",
  "Galaxy A15","Galaxy A15 5G",
  "Galaxy A16","Galaxy A16 5G",
  "Galaxy A20","Galaxy A20s","Galaxy A20e",
  "Galaxy A21","Galaxy A21s",
  "Galaxy A22","Galaxy A22 5G",
  "Galaxy A23","Galaxy A23 5G",
  "Galaxy A24","Galaxy A25","Galaxy A25 5G","Galaxy A26",
  "Galaxy A30","Galaxy A30s",
  "Galaxy A31","Galaxy A32","Galaxy A32 5G",
  "Galaxy A33","Galaxy A34","Galaxy A35","Galaxy A36",
  "Galaxy A40","Galaxy A41",
  "Galaxy A50","Galaxy A50s",
  "Galaxy A51","Galaxy A52","Galaxy A52s",
  "Galaxy A53","Galaxy A54","Galaxy A55","Galaxy A56",
  "Galaxy A70","Galaxy A70s",
  "Galaxy A71","Galaxy A72","Galaxy A73",
  "Galaxy A80","Galaxy A90 5G",
  // Linha M
  "Galaxy M01","Galaxy M02","Galaxy M02s",
  "Galaxy M11","Galaxy M12","Galaxy M13","Galaxy M14","Galaxy M15","Galaxy M15 5G",
  "Galaxy M21","Galaxy M22","Galaxy M23","Galaxy M23 5G",
  "Galaxy M31","Galaxy M31s","Galaxy M32","Galaxy M33","Galaxy M34","Galaxy M35","Galaxy M36",
  "Galaxy M42","Galaxy M51","Galaxy M52","Galaxy M53","Galaxy M54","Galaxy M55",
  // Linha F
  "Galaxy F02s","Galaxy F12","Galaxy F13","Galaxy F14","Galaxy F15",
  "Galaxy F22","Galaxy F23","Galaxy F34","Galaxy F41","Galaxy F42","Galaxy F54","Galaxy F55",
  // Linha Z
  "Galaxy Z Flip 3","Galaxy Z Flip 4","Galaxy Z Flip 5","Galaxy Z Flip 6","Galaxy Z Flip 7",
  "Galaxy Z Fold 3","Galaxy Z Fold 4","Galaxy Z Fold 5","Galaxy Z Fold 6","Galaxy Z Fold 7",
  // Linha Tab
  "Galaxy Tab A7","Galaxy Tab A7 Lite","Galaxy Tab A8","Galaxy Tab A9","Galaxy Tab A9+",
  "Galaxy Tab S6 Lite","Galaxy Tab S7","Galaxy Tab S7+",
  "Galaxy Tab S8","Galaxy Tab S8+","Galaxy Tab S8 Ultra",
  "Galaxy Tab S9","Galaxy Tab S9+","Galaxy Tab S9 Ultra","Galaxy Tab S9 FE",
  "Galaxy Tab S10","Galaxy Tab S10+","Galaxy Tab S10 Ultra","Galaxy Tab S10 FE"
];

const modelosXiaomi = [
  "Xiaomi 9","Xiaomi 9T","Xiaomi 9T Pro",
  "Xiaomi 10","Xiaomi 10 Pro","Xiaomi 10 Lite","Xiaomi 10T","Xiaomi 10T Pro","Xiaomi 10T Lite",
  "Xiaomi 11","Xiaomi 11 Lite","Xiaomi 11 Lite NE","Xiaomi 11T","Xiaomi 11T Pro","Xiaomi 11 Ultra",
  "Xiaomi 12","Xiaomi 12 Pro","Xiaomi 12 Lite","Xiaomi 12T","Xiaomi 12T Pro","Xiaomi 12 Ultra",
  "Xiaomi 13","Xiaomi 13 Pro","Xiaomi 13 Lite","Xiaomi 13T","Xiaomi 13T Pro","Xiaomi 13 Ultra","Xiaomi 13C",
  "Xiaomi 14","Xiaomi 14 Pro","Xiaomi 14 Ultra","Xiaomi 14T","Xiaomi 14T Pro","Xiaomi 14 Civi","Xiaomi 14C",
  "Xiaomi 15","Xiaomi 15 Pro","Xiaomi 15 Ultra","Xiaomi 15C",
  "Xiaomi Mix Fold 3","Xiaomi Mix Fold 4","Xiaomi Mix Fold 5",
  "Xiaomi Mix Flip","Xiaomi Pad 6","Xiaomi Pad 6 Pro"
];

const modelosRedmi = [
  "Redmi 8","Redmi 8A","Redmi 8A Pro",
  "Redmi 9","Redmi 9A","Redmi 9A Sport","Redmi 9C","Redmi 9C NFC","Redmi 9T","Redmi 9 Prime",
  "Redmi 10","Redmi 10A","Redmi 10A Sport","Redmi 10C","Redmi 10 5G","Redmi 10 Prime","Redmi 10 Prime+",
  "Redmi 12","Redmi 12 5G","Redmi 12C","Redmi 12 Prime",
  "Redmi 13","Redmi 13C","Redmi 13 5G","Redmi 13C 5G",
  "Redmi 14C","Redmi 14C 5G",
  "Redmi Note 8","Redmi Note 8 Pro","Redmi Note 8T",
  "Redmi Note 9","Redmi Note 9 Pro","Redmi Note 9 Pro Max","Redmi Note 9S","Redmi Note 9T",
  "Redmi Note 10","Redmi Note 10 Pro","Redmi Note 10 Pro Max","Redmi Note 10S","Redmi Note 10 5G","Redmi Note 10T",
  "Redmi Note 11","Redmi Note 11 Pro","Redmi Note 11 Pro+","Redmi Note 11S","Redmi Note 11 5G","Redmi Note 11T",
  "Redmi Note 11E","Redmi Note 11E Pro",
  "Redmi Note 12","Redmi Note 12 Pro","Redmi Note 12 Pro+","Redmi Note 12S","Redmi Note 12 5G","Redmi Note 12 Turbo","Redmi Note 12R",
  "Redmi Note 13","Redmi Note 13 Pro","Redmi Note 13 Pro+","Redmi Note 13 5G","Redmi Note 13R",
  "Redmi Note 14","Redmi Note 14 Pro","Redmi Note 14 Pro+","Redmi Note 14 5G","Redmi Note 14R",
  "Redmi K60","Redmi K60 Pro","Redmi K70","Redmi K70 Pro","Redmi K70 Ultra","Redmi K80","Redmi K80 Pro"
];

const modelosPoco = [
  "POCO X2",
  "POCO X3","POCO X3 NFC","POCO X3 Pro","POCO X3 GT",
  "POCO X4","POCO X4 Pro","POCO X4 GT",
  "POCO X5","POCO X5 Pro",
  "POCO X6","POCO X6 Pro","POCO X6 Neo",
  "POCO X7","POCO X7 Pro",
  "POCO M2","POCO M2 Pro","POCO M2 Reloaded",
  "POCO M3","POCO M3 Pro","POCO M3 Pro 5G",
  "POCO M4","POCO M4 Pro","POCO M4 Pro 5G","POCO M4 5G",
  "POCO M5","POCO M5s","POCO M5 4G",
  "POCO M6","POCO M6 Pro","POCO M6 Pro 5G","POCO M6 Plus","POCO M6 4G",
  "POCO F1","POCO F2 Pro",
  "POCO F3","POCO F3 GT",
  "POCO F4","POCO F4 GT",
  "POCO F5","POCO F5 Pro",
  "POCO F6","POCO F6 Pro",
  "POCO C3","POCO C31","POCO C40",
  "POCO C50","POCO C51","POCO C55",
  "POCO C61","POCO C65","POCO C71","POCO C75"
];

const modelosRealme = [
  "Realme 5","Realme 5 Pro","Realme 5i","Realme 5s",
  "Realme 6","Realme 6 Pro","Realme 6i","Realme 6s",
  "Realme 7","Realme 7 Pro","Realme 7i","Realme 7 5G",
  "Realme 8","Realme 8 Pro","Realme 8i","Realme 8s","Realme 8 5G",
  "Realme 9","Realme 9 Pro","Realme 9 Pro+","Realme 9i","Realme 9 5G","Realme 9 Speed",
  "Realme 10","Realme 10 Pro","Realme 10 Pro+","Realme 10 4G","Realme 10 5G",
  "Realme 11","Realme 11 Pro","Realme 11 Pro+","Realme 11x","Realme 11 5G",
  "Realme 12","Realme 12 Pro","Realme 12 Pro+","Realme 12x","Realme 12 5G",
  "Realme 13","Realme 13 Pro","Realme 13 Pro+","Realme 13 5G",
  "Realme 14","Realme 14 Pro","Realme 14 Pro+","Realme 14x","Realme 14 5G",
  "Realme C11","Realme C12","Realme C15","Realme C17",
  "Realme C20","Realme C20A","Realme C21","Realme C21Y","Realme C25","Realme C25s","Realme C25Y",
  "Realme C30","Realme C30s","Realme C31","Realme C33","Realme C33 2023","Realme C35",
  "Realme C51","Realme C51s","Realme C53","Realme C55",
  "Realme C61","Realme C63","Realme C65","Realme C67","Realme C67 5G","Realme C75",
  "Realme Narzo 20","Realme Narzo 20 Pro","Realme Narzo 20A",
  "Realme Narzo 30","Realme Narzo 30 Pro","Realme Narzo 30A","Realme Narzo 30 5G",
  "Realme Narzo 50","Realme Narzo 50A","Realme Narzo 50A Prime","Realme Narzo 50i","Realme Narzo 50i Prime","Realme Narzo 50 5G",
  "Realme Narzo 60","Realme Narzo 60 Pro","Realme Narzo 60x","Realme Narzo 60 5G",
  "Realme Narzo 70","Realme Narzo 70 Pro","Realme Narzo 70x","Realme Narzo 70 5G",
  "Realme GT","Realme GT Neo","Realme GT Neo 2","Realme GT Neo 2T","Realme GT Neo 3","Realme GT Neo 3T",
  "Realme GT 2","Realme GT 2 Pro","Realme GT 3",
  "Realme GT 5","Realme GT 5 Pro","Realme GT 6","Realme GT 6T"
];

const modelosMotorola = [
  "Moto G04","Moto G04s","Moto G04 Power",
  "Moto G05","Moto G05s","Moto G06","Moto G06 Power",
  "Moto G9","Moto G9 Play","Moto G9 Plus","Moto G9 Power",
  "Moto G10","Moto G10 Power",
  "Moto G14","Moto G15","Moto G15 Power",
  "Moto G20","Moto G22","Moto G23","Moto G24","Moto G24 Power",
  "Moto G30","Moto G31","Moto G32","Moto G34","Moto G34 5G","Moto G35","Moto G35 5G",
  "Moto G42","Moto G43","Moto G44","Moto G45","Moto G45 5G",
  "Moto G50","Moto G50 5G","Moto G52","Moto G53","Moto G53 5G","Moto G54","Moto G54 5G","Moto G55","Moto G55 5G",
  "Moto G60","Moto G60s","Moto G62","Moto G62 5G",
  "Moto G71","Moto G71 5G","Moto G72","Moto G73","Moto G73 5G","Moto G82","Moto G84","Moto G85",
  "Moto G100","Moto G200","Moto G Power 2024","Moto G Stylus 2024",
  "Moto E6","Moto E6 Plus","Moto E6i","Moto E6s",
  "Moto E7","Moto E7 Plus","Moto E7 Power","Moto E7i Power",
  "Moto E13","Moto E13 Plus","Moto E14","Moto E14 Plus",
  "Moto E20","Moto E22","Moto E22i","Moto E22s",
  "Moto E30","Moto E32","Moto E32s","Moto E40","Moto E50",
  "Moto Edge 20","Moto Edge 20 Pro","Moto Edge 20 Fusion","Moto Edge 20 Lite",
  "Moto Edge 30","Moto Edge 30 Pro","Moto Edge 30 Fusion","Moto Edge 30 Neo","Moto Edge 30 Ultra",
  "Moto Edge 40","Moto Edge 40 Pro","Moto Edge 40 Neo","Moto Edge 40 Fusion",
  "Moto Edge 50","Moto Edge 50 Pro","Moto Edge 50 Neo","Moto Edge 50 Ultra","Moto Edge 50 Fusion",
  "Moto Edge 60","Moto Edge 60 Pro","Moto Edge 60 Fusion",
  "Motorola Razr 40","Motorola Razr 40 Ultra","Motorola Razr 50","Motorola Razr 50 Ultra",
  "Moto S50 Neo"
];

const modelosAsus = [
  "ASUS ZenFone 6","ASUS ZenFone 7","ASUS ZenFone 7 Pro",
  "ASUS ZenFone 8","ASUS ZenFone 8 Flip","ASUS ZenFone 8 Mini",
  "ASUS ZenFone 9","ASUS ZenFone 10","ASUS ZenFone 11 Ultra",
  "ROG Phone 3","ROG Phone 3 Strix",
  "ROG Phone 5","ROG Phone 5s","ROG Phone 5s Pro","ROG Phone 5 Ultimate",
  "ROG Phone 6","ROG Phone 6 Pro","ROG Phone 6D","ROG Phone 6D Ultimate",
  "ROG Phone 7","ROG Phone 7 Ultimate","ROG Phone 7 Pro",
  "ROG Phone 8","ROG Phone 8 Pro","ROG Phone 8 Pro Edition"
];

const modelosInfinix = [
  "Infinix Hot 10","Infinix Hot 10 Play","Infinix Hot 10 Lite","Infinix Hot 10s",
  "Infinix Hot 11","Infinix Hot 11 Play","Infinix Hot 11s","Infinix Hot 11 2022",
  "Infinix Hot 12","Infinix Hot 12 Play","Infinix Hot 12i",
  "Infinix Hot 20","Infinix Hot 20 Play","Infinix Hot 20s","Infinix Hot 20i","Infinix Hot 20 4G",
  "Infinix Hot 30","Infinix Hot 30 Play","Infinix Hot 30i","Infinix Hot 30 5G",
  "Infinix Hot 40","Infinix Hot 40 Pro","Infinix Hot 40i","Infinix Hot 40 Play",
  "Infinix Note 10","Infinix Note 10 Pro","Infinix Note 11","Infinix Note 11 Pro",
  "Infinix Note 12","Infinix Note 12 Pro","Infinix Note 12 G96","Infinix Note 12 VIP",
  "Infinix Note 30","Infinix Note 30 Pro","Infinix Note 30 VIP","Infinix Note 30 5G",
  "Infinix Note 40","Infinix Note 40 Pro","Infinix Note 40 Pro+","Infinix Note 40 5G",
  "Infinix Smart 6","Infinix Smart 7","Infinix Smart 8","Infinix Smart 8 Plus","Infinix Smart 9",
  "Infinix Zero 20","Infinix Zero 30","Infinix Zero 30 5G","Infinix Zero 40","Infinix Zero 40 5G","Infinix Zero Ultra",
  "Infinix GT 10 Pro","Infinix GT 20 Pro"
];

const modelosTecno = [
  "Tecno Camon 17","Tecno Camon 17 Pro","Tecno Camon 17P",
  "Tecno Camon 18","Tecno Camon 18 Pro","Tecno Camon 18T","Tecno Camon 18 Premier",
  "Tecno Camon 19","Tecno Camon 19 Pro","Tecno Camon 19 Neo","Tecno Camon 19 Pro Mondrian",
  "Tecno Camon 20","Tecno Camon 20 Pro","Tecno Camon 20 Premier","Tecno Camon 20 Pro 5G","Tecno Camon 20s Pro",
  "Tecno Camon 30","Tecno Camon 30 Pro","Tecno Camon 30 Premier","Tecno Camon 30S",
  "Tecno Camon 40","Tecno Camon 40 Pro","Tecno Camon 40 Premier",
  "Tecno Spark 8","Tecno Spark 8C","Tecno Spark 8P","Tecno Spark 8 Pro",
  "Tecno Spark 9","Tecno Spark 9 Pro","Tecno Spark 9T",
  "Tecno Spark 10","Tecno Spark 10 Pro","Tecno Spark 10C","Tecno Spark 10 NFC",
  "Tecno Spark 20","Tecno Spark 20 Pro","Tecno Spark 20 Pro+","Tecno Spark 20C","Tecno Spark 20s",
  "Tecno Spark 30","Tecno Spark 30 Pro","Tecno Spark 30C","Tecno Spark 30 5G",
  "Tecno Pova 3","Tecno Pova 4","Tecno Pova 4 Pro",
  "Tecno Pova 5","Tecno Pova 5 Pro","Tecno Pova 5 4G",
  "Tecno Pova 6","Tecno Pova 6 Neo","Tecno Pova 6 Pro","Tecno Pova Neo 3",
  "Tecno Pop 6","Tecno Pop 6 Pro","Tecno Pop 7","Tecno Pop 7 Pro","Tecno Pop 8","Tecno Pop 9"
];

const modelosOnePlus = [
  "OnePlus 7","OnePlus 7 Pro","OnePlus 7T","OnePlus 7T Pro",
  "OnePlus 8","OnePlus 8 Pro","OnePlus 8T",
  "OnePlus 9","OnePlus 9 Pro","OnePlus 9R","OnePlus 9RT",
  "OnePlus 10","OnePlus 10 Pro","OnePlus 10T","OnePlus 10R",
  "OnePlus 11","OnePlus 11R","OnePlus 11 5G",
  "OnePlus 12","OnePlus 12R","OnePlus 12 5G",
  "OnePlus 13","OnePlus 13R","OnePlus 13T",
  "OnePlus Ace","OnePlus Ace 2","OnePlus Ace 2 Pro","OnePlus Ace 2V",
  "OnePlus Ace 3","OnePlus Ace 3 Pro","OnePlus Ace 3V",
  "OnePlus Nord","OnePlus Nord CE","OnePlus Nord CE 2","OnePlus Nord CE 2 Lite","OnePlus Nord CE 2 5G",
  "OnePlus Nord CE 3","OnePlus Nord CE 3 Lite","OnePlus Nord CE 4","OnePlus Nord CE 4 Lite",
  "OnePlus Nord 2","OnePlus Nord 2T","OnePlus Nord 2 5G",
  "OnePlus Nord 3","OnePlus Nord 4","OnePlus Nord 5",
  "OnePlus Nord N10","OnePlus Nord N20","OnePlus Nord N30","OnePlus Nord N100","OnePlus Nord N200","OnePlus Nord N300",
  "OnePlus Open","OnePlus Open Apex"
];

const modelosHuawei = [
  "Huawei P30","Huawei P30 Pro","Huawei P30 Lite",
  "Huawei P40","Huawei P40 Pro","Huawei P40 Pro+","Huawei P40 Lite","Huawei P40 Lite E",
  "Huawei P50","Huawei P50 Pro","Huawei P50 Pocket","Huawei P50E",
  "Huawei P60","Huawei P60 Pro","Huawei P60 Art",
  "Huawei Pura 70","Huawei Pura 70 Pro","Huawei Pura 70 Ultra","Huawei Pura 70 Art",
  "Huawei Mate 30","Huawei Mate 30 Pro","Huawei Mate 30 Lite",
  "Huawei Mate 40","Huawei Mate 40 Pro","Huawei Mate 40 Pro+","Huawei Mate 40 RS","Huawei Mate 40E",
  "Huawei Mate 50","Huawei Mate 50 Pro","Huawei Mate 50 RS","Huawei Mate 50E",
  "Huawei Mate 60","Huawei Mate 60 Pro","Huawei Mate 60 Pro+","Huawei Mate 60 RS","Huawei Mate 60E",
  "Huawei Mate X3","Huawei Mate X5","Huawei Mate XT",
  "Huawei Nova 7","Huawei Nova 7 Pro","Huawei Nova 7 SE",
  "Huawei Nova 8","Huawei Nova 8 Pro","Huawei Nova 8 SE",
  "Huawei Nova 9","Huawei Nova 9 Pro","Huawei Nova 9 SE",
  "Huawei Nova 10","Huawei Nova 10 Pro","Huawei Nova 10 SE",
  "Huawei Nova 11","Huawei Nova 11 Pro","Huawei Nova 11 SE","Huawei Nova 11 Ultra",
  "Huawei Nova 12","Huawei Nova 12 Pro","Huawei Nova 12 SE","Huawei Nova 12 Ultra",
  "Huawei Y6p","Huawei Y7a","Huawei Y7p","Huawei Y8p","Huawei Y9a","Huawei Y9 Prime","Huawei Y9s"
];

const modelosHonor = [
  "Honor 50","Honor 50 Pro","Honor 50 Lite","Honor 50 SE",
  "Honor 60","Honor 60 Pro","Honor 60 SE",
  "Honor 70","Honor 70 Pro","Honor 70 Lite","Honor 70 SE",
  "Honor 80","Honor 80 Pro","Honor 80 SE","Honor 80 GT",
  "Honor 90","Honor 90 Pro","Honor 90 Lite","Honor 90 GT","Honor 90 Smart",
  "Honor 100","Honor 100 Pro",
  "Honor 200","Honor 200 Pro","Honor 200 Lite","Honor 200 Smart",
  "Honor 300","Honor 300 Pro","Honor 300 Ultra",
  "Honor X5","Honor X5 Plus","Honor X5b",
  "Honor X6","Honor X6a","Honor X6b","Honor X6s","Honor X6 Pro",
  "Honor X7","Honor X7a","Honor X7b","Honor X7 Pro",
  "Honor X8","Honor X8a","Honor X8b","Honor X8 5G","Honor X8 Pro",
  "Honor X9","Honor X9a","Honor X9b","Honor X9 5G","Honor X9 Pro",
  "Honor X9b 5G","Honor X9c","Honor X50","Honor X50 Pro",
  "Honor Magic 4","Honor Magic 4 Pro","Honor Magic 4 Ultimate",
  "Honor Magic 5","Honor Magic 5 Pro","Honor Magic 5 Lite","Honor Magic 5 Ultimate",
  "Honor Magic 6","Honor Magic 6 Pro","Honor Magic 6 Lite","Honor Magic 6 RSR",
  "Honor Magic 7","Honor Magic 7 Pro","Honor Magic 7 RSR",
  "Honor Magic V2","Honor Magic V3","Honor Magic Vs2","Honor Magic V Purse"
];

const modelosLG = [
  "LG G6","LG G7","LG G7 ThinQ","LG G8","LG G8 ThinQ","LG G8X ThinQ","LG G8s ThinQ",
  "LG V40","LG V40 ThinQ","LG V50","LG V50 ThinQ","LG V50S ThinQ","LG V60","LG V60 ThinQ",
  "LG Velvet","LG Velvet 5G","LG Wing",
  "LG K22","LG K31","LG K41","LG K41s","LG K42","LG K43",
  "LG K50","LG K50s","LG K51","LG K51s","LG K52","LG K53","LG K61","LG K62","LG K71","LG K92",
  "LG Q52","LG Q60","LG Q70","LG Q92 5G",
  "LG Stylo 5","LG Stylo 6","LG Stylo 7"
];

const modelosSony = [
  "Sony Xperia 1 II","Sony Xperia 1 III","Sony Xperia 1 IV","Sony Xperia 1 V","Sony Xperia 1 VI",
  "Sony Xperia 5 II","Sony Xperia 5 III","Sony Xperia 5 IV","Sony Xperia 5 V","Sony Xperia 5 VI",
  "Sony Xperia 10 II","Sony Xperia 10 III","Sony Xperia 10 III Lite",
  "Sony Xperia 10 IV","Sony Xperia 10 V","Sony Xperia 10 VI","Sony Xperia 10 VII",
  "Sony Xperia Pro","Sony Xperia Pro-I","Sony Xperia Pro II"
];

const modelosVivo = [
  "Vivo Y01","Vivo Y01A","Vivo Y02","Vivo Y02s","Vivo Y02t",
  "Vivo Y03","Vivo Y03s","Vivo Y03t",
  "Vivo Y11","Vivo Y11s","Vivo Y12","Vivo Y12s","Vivo Y12A",
  "Vivo Y15","Vivo Y15a","Vivo Y15s","Vivo Y16","Vivo Y17s","Vivo Y17t",
  "Vivo Y20","Vivo Y20A","Vivo Y20G","Vivo Y20s","Vivo Y20t",
  "Vivo Y21","Vivo Y21A","Vivo Y21e","Vivo Y21G","Vivo Y21s","Vivo Y21t",
  "Vivo Y22","Vivo Y22s","Vivo Y22t",
  "Vivo Y27","Vivo Y27s","Vivo Y27t","Vivo Y27 5G",
  "Vivo Y28","Vivo Y28e","Vivo Y28 5G",
  "Vivo Y29","Vivo Y29s","Vivo Y29 5G",
  "Vivo Y33s","Vivo Y33e","Vivo Y33t",
  "Vivo Y35","Vivo Y35+","Vivo Y36","Vivo Y36 5G",
  "Vivo Y38","Vivo Y38 5G","Vivo Y55","Vivo Y55s","Vivo Y72","Vivo Y75","Vivo Y76","Vivo Y76s",
  "Vivo V21","Vivo V21 5G","Vivo V21e",
  "Vivo V23","Vivo V23e","Vivo V23 5G",
  "Vivo V25","Vivo V25 Pro","Vivo V25e",
  "Vivo V27","Vivo V27 Pro","Vivo V27e",
  "Vivo V29","Vivo V29 Pro","Vivo V29e","Vivo V29 Lite",
  "Vivo V30","Vivo V30 Pro","Vivo V30e","Vivo V30 Lite",
  "Vivo V40","Vivo V40 Pro","Vivo V40 Lite","Vivo V40e",
  "Vivo X80","Vivo X80 Pro","Vivo X80 Lite",
  "Vivo X90","Vivo X90 Pro","Vivo X90 Pro+",
  "Vivo X100","Vivo X100 Pro","Vivo X100 Ultra",
  "Vivo iQOO 11","Vivo iQOO 11 Pro","Vivo iQOO 11s",
  "Vivo iQOO 12","Vivo iQOO 12 Pro",
  "Vivo iQOO Neo 7","Vivo iQOO Neo 7 Pro","Vivo iQOO Neo 7 SE",
  "Vivo iQOO Neo 8","Vivo iQOO Neo 8 Pro",
  "Vivo iQOO Neo 9","Vivo iQOO Neo 9 Pro",
  "Vivo iQOO Z7","Vivo iQOO Z7 Pro","Vivo iQOO Z7x",
  "Vivo iQOO Z9","Vivo iQOO Z9 Pro","Vivo iQOO Z9x","Vivo iQOO Z9 Turbo"
];

const modelosOppo = [
  "OPPO A15","OPPO A15s",
  "OPPO A16","OPPO A16s","OPPO A16k","OPPO A16e",
  "OPPO A17","OPPO A17k",
  "OPPO A18","OPPO A18s",
  "OPPO A31","OPPO A32","OPPO A33","OPPO A35",
  "OPPO A38","OPPO A52","OPPO A53","OPPO A53s","OPPO A54","OPPO A54s",
  "OPPO A55","OPPO A55s","OPPO A55 5G",
  "OPPO A56","OPPO A57","OPPO A57s","OPPO A57e","OPPO A57 4G",
  "OPPO A58","OPPO A58x","OPPO A58 4G",
  "OPPO A59","OPPO A59 5G",
  "OPPO A60","OPPO A60 5G",
  "OPPO A72","OPPO A73","OPPO A74","OPPO A74 5G","OPPO A74 4G",
  "OPPO A76","OPPO A77","OPPO A77s","OPPO A77 5G",
  "OPPO A78","OPPO A78 5G","OPPO A78 4G",
  "OPPO A79","OPPO A79 5G",
  "OPPO A91","OPPO A92","OPPO A93","OPPO A94","OPPO A95","OPPO A96","OPPO A97",
  "OPPO A98","OPPO A98 5G",
  "OPPO Reno 5","OPPO Reno 5 Pro","OPPO Reno 5 Lite","OPPO Reno 5Z","OPPO Reno 5F",
  "OPPO Reno 6","OPPO Reno 6 Pro","OPPO Reno 6 Pro+","OPPO Reno 6 Lite","OPPO Reno 6Z",
  "OPPO Reno 7","OPPO Reno 7 Pro","OPPO Reno 7 Lite","OPPO Reno 7Z","OPPO Reno 7A",
  "OPPO Reno 8","OPPO Reno 8 Pro","OPPO Reno 8 Lite","OPPO Reno 8T","OPPO Reno 8Z","OPPO Reno 8 4G",
  "OPPO Reno 9","OPPO Reno 9 Pro","OPPO Reno 9 Pro+","OPPO Reno 9A",
  "OPPO Reno 10","OPPO Reno 10 Pro","OPPO Reno 10 Pro+","OPPO Reno 10 5G","OPPO Reno 10 F",
  "OPPO Reno 11","OPPO Reno 11 Pro","OPPO Reno 11 F","OPPO Reno 11 5G","OPPO Reno 11A",
  "OPPO Reno 12","OPPO Reno 12 Pro","OPPO Reno 12 F","OPPO Reno 12 FS",
  "OPPO Find X5","OPPO Find X5 Pro","OPPO Find X5 Lite",
  "OPPO Find X6","OPPO Find X6 Pro",
  "OPPO Find X7","OPPO Find X7 Ultra",
  "OPPO Find X8","OPPO Find X8 Pro","OPPO Find X8 Ultra",
  "OPPO Find N2","OPPO Find N2 Flip",
  "OPPO Find N3","OPPO Find N3 Flip",
  "OPPO K10","OPPO K10 Pro","OPPO K10x","OPPO K11","OPPO K11x","OPPO K12","OPPO K12x"
];

const modelosNokia = [
  "Nokia 1.4","Nokia 2.4","Nokia 3.4","Nokia 5.4",
  "Nokia G10","Nokia G11","Nokia G11 Plus","Nokia G20","Nokia G21","Nokia G22","Nokia G42","Nokia G60",
  "Nokia G100","Nokia G300","Nokia G400",
  "Nokia C01 Plus","Nokia C02","Nokia C12","Nokia C21","Nokia C21 Plus","Nokia C31","Nokia C32",
  "Nokia X10","Nokia X20","Nokia X30","Nokia XR20","Nokia XR21",
  "Nokia T10","Nokia T20","Nokia T21"
];

const todosModelos = [].concat(
  modelosApple,modelosSamsung,modelosXiaomi,modelosRedmi,modelosPoco,modelosRealme,
  modelosMotorola,modelosAsus,modelosInfinix,modelosTecno,modelosOnePlus,modelosHuawei,
  modelosHonor,modelosLG,modelosSony,modelosVivo,modelosOppo,modelosNokia
);