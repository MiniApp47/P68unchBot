document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        // J'ai ajouté isImage: true et défini l'image. Remplace 'BoutonLuffa.jpg' par ton image.
        { isImage: true, image: 'LinksLuffa.jpg', url: 'https://linktr.ee/WeedPunch68', id: 'luffa' },
        // Si tu veux rajouter des boutons texte normaux plus tard, utilise ce format :
        // { isImage: false, name: 'Insta', url: '...', className: 'instagram', icon: '#icon-instagram', text: 'Instagram' }
    ];

    // --- DONNÉES ---
    const appData = [
        {
            id: 'HASH',
            name: '🍫 HASH',
            type: 'Hash',
            quality: '🍫 HASH',
            image: 'CategHash.jpg', 
            farms: [
                {
                    id: 'FROZEN',
                    name: '❄️ FROZEN SIFT',
                    image: 'SousFrozen.jpg', // <-- METS TON IMAGE ICI
                    badgeText: 'Fresh Frozen Tech',
                    products: [
                         {
                            id: 'RS11 X Sherbet',
                            name: 'RS11 X Sherbet 🍧',
                            flag: '🇲🇦',
                            farm: 'ELITE PLASMA GENETIC ⚛',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductRs.jpg', 
                            video: 'VideoRs.mp4',
                            description: '🔮 Elite plasma genetic frozen 🔮',
                            tarifs: [
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 80.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '100g', price: 550.00 },
                            ]
                        },
                         {
                            id: 'Bono de raya',
                            name: 'Bono de raya 🌙',
                            flag: '🇲🇦',
                            farm: 'DR RIFF 🥼',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductBono.jpg', 
                            video: 'VideoBono.mp4',
                            description: '',
                            tarifs: [
                                { weight: '10g', price: 100.00 },
                            ]
                        },
                        /*  {
                            id: 'BlueBerry',
                            name: 'BlueBerry 🫐',
                            flag: '🇲🇦',
                            farm: '',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductBlue.jpg', 
                            video: 'VideoBlue.mp4',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 50.00 },
                                { weight: '10g', price: 90.00 },
                                { weight: '25g', price: 180.00 }
                            ]
                        }, */
                    ]
                },
                {
                    id: 'STATIC',
                    name: '⚡ STATIC SIFT',
                    image: 'SousStatic.jpg', // <-- METS TON IMAGE ICI
                    badgeText: 'High Voltage',
                    products: [
                         {
                            id: 'RS11 ',
                            name: 'RS11 🚀',
                            flag: '🇲🇦',
                            farm: 'ELITE PLASMA GENETIC ⚛',
                            promoEligible: true,
                            type: 'Static',
                            image: 'ProductRss.jpg', 
                            video: 'VideoRss.mp4',
                            description: '🔮 Elite plasma genetic single source plasma static 🔮',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 200.00 },
                                { weight: '100g', price: 650.00 },
                            ]
                        },
                       /*  {
                            id: 'Goldcherry X Honeybanana (Cherry Banana )',
                            name: 'Cherry Banane 🍌',
                            flag: '🇲🇦',
                            farm: 'DrytechXGoldenfarm',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGold1.jpg', 
                            video: 'VideoGold1.mp4',
                            description: 'Static Sift ultra clean. 0 contaminants.',
                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 170.00 },
                            ]
                        },
                        {
                            id: 'Monaco',
                            name: 'Monaco 🏖️',
                            flag: '🇲🇦',
                            farm: 'DrytechXGoldenfarm',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductMonaco1.jpg', 
                            video: 'VideoMonaco1.mp4',
                            description: 'Static Sift ultra clean. 0 contaminants.',
                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 170.00 },
                            ]
                        },
                        {
                            id: 'Blue Papaya',
                            name: 'Blue Papaya 🧿',
                            flag: '🇲🇦',
                            farm: 'DrytechXGoldenfarm',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBP.jpg', 
                            video: 'VideoBP.mp4',
                            description: 'Static Sift ultra clean. 0 contaminants.',
                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 170.00 },
                            ]
                        },
                        {
                            id: 'Grape Gas',
                            name: 'Grape Gas 🍇',
                            flag: '🇲🇦',
                            farm: 'DrytechXGoldenfarm',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGP.jpg', 
                            video: 'VideoGP.mp4',
                            description: 'Static Sift ultra clean. 0 contaminants.',
                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 170.00 },
                            ]
                        }, */
                    ]
                },
                {
                    id: 'Filtré',
                    name: '🏜️ FILTRÉ',
                    image: 'SousFiltre.jpg', // <-- METS TON IMAGE ICI
                    badgeText: 'Classique',
                    products: []
                }
            ]
        },
        {
            id: 'WEED',
            name: '🍀 WEED',
            type: 'Weed',
            quality: '🍀 WEED',
            image: 'CategBeuh.jpg',
            farms: [
                {
                    id: 'CALI',
                    name: '🇺🇸 CALI IMPORT',
                    image: 'SousCali.jpg', // <-- METS TON IMAGE ICI
                    badgeText: 'Top Shelf USA',
                    products: [
                        /*  {
                            id: 'Super Boof',
                            name: 'Super Boof 🧸',
                            flag: '🇺🇸',
                            farm: '',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductBof.jpg',
                            video: 'VideoBof.mp4',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                            ]
                        },
                         {
                            id: 'Red Velvet 🩸',
                            name: 'Red Velvet 🩸',
                            flag: '🇺🇸',
                            farm: '',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductRed.jpg',
                            video: 'VideoRed.mp4',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 60.00 },
                                { weight: '10g', price: 100.00 },
                            ]
                        }, */
                    ]
                },
                {
                    id: 'SPAIN',
                    name: '🇪🇸 SPANISH GROWN',
                    image: 'SousSpain.jpg', // <-- METS TON IMAGE ICI
                    badgeText: 'Indoor Spain',
                    products: [
                       /*  {
                            id: 'Amnesia Lemon',
                            name: 'Amnesia Lemon',
                            flag: '🇪🇸',
                            farm: '',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductAmne1.jpg',
                            video: 'ProductAmne.jpg',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 150.00 }
                            ]
                        }, */
                    ]
                },
                  {
                    id: 'Dutch',
                    name: '🇳🇱 DUTCH ',
                    image: 'SousDutch.jpg', // <-- METS TON IMAGE ICI
                    badgeText: '',
                    products: [
                         /* {
                            id: 'Amnesia Lemon',
                            name: 'Amnesia Lemon',
                            flag: '🇩🇪',
                            farm: 'CALI CONNECT',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductAmne.jpg',
                            video: '',
                            description: 'Goût sucré, têtes compactes.',
                            tarifs: [
                                { weight: '4g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 150.00 }
                            ]
                        }, */
                    ]
                },
                  {
                    id: 'THAI',
                    name: '🇹🇭 CALI THAI',
                    image: 'SousThai.jpg', // <-- METS TON IMAGE ICI
                    badgeText: '',
                    products: [
                        /*  {
                            id: 'Amnesia Lemon',
                            name: 'Amnesia Lemon',
                            flag: '🇹🇭',
                            farm: 'CALI CONNECT',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductAmne.jpg',
                            video: '',
                            description: 'Goût sucré, têtes compactes.',
                            tarifs: [
                                { weight: '4g', price: 40.00 },
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 150.00 }
                            ]
                        }, */
                    ]
                },
            ]
        },
        {
            id: 'EXTRACT',
            name: '🍯 EXTRACT',
            type: 'Extract',
            quality: '🍯 EXTRACT',
            image: 'CategExtra.jpg',
            products: [
              /*   {
                    id: 'Grape Gas2',
                    name: 'Grape Gas 🍒',
                    flag: '🧬',
                    farm: 'By Hassan',
                    promoEligible: false,
                    type: 'Extract',
                    image: 'ProductGas.jpg',
                    video: 'VideoGas.mp4',
                    description: 'Piatella WPFF 1st wash cold cured. \n 1g/jar',
                    tarifs: [
                        { weight: '1 jar', price: 80.00 },
                        { weight: '2 jar', price: 150.00 },
                        { weight: '3 jar', price: 210.00 }
                    ]
                },
                {
                    id: 'Melon Guava',
                    name: 'Melon Guava 🍈',
                    flag: '🧬',
                    farm: 'By Hassan',
                    promoEligible: false,
                    type: 'Extract',
                    image: 'ProductMelon.jpg',
                    video: 'VideoMelon.mp4',
                    description: 'Piatella WPFF 1st wash cold cured. \n 1g/jar',
                    tarifs: [
                        { weight: '1 jar', price: 80.00 },
                        { weight: '2 jar', price: 150.00 },
                        { weight: '3 jar', price: 210.00 }
                    ]
                },
                {
                    id: 'Jokerz',
                    name: 'Jokerz 🤡',
                    flag: '🧬',
                    farm: 'By Hassan',
                    promoEligible: false,
                    type: 'Extract',
                    image: 'ProductJoker.jpg',
                    video: 'VideoJoker.mp4',
                    description: 'Piatella WPFF 1st wash cold cured. \n 1g/jar',
                    tarifs: [
                        { weight: '1 jar', price: 80.00 },
                        { weight: '2 jar', price: 150.00 },
                        { weight: '3 jar', price: 210.00 }
                    ]
                },
                {
                    id: 'Dulce de uva',
                    name: 'Dulce de uva 🍮',
                    flag: '🧬',
                    farm: 'By Hassan',
                    promoEligible: false,
                    type: 'Extract',
                    image: 'ProductUva.jpg',
                    video: 'VideoUva.mp4',
                    description: 'Piatella WPFF 1st wash cold cured. \n 1g/jar',
                    tarifs: [
                        { weight: '1 jar', price: 80.00 },
                        { weight: '2 jar', price: 150.00 },
                        { weight: '3 jar', price: 210.00 }
                    ]
                } */
            ]
        },
        {
            id: 'EDIBLES',
            name: '🍬 EDIBLES',
            type: 'Edibles',
            quality: '🍬 EDIBLES',
            image: 'CategEdib.jpg',
            products: []
        }
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = { searchTerm: '', quality: 'all', farm: 'all' };
    
    let currentView = 'categories'; 
    let currentCategoryId = null;
    let currentFarmId = null;
    let appliedPromo = null;
    let paymentMethod = 'Espèce';

    const validPromoCodes = {
        "ACTUPLUG33": { type: 'fixed', value: 10, appliesTo: 'eligible', cumulative: false }
    };

    // --- SÉLECTEURS ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    function getProductById(productId) {
        for (const category of appData) {
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined;
    }

    function showPage(pageId) {
         // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });

        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');

        if(homeNav) homeNav.classList.remove('active');
        if(infoNav) infoNav.classList.remove('active');
        if(contactNav) contactNav.classList.remove('active');

        if (pageId === 'page-contact') contactNav.classList.add('active');
        else if (pageId === 'page-info') infoNav.classList.add('active');
        else homeNav.classList.add('active');
    }

    function renderHomePage() {
        filterContainer.style.display = 'flex';

        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();

        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId); 
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        } else if (currentView === 'simple_products') {
            renderProductListSimple(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        } else if (currentView === 'products') {
            renderProductList(currentCategoryId, currentFarmId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            createBackButton('back-to-farms-btn', farm.name);
        }
    }

    function createBackButton(className, text) {
        const backButton = document.createElement('button');
        backButton.className = className;
        backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${text}`;
        backButton.style.cssText = `
            background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #e605c0;
            border-top: none; border-left: none; border-right: none;
            color: white; padding: 10px 15px; 
            border-radius: 10px; font-size: 1.1rem; 
            font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;
        `;
        filterContainer.prepend(backButton);
    }

   function renderCategoryList() {
    const filteredCategories = appData.filter(category => {
        const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
        return searchMatch && qualityMatch;
    });

    productListContainer.innerHTML = '';
    
    if (filteredCategories.length === 0) {
        productListContainer.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 20px; color: #888;">Aucune catégorie ne correspond.</p>';
        return;
    }

    filteredCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.dataset.categoryId = category.id;
        card.innerHTML = `<img src="${category.image}" alt="${category.name}">`;
        productListContainer.appendChild(card);
    });
}

    // --- RENDER SOUS-CATÉGORIES (AVEC IMAGES MAINTENANT) ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;

        const farms = category.farms;
        productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; 
        productListContainer.style.gap = '15px'; 
        productListContainer.innerHTML = '';

        farms.forEach(farm => {
            const card = document.createElement('div');
            // On utilise la classe "farm-card" existante dans ton CSS qui affiche bien les images
            card.className = 'farm-card'; 
            card.dataset.farmId = farm.id;

            // Image de substitution si tu as oublié de renseigner l'image
            const imgSrc = farm.image || 'https://placehold.co/400x200/2c2c2e/ffffff?text=' + farm.name;

            card.innerHTML = `<img src="${imgSrc}" alt="${farm.name}">`;
            productListContainer.appendChild(card);
        });
    }

    function renderProductListSimple(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category || !category.products) return;

        const filteredProducts = category.products.filter(product => {
            return product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        });

        productListContainer.innerHTML = '';
        renderProductCards(filteredProducts);
    }

    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) return;

        const filteredProducts = farm.products.filter(product => {
            return product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        });

        productListContainer.innerHTML = '';
        renderProductCards(filteredProducts);
    }

    function renderProductCards(products) {
        if (products.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>`;
            productListContainer.appendChild(card);
        });
    }

    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const videoElement = document.querySelector('#page-product .product-video');
        if(videoElement) {
             videoElement.src = product.video || '';
             videoElement.poster = product.image;
        }

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        let tarifsHTML = product.tarifs.map(tarif => `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                <svg width="20" height="20"><use href="#icon-cart"/></svg>
            </button>
        </div>`).join('');

        detailsContainer.innerHTML = `
        <div class="name">${product.name}</div>
        <div class="farm">${product.farm}</div>
        ${product.description ? `<div style="margin-bottom:20px; color:#ccc;">${product.description}</div>` : ''} 
        <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
        <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;
        showPage('page-product');
    }

    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>`).join('');
        
        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item" style="border-bottom:1px solid #333;">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div style="color:white; font-weight:bold;">${index + 1}. ${item.name}</div>
                    <div style="color:#aaa;">Qté: ${item.quantity}x ${item.weight}</div>
                    <div style="color:#aaa;">PU: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>`).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = '';
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line"><span>Sous-total:</span><span>${subTotal.toFixed(2)}€</span></div>
        `;
        if (discount > 0) {
            summaryHTML += `<div class="summary-line discount"><span>Réduction:</span><span>-${discount.toFixed(2)}€</span></div>`;
        }
        summaryHTML += `<div class="summary-line total"><span>💰 Total final:</span><span>${totalPrice.toFixed(2)}€</span></div>`;
        summaryContainer.innerHTML = summaryHTML;
        showPage('page-confirmation');
    }

    // --- RENDER CONTACT MODIFIÉ (Gère les images) ---
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => {
            if (link.isImage) {
                // Rendu Image
                return `
                <a href="${link.url}" target="_blank" style="text-decoration:none; display:block;">
                    <img src="${link.image}" alt="Lien" class="contact-link-img">
                </a>`;
            } else {
                // Rendu Bouton Classique
                return `
                <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
                    <svg width="24" height="24"><use href="${link.icon}"/></svg>
                    <span>${link.text}</span>
                </a>`;
            }
        }).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

 function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const farmFilter = document.getElementById('farm-filter');

    const allNestedProducts = [];
    appData.forEach(category => {
        if (category.farms) {
            category.farms.forEach(subCat => allNestedProducts.push(...subCat.products));
        } else if (category.products) {
            allNestedProducts.push(...category.products);
        }
    });

    const categoryQualities = appData.map(c => c.quality).filter(Boolean); 
    const qualities = ['all', ...new Set(categoryQualities)];

    if (qualityFilter) {
        qualityFilter.innerHTML = qualities.map(q => 
            `<option value="${q}">${q === 'all' ? '🔍 FILTRER CATÉGORIE' : q}</option>`
        ).join('');

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });
    }

    const productFarms = allNestedProducts.map(p => p.farm).filter(Boolean);
    const farms = ['all', ...new Set(productFarms)];

    if (farmFilter) {
        farmFilter.innerHTML = farms.map(f => 
            `<option value="${f}">${f === 'all' ? '👨‍🌾 TOUTES les Farms' : f}</option>`
        ).join('');

        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    if (searchFilter) {
        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });
    }
}

    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;
        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;
        notification.innerText = message;
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;
        if (action === 'increase') item.quantity++;
        else if (action === 'decrease') item.quantity--;

        if (item.quantity <= 0) cart = cart.filter(i => i.id !== cartItemId);
        else item.totalPrice = item.quantity * item.unitPrice;
        renderCart();
        if(document.getElementById('page-confirmation').classList.contains('active')) renderConfirmation();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n====================\nRESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n====================\nDETAIL DES ARTICLES:\n`;
        cart.forEach((item) => {
            message += `\n- ${item.name}`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });
        message += `\n\n====================\n\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += " \n-LIVRAISON: A convenir\n \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    // --- GESTION CLICK ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;
            if (pageId === 'page-contact') renderContactPage();
            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                currentFarmId = null;
                currentFilters.searchTerm = '';
                document.getElementById('search-filter').value = '';
                renderHomePage();
            }
            showPage(pageId);
        });
    });

    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false;
            return;
        }

        // 1. CLIC CATEGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);
            
            if (category.products) {
                // Si produits directs (Edibles, Extract)
                currentView = 'simple_products';
                currentCategoryId = category.id;
            } else if (category.farms) {
                // Si sous-catégories (Hash, Weed)
                currentView = 'farms';
                currentCategoryId = category.id;
            }
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 2. CLIC FARM (Sous-Catégorie) - MODIFIÉ pour pointer sur .farm-card
        const farmBtn = target.closest('.farm-card');
        if (farmBtn) {
            currentView = 'products';
            currentFarmId = farmBtn.dataset.farmId;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 3. RETOUR CATEGORIES
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 4. RETOUR FARMS
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. PRODUITS / ACTIONS
        const productCard = target.closest('.product-item-card');
        if (productCard) {
            if (productCard.classList.contains('unclickable')) return;
            renderProductPage(productCard.dataset.productId);
            return;
        }

        if (target.closest('.accordion-header')) {
            const accordionItem = target.closest('.accordion-header').parentElement;
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) item.classList.remove('active');
            });
            accordionItem.classList.toggle('active');
            return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase();
            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null;
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation();
        }

        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation();
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        if (target.closest('.close-button') || target.closest('#cart-continue-shopping') || target.closest('.back-button')) {
            showPage('page-home');
        }

        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        if (target.closest('#confirm-order-button')) {
            const targetUsername = 'law681'; 
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;
            tg.openLink(telegramUrl);
        }
    });

    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage();
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});