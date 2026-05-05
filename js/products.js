// ==========================================================================
// ZAREK — PRODUCTS DATA + RENDERERS
// Single source of truth for the catalog. Hydrates [data-product-grid]
// containers, the collection hero, and the product detail page.
// ==========================================================================

(function () {
    'use strict';

    /* ----------------------------------------------------------------------
       PRODUCT CATALOG
       ---------------------------------------------------------------------- */
    const PRODUCTS = [

        // ───────────────── COATS & JACKETS ─────────────────
        {
            id: 'quilted-puffer-vest',
            name: 'Zarek | Quilted Puffer Vest Zip-Up Stand Collar',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            images: [
                'assets/products/aca45da14c8f.webp',
                'assets/products/cbc965a7c3e9.webp',
                'assets/products/48b258a6068e.webp',
                'assets/products/a6e44df43fbc.webp'
            ],
            colorVariants: [
                { name: 'Black', image: 'assets/products/aca45da14c8f.webp' },
                { name: 'Navy',  image: 'assets/products/a6e44df43fbc.webp' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'up-knit-blazer',
            name: 'Zarek | Up Knit Blazer Notch Lapel Textured Finish',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            images: [
                'assets/products/d734eec4fed8.webp',
                'assets/products/0753b94bb937.webp',
                'assets/products/ffc2de1646d3.webp',
                'assets/products/8454c8fa391b.webp'
            ],
            colorVariants: [
                { name: 'Light Gray', image: 'assets/products/d734eec4fed8.webp' },
                { name: 'Navy Blue',  image: 'assets/products/b1ca186d773b.webp' },
                { name: 'Gray',       image: 'assets/products/58e3a3be10f5.webp' },
                { name: 'Dark Brown', image: 'assets/products/bfb4d0d0d9e6.webp' },
                { name: 'Black',      image: 'assets/products/8656e7792270.webp' }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'zip-up-stand-collar',
            name: 'Zarek | Zip-Up Jacket Stand Collar Textured Finish',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Dark Navy', images: [
                    'assets/products/0558b6bd302f.webp',
                    'assets/products/7ee22a60bd4b.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/6c152fbaee82.webp',
                    'assets/products/7ee22a60bd4b.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/b99cfe1d4364.webp',
                    'assets/products/7ee22a60bd4b.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/574b697be1da.webp',
                    'assets/products/7ee22a60bd4b.webp'
                ] },
                { name: 'Slate Gray', images: [
                    'assets/products/b8bac8396c3e.webp',
                    'assets/products/7ee22a60bd4b.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'knit-jacket-elbow-patch',
            name: 'Zarek | Button-Up Knit Jacket Ribbed Collar Elbow Patch',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Gray', images: [
                    'assets/products/79361d7c3bcf.webp',
                    'assets/products/aed26e8cf102.webp',
                    'assets/products/47a8fd9a9be3.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/ceb6365bcaf9.webp',
                    'assets/products/f630127eca46.webp',
                    'assets/products/0a2c74075e1b.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/acceeb3276dc.webp',
                    'assets/products/c49e98a136b4.webp',
                    'assets/products/f6c982cf46d6.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/3a3c1e7b1222.webp',
                    'assets/products/f66b4fd681f1.webp',
                    'assets/products/4762f28d8950.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'XL', '2XL', '3XL']
        },
        {
            id: 'bomber-jacket-ribbed',
            name: 'Zarek | Bomber Jacket Zip-Up Ribbed Trim Stand Collar',
            category: 'coats-jackets',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'assets/products/519d28b0296f.webp',
                    'assets/products/d41239a024a7.webp',
                    'assets/products/75f6e9feb866.webp'
                ] },
                { name: 'Sand Beige', images: [
                    'assets/products/3bf73e58ec9d.webp',
                    'assets/products/567d042cf856.webp',
                    'assets/products/432064bbcd52.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/02b704970a3f.webp',
                    'assets/products/0e5ce06d5742.webp',
                    'assets/products/75c47a24c786.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/02b94678fe80.webp',
                    'assets/products/f899eb9009b4.webp',
                    'assets/products/147ff9b9176a.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'zip-up-collared-smooth',
            name: 'Zarek | Zip-Up Collared Jacket Smooth Finish Clean Design',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Beige', images: [
                    'assets/products/1087caa3fe38.webp',
                    'assets/products/811138a8e7ad.webp',
                    'assets/products/675a277a36eb.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/23a34f2d9581.webp',
                    'assets/products/ed6826c15959.webp',
                    'assets/products/3d0a6fc52a8a.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/39a4ea7fd827.webp',
                    'assets/products/b9eca78ea8c2.webp',
                    'assets/products/c1d5cddf4c87.webp'
                ] }
            ],
            sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL']
        },
        {
            id: 'slim-fit-bomber-adam',
            name: 'Zarek | Slim Fit Zip-Up Bomber Jacket Ribbed',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Olive Green', images: [
                    'assets/products/680b50e9f06a.webp',
                    'assets/products/f68b492bea11.webp',
                    'assets/products/6a985ccf280b.webp'
                ] },
                { name: 'Khaki', images: [
                    'assets/products/405bb5cc0793.webp',
                    'assets/products/bfc4467912fb.webp',
                    'assets/products/a31a472a0891.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/c897f5b0b9ab.webp',
                    'assets/products/ae1efaacfd0f.webp',
                    'assets/products/544e22971fd1.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/51a735354987.webp',
                    'assets/products/60fb9c332a87.webp',
                    'assets/products/c5543937304c.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/70bf0988d55a.webp',
                    'assets/products/bf97f792352b.webp',
                    'assets/products/dfc9e49bd96d.webp'
                ] }
            ],
            sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL']
        },
        {
            id: 'knit-blazer-waffle',
            name: 'Zarek | Button-Up Knit Blazer Textured Waffle Weave',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/88fd7b246676.webp',
                    'assets/products/7644ea8f16be.webp',
                    'assets/products/5100f3371e0d.webp'
                ] },
                { name: 'Orange', images: [
                    'assets/products/6a912f96a438.webp',
                    'assets/products/c93c28d34216.webp',
                    'assets/products/6409ef8499d9.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/0a554176eaf6.webp',
                    'assets/products/1cfe836fd837.webp',
                    'assets/products/33d95c0d71b8.webp'
                ] },
                { name: 'Heather Gray', images: [
                    'assets/products/9ab9dbe3dfef.webp',
                    'assets/products/c90e4f305e5d.webp',
                    'assets/products/c15705c8c309.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/3564414a15fa.webp',
                    'assets/products/53a0ae1216c9.webp',
                    'assets/products/9badfb0157cc.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'quilted-bomber',
            name: 'Zarek | Quilted Bomber Jacket Zip-Up Ribbed Collar',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Olive Green', images: [
                    'assets/products/1fabdcfbb8bb.webp',
                    'assets/products/ee7bec37a955.webp',
                    'assets/products/3ca153517dc1.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/51e4761d086b.webp',
                    'assets/products/80ee28e1e787.webp',
                    'assets/products/70f438f0d4d3.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/74aac99413d5.webp',
                    'assets/products/5e9991d0bc10.webp',
                    'assets/products/68dac1f4a50b.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/6a2924a3b7fb.webp',
                    'assets/products/d534ba1b9a61.webp',
                    'assets/products/dbe5e8b790d7.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/b98138f03a8f.webp',
                    'assets/products/b84998097ffb.webp',
                    'assets/products/7a91df286c88.webp'
                ] },
                { name: 'Royal Blue', images: [
                    'assets/products/4e030d7d95b8.webp',
                    'assets/products/5f313433de3a.webp',
                    'assets/products/ed85b09ee03e.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'straight-fit-bomber',
            name: 'Zarek | Zip-Up Bomber Jacket Stand Collar Smooth Finish',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 99.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Khaki', images: [
                    'assets/products/0144d1cd0454.webp',
                    'assets/products/088141004355.webp',
                    'assets/products/48a7432f204b.webp'
                ] },
                { name: 'Charcoal Gray', images: [
                    'assets/products/4f638e210326.webp',
                    'assets/products/f8fe83865b97.webp',
                    'assets/products/81535a7f44b9.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/4520a3aec584.webp',
                    'assets/products/3caa69322af3.webp',
                    'assets/products/5d50b99da57a.webp'
                ] }
            ],
            sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']
        },
        {
            id: 'polo-collar-zip-jacket',
            name: 'Zarek | Polo Collar Zip-Up Jacket Welt Pockets',
            category: 'coats-jackets',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Charcoal Gray', images: [
                    'assets/products/f3de64b3b93a.webp',
                    'assets/products/f8265a33856b.webp',
                    'assets/products/faf8f6cfdaf3.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/61977c19f97f.webp',
                    'assets/products/1cf69a522289.webp',
                    'assets/products/270750f5a2f1.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/c21fa150a5a8.webp',
                    'assets/products/1f8cdccc9714.webp',
                    'assets/products/a9466827db0c.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/0ae5d4bd2adc.webp',
                    'assets/products/24bef1561c5c.webp',
                    'assets/products/686d5138aa66.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'leather-look-fold-collar',
            name: 'Zarek | Leather Look Jacket Fold Collar Clean Panel',
            category: 'coats-jackets',
            price: 99.95,
            originalPrice: 199.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Brown', images: [
                    'assets/products/a504fe482c7f.webp',
                    'assets/products/f90166c0bc42.webp',
                    'assets/products/8f0556797b21.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/b6571eba4055.webp',
                    'assets/products/4ae36abb3559.webp',
                    'assets/products/e3a755ae0cf8.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'leather-look-chest-pockets',
            name: 'Zarek | Leather Look Jacket Flap Chest Pockets Elastic Hem',
            category: 'coats-jackets',
            price: 149.95,
            originalPrice: null,
            badge: null,
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/6eb93cb875e7.webp',
                    'assets/products/7fe6ba1a9a71.webp',
                    'assets/products/731dfebf6e77.webp'
                ] },
                { name: 'Brown', images: [
                    'assets/products/3eaa35dacfb1.webp',
                    'assets/products/02a40f065b24.webp',
                    'assets/products/130d77e02542.webp'
                ] }
            ],
            sizes: ['4XS', '3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'quilted-vest-vneck',
            name: 'Zarek | Button-Up Quilted Vest V-Neck Zip Pockets',
            category: 'coats-jackets',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Army Green', images: [
                    'assets/products/bdc31ac9b400.webp',
                    'assets/products/3543a0e42619.webp',
                    'assets/products/cf20971b8d8e.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/14f2ab9aa60c.webp',
                    'assets/products/a868c784b894.webp',
                    'assets/products/c168a891c221.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/4689b32f9881.webp',
                    'assets/products/ba0b67162984.webp',
                    'assets/products/9de0ca73864f.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'zip-up-hooded-quilted-puffer',
            name: 'Zarek | Lightweight Zip-Up Quilted Puffer Jacket Hooded',
            category: 'coats-jackets',
            price: 119.95,
            originalPrice: 199.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Gray / Light Gray', images: [
                    'assets/products/be4769c5fb07.webp',
                    'assets/products/9fc4b1fc21ef.webp',
                    'assets/products/2442446a5fff.webp'
                ] },
                { name: 'Black / Graphite Gray', images: [
                    'assets/products/4a925ff502a3.webp',
                    'assets/products/99489b07bb91.webp',
                    'assets/products/1537afd0a482.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/3ceb9d98c61e.webp',
                    'assets/products/09d7f009427b.webp',
                    'assets/products/7a89917783a1.webp'
                ] },
                { name: 'Green / Black', images: [
                    'assets/products/b81b4f7b1517.webp',
                    'assets/products/545d993c6e49.webp',
                    'assets/products/88c2ec4613c4.webp'
                ] },
                { name: 'Dark Navy', images: [
                    'assets/products/a37b11f2227c.webp',
                    'assets/products/c21b9fb10a14.webp',
                    'assets/products/4e992436eb5e.webp'
                ] },
                { name: 'Olive', images: [
                    'assets/products/66e677776a1b.webp',
                    'assets/products/da91efc98561.webp',
                    'assets/products/f45a0d894138.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'slim-zip-up-vest-stand-collar',
            name: 'Zarek | Slim Fit Zip-Up Vest Stand Collar',
            category: 'coats-jackets',
            price: 59.95,
            originalPrice: 99.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/1a979c1c83be.webp',
                    'assets/products/693d43078708.webp',
                    'assets/products/8f8540f646aa.webp'
                ] },
                { name: 'Slate Blue', images: [
                    'assets/products/5f5e1715b149.webp',
                    'assets/products/84834005c978.webp',
                    'assets/products/1cc9214b3b2e.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/f07c59ec5d15.webp',
                    'assets/products/abb8e5b4f017.webp',
                    'assets/products/a15c04eb2eb1.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/bc6296e2cf89.webp',
                    'assets/products/d0b233eb2949.webp',
                    'assets/products/96057b9d5a21.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'soft-zip-up-stand-collar-vest',
            name: 'Zarek | Zip-Up Stand Collar Textured Vest',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 99.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Gray', images: [
                    'assets/products/704ed30f4565.webp',
                    'assets/products/3ceefb08d3e8.webp',
                    'assets/products/f0f52445fb1e.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/6132b0391980.webp',
                    'assets/products/e0fcd1c9991f.webp',
                    'assets/products/26b119b7fac8.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/206d1c34962a.webp',
                    'assets/products/256592984b05.webp',
                    'assets/products/618ecae0f4ce.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/0d78545e5c12.webp',
                    'assets/products/6fe3636af2d0.webp',
                    'assets/products/ce051d16efee.webp'
                ] }
            ],
            sizes: ['3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']
        },
        {
            id: 'quilted-zip-up-puffer-vest-vneck',
            name: 'Zarek | Quilted Zip-Up Puffer Vest V-Neck Regular Fit',
            category: 'coats-jackets',
            price: 209.95,
            originalPrice: 299.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/34c3f5ec8b51.webp',
                    'assets/products/b4db0ab87b07.webp',
                    'assets/products/323442552e94.webp'
                ] },
                { name: 'Taupe', images: [
                    'assets/products/c5379e0570eb.webp',
                    'assets/products/2ac7aed50e2b.webp',
                    'assets/products/b783adaf2642.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/bc8c3d363705.webp',
                    'assets/products/ccffefab0974.webp',
                    'assets/products/767a5e3a0006.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/e6bba3f718c5.webp',
                    'assets/products/5b547dec1265.webp',
                    'assets/products/582b27cca3e2.webp'
                ] }
            ],
            sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL']
        },
        {
            id: 'quilted-hooded-stretch-sleeves',
            name: 'Zarek | Quilted Hooded Zip-Up Jacket Stretch Sleeves',
            category: 'coats-jackets',
            price: 119.95,
            originalPrice: 199.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Gray', images: [
                    'assets/products/b77942ac54f4.webp',
                    'assets/products/89ad7d76efe4.webp',
                    'assets/products/02d23455167e.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/dced278c3a60.webp',
                    'assets/products/2ee9116bd5d4.webp',
                    'assets/products/84aacf9aff47.webp'
                ] }
            ],
            sizes: ['4XS', '3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'quilted-hooded-bomber',
            name: 'Zarek | Quilted Hooded Zip-Up Bomber Jacket',
            category: 'coats-jackets',
            price: 149.95,
            originalPrice: 199.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'assets/products/5d6e705a8347.webp',
                    'assets/products/e353f183823f.webp',
                    'assets/products/2682f70352b6.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/16ad75376a73.webp',
                    'assets/products/6f988b745fe9.webp',
                    'assets/products/72d6cb464eeb.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/93d6e034d0ce.webp',
                    'assets/products/540b01f83798.webp',
                    'assets/products/a3e690706e2e.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'zip-up-polo-collar-jacket',
            name: 'Zarek | Zip-Up Polo Collar Jacket Regular Fit',
            category: 'coats-jackets',
            price: 119.95,
            originalPrice: 239.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy', images: [
                    'assets/products/639bab229c4b.webp',
                    'assets/products/dd4df25b3ff1.webp',
                    'assets/products/1a7aca98e252.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/f143132f3adf.webp',
                    'assets/products/a7f021fb6c8a.webp',
                    'assets/products/745e542e78bb.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL']
        },
        {
            id: 'houndstooth-blazer',
            name: 'Zarek | Single-Button Houndstooth Blazer Notch Lapel',
            category: 'coats-jackets',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Checkered', images: [
                    'assets/products/e71d67fe2751.webp',
                    'assets/products/a8c761b56232.webp',
                    'assets/products/1c72307da095.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M']
        },
        {
            id: 'vegan-leather-zip-front',
            name: 'Zarek | Zip-Front Vegan Leather Jacket Clean Outerwear',
            category: 'coats-jackets',
            price: 89.95,
            originalPrice: 119.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/51011f1d3e7d.webp',
                    'assets/products/3e555688b701.webp',
                    'assets/products/199f3c016831.webp'
                ] },
                { name: 'Brown', images: [
                    'assets/products/1679547b1873.webp',
                    'assets/products/c3a1c0315ded.webp',
                    'assets/products/553b20825252.webp'
                ] }
            ],
            sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL']
        },
        {
            id: 'hooded-vegan-leather-jacket',
            name: 'Zarek | Hooded Vegan Leather Jacket Zip Front Utility',
            category: 'coats-jackets',
            price: 79.95,
            originalPrice: 99.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Dark Gray', images: [
                    'assets/products/48a8eef2e89f.webp',
                    'assets/products/d87e187e51b0.webp',
                    'assets/products/36e2c42cb01b.webp'
                ] },
                { name: 'Dark Brown', images: [
                    'assets/products/450a467e29dd.webp',
                    'assets/products/99951188ee67.webp',
                    'assets/products/bad1e93510c0.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/2e4335a99b42.webp',
                    'assets/products/79c6ffc532f9.webp',
                    'assets/products/b23c7719a05e.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },

        // ───────────────── TOPS ─────────────────
        {
            id: 'stand-collar-henley',
            name: 'Zarek | Stand Collar Henley Shirt Short Sleeve',
            category: 'tops',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Khaki', images: [
                    'assets/products/ba7cb73393d8.webp',
                    'assets/products/550c6002c9c4.webp'
                ] },
                { name: 'Slate Blue', images: [
                    'assets/products/cb35c5ffef9e.webp',
                    'assets/products/5e89e46e6f62.webp'
                ] },
                { name: 'Dark Navy', images: [
                    'assets/products/fe13792306a5.webp',
                    'assets/products/f0d510c243ad.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/aff1871d79ef.webp',
                    'assets/products/8bc92a88269e.webp'
                ] },
                { name: 'Dark Blue', images: [
                    'assets/products/f320ac0e69a3.webp',
                    'assets/products/d9015bf644a9.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/a7935619c384.webp',
                    'assets/products/152846acf5a0.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'v-notch-tshirt',
            name: 'Zarek | V-Notch Neck Short Sleeve T-Shirt',
            category: 'tops',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'White', images: [
                    'assets/products/2450cdef7816.webp',
                    'assets/products/048f9a3397ba.webp',
                    'assets/products/d2a9659701c9.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'assets/products/8702c7f09d06.webp',
                    'assets/products/14e5d608734b.webp',
                    'assets/products/0e16cb425622.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/0d3ccfd2a3ae.webp',
                    'assets/products/7f95ee5301f4.webp',
                    'assets/products/e2d686fa28d2.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'textured-crew-neck',
            name: 'Zarek | Textured Panel Crew Neck Shirt Regular Fit',
            category: 'tops',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Light Blue', images: [
                    'assets/products/1952068358e9.webp',
                    'assets/products/a7b6292f0c1f.webp',
                    'assets/products/a42515689d28.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/8d77955de84f.webp',
                    'assets/products/97e255c65bdc.webp',
                    'assets/products/1d218e4f43f8.webp'
                ] },
                { name: 'Sage Green', images: [
                    'assets/products/802b306da875.webp',
                    'assets/products/8a0bc6986213.webp',
                    'assets/products/8915220a0cb3.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'ribbed-vneck-knit',
            name: 'Zarek | Ribbed V-Neck Knit T-Shirt Short Sleeve',
            category: 'tops',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/f08a79259fe1.webp',
                    'assets/products/1283536d119a.webp',
                    'assets/products/566ba7a6b7d4.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/de49982e740f.webp',
                    'assets/products/74f90d1ae833.webp',
                    'assets/products/4feefa857beb.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'assets/products/f08a238a4b52.webp',
                    'assets/products/62bda4523e30.webp',
                    'assets/products/1e4ac2e10e4e.webp'
                ] },
                { name: 'Brown', images: [
                    'assets/products/0c6149f146f2.webp',
                    'assets/products/e5cc1724ce48.webp',
                    'assets/products/64d13bad551c.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/dc0390a4e986.webp',
                    'assets/products/976240a91110.webp',
                    'assets/products/32f16b59942c.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/c73dcb746fdd.webp',
                    'assets/products/ba6a75ea5aff.webp',
                    'assets/products/0267e9a9654a.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/f9b77768a3dc.webp',
                    'assets/products/68e7eb7fdd2b.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'tracksuit-stripe-4color',
            name: 'Zarek | Zip-Up Tracksuit Set Side Stripe — 4 Colors',
            category: 'tops',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'White', images: [
                    'assets/products/9637591ba4c3.webp',
                    'assets/products/8bc738a1646e.webp',
                    'assets/products/9513479cc556.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/002b5eb59b1b.webp',
                    'assets/products/cbc111599c6e.webp',
                    'assets/products/fd4a594f3f86.webp'
                ] },
                { name: 'Brown', images: [
                    'assets/products/3983d4e4b58e.webp',
                    'assets/products/54a4964c5aa0.webp',
                    'assets/products/5be2fb85a740.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/f1066e1fa885.webp',
                    'assets/products/28c9597e3204.webp',
                    'assets/products/4e333e670a1f.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'tracksuit-stripe-2color',
            name: 'Zarek | Tracksuit Set Zip-Up Jacket Drawstring Pants Stripe',
            category: 'tops',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'White', images: [
                    'assets/products/b9a10127d8f1.webp',
                    'assets/products/d21d26dc6fe7.webp',
                    'assets/products/10192a34680c.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/292bedf3b4b8.webp',
                    'assets/products/4381bea82317.webp',
                    'assets/products/a0e74a7a31da.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'crew-neck-raglan-longsleeve',
            name: 'Zarek | Crew Neck Raglan Long Sleeve Athletic Shirt',
            category: 'tops',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Brown', images: [
                    'assets/products/f4fcd26b85c5.webp',
                    'assets/products/8ddccbbf307b.webp',
                    'assets/products/0849ce5d9801.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/bada3f9dd640.webp',
                    'assets/products/e52613ddbe91.webp',
                    'assets/products/6599651a8430.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/0d8b43817d4d.webp',
                    'assets/products/254b14576aad.webp',
                    'assets/products/f4295fe5449a.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/30ac072e2788.webp',
                    'assets/products/f1176689d9e3.webp',
                    'assets/products/37b3d02a03c7.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'quarter-zip-pullover',
            name: 'Zarek | Long Sleeve Quarter-Zip Stand Collar Shirt Slim Fit',
            category: 'tops',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/9c1da7f63a4b.webp',
                    'assets/products/706714c9c646.webp',
                    'assets/products/871a4f4f18a4.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/76061feed8c2.webp',
                    'assets/products/2b07fb6d6d6e.webp',
                    'assets/products/259e8a0703ef.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/07f2cda362df.webp',
                    'assets/products/4015fe8dabff.webp',
                    'assets/products/d6e5383ea4ef.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/88452bc397ad.webp',
                    'assets/products/a4f51debdb0d.webp',
                    'assets/products/b157d4788615.webp'
                ] },
                { name: 'Khaki', images: [
                    'assets/products/95e358448f6f.webp',
                    'assets/products/3ac9ebdc92c2.webp',
                    'assets/products/7a4c96fe7ddf.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'camp-collar-shirt',
            name: 'Zarek | Short Sleeve Button-Up Camp Collar Shirt',
            category: 'tops',
            price: 49.95,
            originalPrice: 99.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/395da749a925.webp',
                    'assets/products/704379a74c58.webp'
                ] },
                { name: 'Green', images: [
                    'assets/products/bc78d03ea1df.webp',
                    'assets/products/aa904e9a5db2.webp'
                ] },
                { name: 'Blue', images: [
                    'assets/products/8451d41ee097.webp',
                    'assets/products/d6e3a8020218.webp'
                ] },
                { name: 'Purple', images: [
                    'assets/products/b541d2376d7f.webp',
                    'assets/products/2853127b5579.webp'
                ] },
                { name: 'Yellow', images: [
                    'assets/products/c63f3022067f.webp',
                    'assets/products/255f71ab73fa.webp'
                ] },
                { name: 'Teal', images: [
                    'assets/products/b969a5012040.webp',
                    'assets/products/c11a853d36c4.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/d23f72aee319.webp',
                    'assets/products/33253a654b6d.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/4abaabf14e20.webp',
                    'assets/products/7307d9553b6c.webp'
                ] },
                { name: 'Orange', images: [
                    'assets/products/7b2d66f681f4.webp',
                    'assets/products/aa6f344373f1.webp'
                ] }
            ],
            sizes: ['3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'pullover-hoodie',
            name: 'Zarek | Slim Fit Pullover Hoodie Long Sleeve',
            category: 'tops',
            price: 49.95,
            originalPrice: 99.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Sky Blue', images: [
                    'assets/products/ca12aff96deb.webp',
                    'assets/products/405ba0eca925.webp',
                    'assets/products/33d02745ed38.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/965fed59957e.webp',
                    'assets/products/17e1b68ef9a1.webp',
                    'assets/products/6e31a5f1e186.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/9a747bdee73b.webp',
                    'assets/products/9dbf3e16bf63.webp',
                    'assets/products/49ab40bbabc3.webp'
                ] },
                { name: 'Khaki', images: [
                    'assets/products/ddeea044c0d8.webp',
                    'assets/products/92ddb845529d.webp',
                    'assets/products/521abe521cc1.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/1a03b6236f03.webp',
                    'assets/products/e75c6b67339f.webp',
                    'assets/products/a4967dbfec80.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/4ed35717f6f6.webp',
                    'assets/products/75b7350e9927.webp',
                    'assets/products/4fd6c9820be4.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL']
        },
        {
            id: 'mock-neck-longsleeve',
            name: 'Zarek | Mock Neck Long Sleeve Pullover Slim Fit',
            category: 'tops',
            price: 49.95,
            originalPrice: 99.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'White', images: [
                    'assets/products/32236473d63e.webp',
                    'assets/products/868b06df81ef.webp',
                    'assets/products/f9b7a13d3d1e.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/d2139b6ace5a.webp',
                    'assets/products/1969cedaf7fd.webp',
                    'assets/products/36bd8a13a485.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L']
        },
        {
            id: 'crew-neck-athletic-tee',
            name: 'Zarek | Crew Neck Athletic T-Shirt Panel Stitching',
            category: 'tops',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/61b0c3fe903f.webp',
                    'assets/products/c4573994ad19.webp',
                    'assets/products/d2eff3fbfa05.webp'
                ] },
                { name: 'Light Blue', images: [
                    'assets/products/6e756a2823af.webp',
                    'assets/products/96e32ecedfeb.webp',
                    'assets/products/0144bb8d0c05.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/0b0ccedd6188.webp',
                    'assets/products/c3ca0fa87958.webp',
                    'assets/products/232f046abe07.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/9d03b9cbee79.webp',
                    'assets/products/b64d4f64af7f.webp',
                    'assets/products/83637c3363d6.webp'
                ] },
                { name: 'Teal', images: [
                    'assets/products/2eb11cefb2a7.webp',
                    'assets/products/c4bbe538f0b2.webp',
                    'assets/products/f68eb92f47fa.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'textured-spread-collar-shirt',
            name: 'Zarek | Textured Button-Up Shirt Spread Collar',
            category: 'tops',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Light Beige', images: [
                    'assets/products/5fbfa00baf94.webp',
                    'assets/products/5e7a7c28d6d0.webp',
                    'assets/products/e172fbd66d17.webp'
                ] },
                { name: 'Light Blue', images: [
                    'assets/products/ed2cea214843.webp',
                    'assets/products/53f244b67d0d.webp',
                    'assets/products/11b47f4d6e88.webp'
                ] },
                { name: 'Dusty Pink', images: [
                    'assets/products/628348be60fe.webp',
                    'assets/products/7304f1c2c42e.webp',
                    'assets/products/b32f320c65c5.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/dc7bbe2677f3.webp',
                    'assets/products/6c58e5aba2ef.webp',
                    'assets/products/55bb63d9cfb4.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/164d021234dd.webp',
                    'assets/products/5cd8143e97e6.webp',
                    'assets/products/4eb214fb45af.webp'
                ] },
                { name: 'Light Green', images: [
                    'assets/products/1541aec29da4.webp',
                    'assets/products/e7eb68e26c92.webp',
                    'assets/products/3a9bfc39924d.webp'
                ] },
                { name: 'Sage Green', images: [
                    'assets/products/7f25fae3f16c.webp',
                    'assets/products/0a13776340b8.webp',
                    'assets/products/cbcabfd5d098.webp'
                ] },
                { name: 'Dark Navy', images: [
                    'assets/products/488428ce1a10.webp',
                    'assets/products/e4f02036afe3.webp',
                    'assets/products/fd6af7b594b2.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/72887c4862c6.webp',
                    'assets/products/9d91bbdba3dd.webp',
                    'assets/products/a257ab7ac890.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'vertical-pleated-stand-collar-shirt',
            name: 'Zarek | Short Sleeve Button-Up Shirt Vertical Pleated Stand Collar',
            category: 'tops',
            price: 49.95,
            originalPrice: null,
            badge: null,
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/1e0f3348fd48.webp',
                    'assets/products/e2745d1e7e12.webp',
                    'assets/products/cbab7bd754b4.webp'
                ] },
                { name: 'Beige', images: [
                    'assets/products/15ba424501f0.webp',
                    'assets/products/8886cafbbf0a.webp',
                    'assets/products/df207465a803.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/6c7d34a03de3.webp',
                    'assets/products/d5ff80e786a1.webp',
                    'assets/products/89f21c725db0.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'sleeveless-hooded-pullover',
            name: 'Zarek | Sleeveless Drawstring Hooded Pullover Relaxed Fit',
            category: 'tops',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Light Blue', images: [
                    'assets/products/6b26917f3285.webp',
                    'assets/products/8c1e469da093.webp',
                    'assets/products/55e44d945e8e.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/5bc349624f78.webp',
                    'assets/products/bcf1b2501337.webp',
                    'assets/products/7fc77291f89f.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/dc1b6e7ea21b.webp',
                    'assets/products/9b2993be99d5.webp',
                    'assets/products/c66890389866.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'assets/products/523981740275.webp',
                    'assets/products/671f7c196d8b.webp',
                    'assets/products/882bedfd3143.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'sleeveless-crewneck-tank',
            name: 'Zarek | Sleeveless Crewneck Tank Curved Hem',
            category: 'tops',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/b26bcc9b7690.webp',
                    'assets/products/750d3b59c395.webp',
                    'assets/products/ab09ad0e354f.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/d57484cad453.webp',
                    'assets/products/f0daf2f01cb2.webp',
                    'assets/products/1d7bc305ff7b.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/47306c3e734e.webp',
                    'assets/products/dda377e1807d.webp',
                    'assets/products/bdb7353c1737.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/5028891a7ad5.webp',
                    'assets/products/3db476b255e0.webp',
                    'assets/products/6d522f729bc1.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/b53b7ff62c43.webp',
                    'assets/products/1f20ec38d9e7.webp',
                    'assets/products/f912b9575451.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L']
        },
        {
            id: 'striped-shortsleeve-shirt',
            name: 'Zarek | Button-Up Striped Short Sleeve Shirt Vertical Stripes',
            category: 'tops',
            price: 49.95,
            originalPrice: 99.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/d8a54213c04a.webp',
                    'assets/products/8ebd6bf6333d.webp'
                ] },
                { name: 'Light Blue', images: [
                    'assets/products/d2de5b9edac8.webp',
                    'assets/products/10d8704321a6.webp'
                ] },
                { name: 'Green', images: [
                    'assets/products/2c71f013780d.webp',
                    'assets/products/19b38d7d7be8.webp'
                ] },
                { name: 'Yellow', images: [
                    'assets/products/0fdc5833eec7.webp',
                    'assets/products/d54136c60739.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/c64975f76ef0.webp',
                    'assets/products/ed9e9f1496db.webp'
                ] },
                { name: 'Navy', images: [
                    'assets/products/6f685539a2a9.webp',
                    'assets/products/dc98a13ef953.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'striped-longsleeve-shirt',
            name: 'Zarek | Striped Button-Up Shirt Long Sleeve Vertical Stripes',
            category: 'tops',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Red', images: [
                    'assets/products/ddb6145d26c0.webp',
                    'assets/products/69110facb7e0.webp',
                    'assets/products/03f3573dff8a.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/7917d6b62a33.webp',
                    'assets/products/077c0e988504.webp',
                    'assets/products/0e1bbd2ede00.webp'
                ] },
                { name: 'Yellow', images: [
                    'assets/products/d0dffcc1623e.webp',
                    'assets/products/e42607dce78f.webp',
                    'assets/products/532699ee7d15.webp'
                ] },
                { name: 'Light Blue', images: [
                    'assets/products/172b52f9749a.webp',
                    'assets/products/b2b8157b4e46.webp',
                    'assets/products/2e9be9e6ec26.webp'
                ] },
                { name: 'Green', images: [
                    'assets/products/20dbc7a113ff.webp',
                    'assets/products/a85c568dbdb1.webp',
                    'assets/products/7f5a2d72a068.webp'
                ] },
                { name: 'Blue', images: [
                    'assets/products/6adc817eee14.webp',
                    'assets/products/f0eb93e35ed3.webp',
                    'assets/products/53b38d4f2dae.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'polo-contrast-trim',
            name: 'Zarek | Short Sleeve Polo Shirt Contrast Trim Button-Up',
            category: 'tops',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy', images: [
                    'assets/products/3dc8cbc7925c.webp',
                    'assets/products/cc1d8fe6cf8e.webp',
                    'assets/products/06494d2d9183.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/58a298897469.webp',
                    'assets/products/c8202fa9d828.webp',
                    'assets/products/94df3caf3ab6.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'polo-pullover-solid',
            name: 'Zarek | Short Sleeve Polo Shirt Pullover Solid Color',
            category: 'tops',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/38db6be6d395.webp',
                    'assets/products/b9892f40f9a5.webp',
                    'assets/products/5b4f6762d59f.webp'
                ] },
                { name: 'Mint', images: [
                    'assets/products/5e2069b0526b.webp',
                    'assets/products/9d8e4e4c968e.webp',
                    'assets/products/adfcc49ee415.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/9a63d343b0af.webp',
                    'assets/products/9fb597150dba.webp',
                    'assets/products/b9f403ef55ad.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/443d6fde05b2.webp',
                    'assets/products/9021b1076e4c.webp',
                    'assets/products/9e095be6fae0.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/39f88a3f1c90.webp',
                    'assets/products/3fe9bee7b7d0.webp',
                    'assets/products/f089f3cb8735.webp'
                ] },
                { name: 'Burgundy', images: [
                    'assets/products/9357b320be12.webp',
                    'assets/products/7098ac2c54f9.webp',
                    'assets/products/80aa96817ad1.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },

        // ───────────────── PANTS ─────────────────
        {
            id: 'cargo-pants-flap',
            name: 'Zarek | Cargo Pants Straight Fit Button Waist Flap Pockets',
            category: 'pants',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            images: [
                'assets/products/883f74ba553e.webp',
                'assets/products/d2127ec76775.webp',
                'assets/products/34ca880bb93f.webp',
                'assets/products/673798f15630.webp'
            ],
            colorVariants: [
                { name: 'Olive Gray',    image: 'assets/products/883f74ba553e.webp' },
                { name: 'Charcoal Gray', image: 'assets/products/673798f15630.webp' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'cargo-pants-multi',
            name: 'Zarek | Cargo Pants Regular Fit Button Waist Multi Pocket',
            category: 'pants',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            images: [
                'assets/products/00309f2d060e.webp',
                'assets/products/942e065d0f22.webp',
                'assets/products/127e6a473be8.webp',
                'assets/products/057abddc53d5.webp'
            ],
            colorVariants: [
                { name: 'Khaki Beige', image: 'assets/products/00309f2d060e.webp' },
                { name: 'Navy Blue',   image: 'assets/products/127e6a473be8.webp' },
                { name: 'Olive Green', image: 'assets/products/057abddc53d5.webp' },
                { name: 'Black',       image: 'assets/products/1867093e957b.webp' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'chino-shorts',
            name: 'Zarek | Chino Shorts Straight Fit Flat Front',
            category: 'pants',
            price: 44.94,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Olive Green', images: [
                    'assets/products/9238fe40c458.webp',
                    'assets/products/f1e27b3d67c8.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/e3779d38bc81.webp',
                    'assets/products/d968b65adb71.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'assets/products/d7fd1ef037ed.webp',
                    'assets/products/5483eba78107.webp'
                ] },
                { name: 'Sky Blue', images: [
                    'assets/products/ec5f062cc313.webp',
                    'assets/products/a84b8e73940c.webp'
                ] },
                { name: 'Brown', images: [
                    'assets/products/eabfe1ebdca6.webp',
                    'assets/products/28f610e99dd3.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/4476d55cdd54.webp',
                    'assets/products/46f43cef6e8d.webp'
                ] },
                { name: 'Charcoal Gray', images: [
                    'assets/products/d8538e2d6c10.webp',
                    'assets/products/4cf559bd525f.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/7c11be22fc6d.webp',
                    'assets/products/1709898e1ec4.webp'
                ] },
                { name: 'Pink', images: [
                    'assets/products/de5470818a49.webp',
                    'assets/products/f8f770c37c33.webp'
                ] },
                { name: 'Khaki', images: [
                    'assets/products/1638ab2cc128.webp',
                    'assets/products/e7b079690dc9.webp',
                    'assets/products/385a7bc94875.webp'
                ] }
            ],
            sizes: ['30', '32', '34', '36', '38']
        },
        {
            id: 'cargo-shorts-drawstring-relaxed',
            name: 'Zarek | Cargo Shorts Relaxed Fit Drawstring Elastic Waist',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Slate Gray', images: [
                    'assets/products/d015b59ab44f.webp?v=1773247880&width=1024',
                    'assets/products/73480f6789de.webp?v=1773247880&width=1024',
                    'assets/products/d2622b4fb7ec.webp?v=1773247880&width=1024'
                ] },
                { name: 'Black', images: [
                    'assets/products/e3316ac816b5.webp?v=1773247880&width=1024',
                    'assets/products/86c5039a031a.webp?v=1773248140&width=1024',
                    'assets/products/fdaa03adc88b.webp?v=1773248140&width=1024'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'cargo-shorts-relaxed-fit',
            name: 'Zarek | Cargo Shorts Relaxed Fit',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Slate Gray', images: [
                    'assets/products/d015b59ab44f.webp',
                    'assets/products/73480f6789de.webp',
                    'assets/products/d2622b4fb7ec.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/e3316ac816b5.webp',
                    'assets/products/86c5039a031a.webp',
                    'assets/products/fdaa03adc88b.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'cargo-shorts-twin-flap',
            name: 'Zarek | Cargo Shorts Twin Flap Pockets',
            category: 'pants',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Slate Blue', images: [
                    'assets/products/78144c30a649.webp',
                    'assets/products/46bbda579437.webp',
                    'assets/products/1ad79d0133a5.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/f8f4ff93cbfd.webp',
                    'assets/products/72cdf683fc45.webp',
                    'assets/products/18ba8ba4731e.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/ad3894442296.webp',
                    'assets/products/ff782dd15c0e.webp',
                    'assets/products/1f4eab64270c.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/e97533cae877.webp',
                    'assets/products/3642e49302e9.webp',
                    'assets/products/13afa3e75bc8.webp'
                ] },
                { name: 'Warm Khaki', images: [
                    'assets/products/8999d92b98a6.webp',
                    'assets/products/d351eff8d7dc.webp',
                    'assets/products/6d40283e6794.webp'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'track-pants-straight-leg',
            name: 'Zarek | Track Pants Straight Leg Fit',
            category: 'pants',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/385a2f6323a0.webp',
                    'assets/products/1e215a2acb3d.webp',
                    'assets/products/c6759166026a.webp'
                ] },
                { name: 'Gray', images: [
                    'assets/products/f221e2120a8a.webp',
                    'assets/products/f801c5486bf6.webp',
                    'assets/products/a3306e28bfe1.webp'
                ] },
                { name: '2-Piece (Black)', images: [
                    'assets/products/e8cfca868e4a.webp',
                    'assets/products/d87e651529b2.webp',
                    'assets/products/f37cf33a45f8.webp'
                ] },
                { name: '2-Piece (Black & Gray)', images: [
                    'assets/products/41a0e0666fdc.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L']
        },
        {
            id: 'lounge-pants-straight-leg',
            name: 'Zarek | Straight Leg Lounge Pants',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'assets/products/621edc76571f.webp',
                    'assets/products/fe9fb86d611c.webp',
                    'assets/products/08b092261a9b.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/9e0c7ef87796.webp',
                    'assets/products/96097493dff9.webp',
                    'assets/products/07eae8330730.webp'
                ] },
                { name: 'Dark Blue', images: [
                    'assets/products/95dcadd0ad69.webp',
                    'assets/products/90b236bbba02.webp',
                    'assets/products/d6b788a70beb.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'tapered-pants-zip-pockets',
            name: 'Zarek | Athletic Tapered Pants Zip Pockets',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'assets/products/c937f884a74b.webp',
                    'assets/products/f68f5f092389.webp'
                ] },
                { name: 'Black / Blue Waistband', images: [
                    'assets/products/77b27ff1eb88.webp',
                    'assets/products/3eb01c0289fb.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/36adcbf2d681.webp',
                    'assets/products/ed6bc195ab30.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/33ef162d7b86.webp',
                    'assets/products/1c3defe38121.webp'
                ] },
                { name: 'Light Blue', images: [
                    'assets/products/099580d2c38c.webp',
                    'assets/products/016f5c78747d.webp'
                ] },
                { name: 'Green', images: [
                    'assets/products/cc6b0b4830f5.webp',
                    'assets/products/5e9bb262738d.webp'
                ] },
                { name: 'Gray / Blue Waistband', images: [
                    'assets/products/c6899736192b.webp',
                    'assets/products/5c96c974517a.webp'
                ] },
                { name: 'Red', images: [
                    'assets/products/9b55f93a2273.webp',
                    'assets/products/20c9ad11e3a5.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'assets/products/29154b4c7103.webp',
                    'assets/products/91d87094c3dd.webp'
                ] },
                { name: 'Blue', images: [
                    'assets/products/565e95927d78.webp',
                    'assets/products/6337d8e3b958.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L']
        },
        {
            id: 'lounge-pants-drawstring-straight',
            name: 'Zarek | Drawstring Straight Leg Lounge Pants',
            category: 'pants',
            price: 59.95,
            originalPrice: 99.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'assets/products/84b1ea6fb08e.webp',
                    'assets/products/803612bd2833.webp'
                ] },
                { name: 'White', images: [
                    'assets/products/8d43a1b627ed.webp',
                    'assets/products/9d6f2b18503d.webp'
                ] },
                { name: 'Khaki', images: [
                    'assets/products/2c183ff3fcc5.webp',
                    'assets/products/b46d23cdc5de.webp'
                ] },
                { name: 'Light Gray', images: [
                    'assets/products/cd6dc4281bd1.webp',
                    'assets/products/ee23ff5a19e0.webp'
                ] },
                { name: 'Brown', images: [
                    'assets/products/7193fe06fb87.webp',
                    'assets/products/cbd4e856c984.webp'
                ] },
                { name: 'Sage Green', images: [
                    'assets/products/2206e91a5759.webp',
                    'assets/products/061fdc8eabeb.webp'
                ] },
                { name: 'Olive Green', images: [
                    'assets/products/8f2449004ee9.webp',
                    'assets/products/703215b85c6a.webp'
                ] },
                { name: 'Charcoal Gray', images: [
                    'assets/products/2ce2d0955730.webp',
                    'assets/products/d1333a08f850.webp'
                ] },
                { name: 'Sky Blue', images: [
                    'assets/products/e1755841f487.webp',
                    'assets/products/38a2040284b3.webp'
                ] },
                { name: 'Mustard', images: [
                    'assets/products/a176798d0583.webp',
                    'assets/products/7f5638a01bfc.webp'
                ] },
                { name: 'Steel Blue', images: [
                    'assets/products/84ece4dad19f.webp',
                    'assets/products/96239e5142a0.webp'
                ] },
                { name: 'Black', images: [
                    'assets/products/fd3cf828c69d.webp',
                    'assets/products/197fb95bd1ef.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '3XL']
        },
        {
            id: 'chino-trousers-elastic-waist',
            name: 'Zarek | Chino Trousers Elastic Waist Regular Fit',
            category: 'pants',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPT_Image_23_jun_2025_17_49_12_2ce63c56-9f02-40a7-961c-5eab82457f63.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPT_Image_23_jun_2025_17_55_37_ad67cb42-7fde-46d4-8dca-60c47d1dd575.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPT_Image_23_jun_2025_18_42_37.png'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPT_Image_23_jun_2025_18_55_53_f7443a01-56a5-4312-906e-b3c1b2a3e648.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPT_Image_23_jun_2025_18_44_49.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPT_Image_23_jun_2025_18_47_38.png'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'drawstring-straight-leg-elastic-waist',
            name: 'Zarek | Drawstring Straight Leg Pants Elastic Waist',
            category: 'pants',
            price: 59.95,
            colorVariants: [
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__do-not-change-anything-just-change-the-size-of-the__88997.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square-remove-th__88991.webp'
                ] },
                { name: 'Olive Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__dont-change-anything-just-change-the-size-of-the-i__89000.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__do-not-change-anything-just-change-the-size-of-the__88994.webp'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__dont-change-anything-just-change-the-size-of-the-i__89001.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__do-not-change-anything-just-change-the-size-of-the__88995.webp'
                ] },
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__dont-change-anything-just-change-the-size-of-the-i__88999.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square-remove-th__88993.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__dont-change-anything-just-change-the-size-of-the-i__88998.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square-remove-th__88992.webp'
                ] },
                { name: 'Navy', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__dont-change-anything-just-change-the-size-of-the-i__89002.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__do-not-change-anything-just-change-the-size-of-the__88996.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L']
        },
        {
            id: 'knit-drawstring-joggers-relaxed',
            name: 'Zarek | Knit Drawstring Joggers Relaxed Fit',
            category: 'pants',
            price: 49.95,
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square__38023.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_3.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8_2_ee873dc6-d655-4f2e-8684-990be3152820.jpg'
                ] },
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square__38024.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/9_2_e61cf344-227c-4379-a4a6-f68e013c5abb.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/10_1_a36000f9-c097-4b9f-8ed3-903bbbe6d386.jpg'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square__38022.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/11_2.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/12_e3a2d4e9-7b86-4f7b-80fd-8cb08d80e946.jpg'
                ] },
                { name: 'Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square__38021.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/13_1_4d702641-a7cc-4287-b6cf-f5b7b1a24d17.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/14_ac8f1437-53a7-4ac6-8ab1-416b51c83e1b.jpg'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'knit-drawstring-pants-straight-leg',
            name: 'Zarek | Knit Drawstring Pants Straight Leg Relaxed Fit',
            category: 'pants',
            price: 89.95,
            originalPrice: 119.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__29235.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_2.jpg'
                ] },
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__29234.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_2_9dbe3d41-8b59-4314-9b40-65171c9a5c7a.jpg'
                ] },
                { name: 'Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__29233.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/4_2_93e95b90-8464-4765-b308-e98f5a2ca834.jpg'
                ] },
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38013.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/5_07cc4609-d111-4309-b8fc-4aa131e3f1ea.jpg'
                ] },
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38014.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/6_aefb6f86-60f2-4845-b219-b70140d50a9b.jpg'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38015.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7_1_7764be9c-fbb9-46dd-8649-020a4ff2565e.jpg'
                ] },
                { name: 'Red', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38017.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/j4_1.jpg'
                ] },
                { name: 'Taupe', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38018.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/9_1_00c03448-8829-4410-96e2-6fa1d518e5cc.jpg'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38019.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/10_cb96c522-de0e-4af1-b512-462e21c74213.jpg'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__pose-change-must-be-minimalbackground-solid-flat-c__38020.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/j5.jpg'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'pleated-slim-fit-joggers',
            name: 'Zarek | Pleated Slim Fit Joggers Stretch Drawstring',
            category: 'pants',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage1aug2025_12_42_50-Photoroom.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage1aug2025_12_57_29.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/19-Photoroom_b30b337a-b0a9-43a8-afd4-91f01faf7e0c.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/20-Photoroom_5cb2fdff-3b5f-4668-b72c-7459fe2ff2da.jpg'
                ] },
                { name: 'Olive Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage1aug2025_12_37_02.png'
                ] },
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage1aug2025_13_04_31_66bae140-2ea9-4053-8630-a6e568798feb.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/43-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/44-Photoroom.jpg'
                ] },
                { name: 'Dark Grey', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage1aug2025_12_57_20.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/59-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/60-Photoroom.jpg'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage1aug2025_13_06_35.png'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'slim-fit-stretch-trousers-tapered',
            name: 'Zarek | Slim Fit Stretch Trousers Flat Front Tapered',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_7cef06d2-7102-4d35-bb39-4f6edbcd0ae3-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_11d93436-e7d2-4d70-87cb-d514aa5ca382-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_960feaab-81f8-4496-8639-b45c7bf957e4-Photoroom.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/5_f2984597-188e-49c0-b60e-ad01463c0c59-Photoroom.jpg'
                ] },
                { name: 'Grey', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7_521d7099-7876-435b-b386-7b6ee2968005-Photoroom.jpg'
                ] },
                { name: 'Bordeaux', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8_c96ba5b1-df0b-4b0e-8770-d7bb343b721d-Photoroom.jpg'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/10_9e3dd651-ec9e-433b-bb47-9bf2bbb0dcaa-Photoroom.jpg'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'drawstring-tapered-pants-relaxed',
            name: 'Zarek | Drawstring Tapered Pants Relaxed Fit',
            category: 'pants',
            price: 49.95,
            colorVariants: [
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-but-cut-off-the-image-from-bi__79858.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-man-into-back-give-me-dif__79859_0542ead7-0855-455e-bd84-dbe266d7bc9a.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_7.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-but-cut-off-the-image-from-bi__79857.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-man-into-back-give-me-dif__79861.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_8.jpg'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-but-cut-off-the-image-from-bi__79860.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-man-into-back-give-me-dif__79862.jpg'
                ] },
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-but-cut-off-the-image-from-bi__79855.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-man-into-back-give-me-dif__79863.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-image-into-square__19611_1.jpg'
                ] },
                { name: 'Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-but-cut-off-the-image-from-bi__19614.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-man-into-back-give-me-dif__79864.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-image-into-square__19612_1.jpg'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-but-cut-off-the-image-from-bi__19615.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-man-into-back-give-me-dif__79865.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-image-into-square__19613.jpg'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'wide-leg-trousers-stretch',
            name: 'Zarek | Trousers Wide Leg Stretch',
            category: 'pants',
            price: 39.95,
            originalPrice: 49.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Khaki', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Sbcef6e1d8eb04dda92d8ea5c654ee291b-Photoroom-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/S3028322035f04460a1b84ff4321a947dh-Photoroom-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Sbaadfc6eb8fc45e2839027cf3c784091U-Photoroom-Photoroom.jpg'
                ] },
                { name: 'Grey', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/S0510565947cb49b9b28dd7c6ebf6e4d4o-Photoroom-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/S5cd73ee87d4441bc8dc5f7edaf0a918ds-Photoroom-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Sb9e1792ed32e4783975063860aeec653d-Photoroom-Photoroom.jpg'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/S410cfdb70c104ec3ae233bb89b9dd7cdi-Photoroom-Photoroom.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Sc3af1ac8a0414424aa59c70e1efdcc09d-Photoroom-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/S3ac46c98bb9b40fe804e9d23132656b6s-Photoroom-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/S58a5c601bf6d424cba6f3e761ddb565cZ-Photoroom-Photoroom.jpg'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'wool-blend-pleated-trousers',
            name: 'Zarek | Trousers Wool-Blend Pleated',
            category: 'pants',
            price: 59.95,
            originalPrice: 79.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/fc984f98-32bf-4d78-9938-8cad98b3604f-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2440f75c-1c68-4ff1-94f1-e73e5113ce38-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/efd8f824-4ca6-4a4b-965a-6d15533be677-Photoroom.jpg'
                ] },
                { name: 'Grey', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8fd67fbb-2d52-4f5f-8bb0-cee205a4a4a6-Photoroom.jpg'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'straight-leg-denim-jeans',
            name: 'Zarek | Jeans Straight Leg Denim',
            category: 'pants',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Dark Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square-remove-the-background-__75898.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-in-to-the-back-no-w__88981.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-20at6.39.48PM.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square-remove-the-background-__88983.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-in-to-the-back-left__88979.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-20at6.39.28PM.webp'
                ] },
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square-remove-the-background-__75896.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-in-to-the-back-feet__88980.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-20at6.39.40PM.webp'
                ] },
                { name: 'Washed Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square-remove-the-background-__75899.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-in-to-the-back-show__88982.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-20at6.39.58PM.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },

        // ───────────────── SHOES ─────────────────
        {
            id: 'low-top-sneakers',
            name: 'Zarek | Lace Up Low Top Sneakers Textured Finish Round Toe',
            category: 'shoes',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            images: [
                'assets/products/84640c7fd691.webp',
                'assets/products/eb9b277a67ce.webp',
                'assets/products/851720831563.webp',
                'assets/products/644315b94441.webp'
            ],
            colorVariants: [
                { name: 'Black', image: 'assets/products/84640c7fd691.webp' },
                { name: 'Brown', image: 'assets/products/644315b94441.webp' }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44', '44.5', '45.5']
        },
        {
            id: 'harrington-leather-trainers',
            name: 'Zarek | Harrington Leather Trainers',
            category: 'shoes',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            images: [
                'assets/products/c95b49d3b5b5.webp',
                'assets/products/ae7e797f777b.webp',
                'assets/products/c761a756be18.webp',
                'assets/products/f723e4c28c97.webp',
                'assets/products/b70ce05ca89f.webp'
            ],
            colorVariants: [
                { name: 'Obsidian Black', image: 'assets/products/c95b49d3b5b5.webp' },
                { name: 'Crystal White',  image: 'assets/products/c761a756be18.webp' }
            ],
            sizes: ['39', '40', '41', '42', '43', '44', '45', '46']
        },
        {
            id: 'wallabee-shoes',
            name: 'Zarek | Moc Toe Wallabee Shoes Lace-Up Crepe Sole',
            category: 'shoes',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            images: [
                'assets/products/8ac6bc381535.webp',
                'assets/products/eb707ce28341.webp',
                'assets/products/51d2afa3dc14.webp',
                'assets/products/077b7aa5a2c7.webp'
            ],
            colorVariants: [
                { name: 'Sand Beige',    image: 'assets/products/8ac6bc381535.webp' },
                { name: 'Black',         image: 'assets/products/077b7aa5a2c7.webp' },
                { name: 'Charcoal Gray', image: 'assets/products/e0360819b565.webp' },
                { name: 'Tan Brown',     image: 'assets/products/12c4a76618dc.webp' }
            ],
            sizes: ['37', '38', '38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44', '44.5', '45.5']
        },
        {
            id: 'wingtip-brogue-dress-shoes',
            name: 'Zarek | Shoes Wingtip Brogue',
            category: 'shoes',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_6e29e20f-c150-44a8-9ff7-01b5cc71c5e7.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-make-him-wear-a-black-slack-pants-but-make-the-pants-not-reaching-the-shoes.-cut-off-the-image-from-his-mid-thigh_1ee8bfa7-b4d2-4fdf-8473-0f4dc31631f0.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-make-him-wear-a-black-slack-pants-but-make-the-pants-not-reaching-the-shoes.-cut-off-the-image-from-his-mid-thigh.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_28d9103b-5076-4a7a-a909-6c0435584d00.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-shoes-in-img2-to-the-shoes-in-img1-.-make-one-foot-angled-a-bit.-make-the-model-facing-forward_0001.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-to-the-leftside.-img2-is-the-side-detail-of-the-shoe.-make-one-foot-forward.-cut-off-the-image-in-mid-knee-down-to-feet.-background-shou.png'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_564a8c12-58f0-4ac6-8d24-69218a37e49a.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-make-him-wear-a-black-slack-pants-but-make-the-pants-not-reaching-the-shoes.-cut-off-the-image-from-his-mid-thigh_11c02c14-32cf-4fed-804f-7e59c319daa0.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-to-the-side.-img2-is-the-side-detail-of-the-shoe.-make-one-foot-forward.-cut-off-the-image-in-mid-knee-down-to-feet_0001_fb3c65b7-4268-4c5e-be49-8b7f54710a30.png'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_aa4060e1-15b6-4b26-bab1-4c165768c9fd.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-shoes-in-img2-to-the-shoes-in-img1-.-make-one-foot-forward.-make-the-model-facing-forward_0001.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-to-the-side.-img2-is-the-side-detail-of-the-shoe.-make-one-foot-forward.-cut-off-the-image-in-mid-knee-down-to-feet_0001_1.png'
                ] }
            ],
            sizes: ['38', '39', '40', '41', '42', '43', '44', '45', '46', '47']
        },
        {
            id: 'suede-ankle-boots-lace-up',
            name: 'Zarek | Boots Suede Ankle Lace-Up',
            category: 'shoes',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Taupe Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-black-denim-pants-wear-the-shoes-in-img1-make-the-pants-not-reached-the-boots.-img2-is-the-side-detail-of-the-shoes.-make-the-man-fa.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-a-nice-zoom-in-shot-on-a-white-plain-background.-focus-on-the-heel-pull-tab-only.-make-it-slighly-angled.-one-shoes-only_0001.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-shoe-in-img2-into-the-shoes-in-img1_0001.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-black-denim-pants-wear-the-shoes-in-img1-make-the-pants-not-reached-the-boots.-img2-is-the-side-detail-of-the-shoes.-make-the-man-fa_1fcced7c-5666-4c6d-bba6-a5aecbf8a946.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-side.-the-img2-is-the-side-details-of-the-shoes_0001.webp'
                ] }
            ],
            sizes: ['39', '40', '41', '42', '43', '44']
        },
        {
            id: 'low-top-sneakers-textured',
            name: 'Zarek | Sneakers Low Top Textured',
            category: 'shoes',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-cut-off-the-image-from-his-knee-down-to-his-feet.-make-one-of-the-foot-angled-a-bit.-make-him-wear-a-light-beige-p.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-to-the-right-side.-refer-to-img2-for-the-side-profile-detail-of-the-shoes_0001.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_5e993af0-40a3-45f2-8bac-d4935d60696c.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-cut-off-the-image-from-his-knee-down-to-his-feet.-make-one-of-the-foot-angled-a-bit.-make-him-wear-a-light-beige-p_3f9dffa5-c918-44ef-aa83-87d5248de0f7.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-to-the-side.-refer-to-img2-for-the-side-profile-detail-of-the-shoes_0001.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-shoes-in-img2-to-the-shoes-in-img1_0001.webp'
                ] }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44', '44.5', '45.5']
        },
        {
            id: 'penny-loafers-slip-on',
            name: 'Zarek | Loafers Penny Slip-On',
            category: 'shoes',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__52065_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-m__52071.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-in-img1-img1-m__52073.webp'
                ] }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44']
        },
        {
            id: 'running-sneakers-knit-upper',
            name: 'Zarek | Sneakers Running Knit',
            category: 'shoes',
            price: 64.95,
            originalPrice: 129.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-color-of-the-shoes-into-color-white__80175.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-in-img1-img2-m__80180.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__80183.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-color-of-the-shoes-into-color-black__80176.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-in-img1-img2-m__80182.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-in-img1-make-t__80181.webp'
                ] }
            ],
            sizes: ['36.5', '37', '38', '38.5', '39.5', '40', '41', '41.5', '42.5', '45']
        },
        {
            id: 'slide-sandals-double-strap',
            name: 'Zarek | Sandals Slide Double Strap',
            category: 'shoes',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Tan', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/4_3ea6ce21-efc5-4b36-9e73-caa57907baf1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41793.webp'
                ] },
                { name: 'Olive Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_742e162b-e983-4998-aa86-6edd2666c39b.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41791.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_206a8dc6-487f-4972-ba4e-9f4d6fb7a011.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41792.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_27364b87-4659-40e7-b614-f4d29f05876c.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41790.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__41795.webp'
                ] }
            ],
            sizes: ['40', '41.5', '42.5', '43', '44', '45.5', '46']
        },
        {
            id: 'sport-sandals-dual-buckle',
            name: 'Zarek | Sandals Sport Dual Buckle',
            category: 'shoes',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41783.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41786.webp'
                ] },
                { name: 'Olive Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41784.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41787.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41788.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-sandals-in-img1-cut-__41789.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/13_390873b5-b603-49b1-8c2a-72ede82bb3ea.webp'
                ] }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43']
        },
        {
            id: 'moc-toe-casual-shoes-grain',
            name: 'Zarek | Shoes Moc Toe Grain',
            category: 'shoes',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_1193cc0c-1186-42c1-ae99-8b86d6b0f08e.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-img1-refer-to-__41776.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-another-piece-of-the-shoe-in-img1-to-make-i__41777.webp'
                ] },
                { name: 'Light Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_9e8c4223-4344-4fca-8184-7ba8d2fe2ae2.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-another-piece-of-the-shoe-in-img1-to-make-i__41778.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-sqaure__41779.webp'
                ] }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44']
        },
        {
            id: 'tassel-loafer-slip-on-dress',
            name: 'Zarek | Loafers Tassel Slip-On',
            category: 'shoes',
            price: 99.95,
            originalPrice: 124.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/33_d5abb663-21e0-461a-97ca-051990eaf2fb.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-img1-make-him-__91350.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-szi-eof-the-image-into-square-scale-ima__3407.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/19_4cb21743-1b25-436e-ae63-18190476ee35.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-pair-of-shoes-in-img__91344.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-wear-the-pair-of-shoes-in-img1-sit-profile-po__91347.webp'
                ] },
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/22_da111e5e-439f-4b4e-b135-477554e05208.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-wear-the-pair-of-shoes-in-img1-stand-profile-__91349.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoes-img1-make-him-__91348.webp'
                ] }
            ],
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
        },
        {
            id: 'suede-loafers-moc-toe-laceless',
            name: 'Zarek | Loafers Suede Moc Toe',
            category: 'shoes',
            price: 89.95,
            originalPrice: 119.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__turn-it-around-make-it-upside-beige-loafers-rotate__44714.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoe-img1-cropped-mi__44715.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-pof-the-model-to-the-side-make-h__44724.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__44709.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoe-img1-cropped-mi__44717.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__44718.webp'
                ] },
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__44710.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoe-img1-cropped-mi__44719.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-pof-the-model-to-the-side-make-h__44720.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__44713.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-caucasian-man-wear-the-shoe-img1-cropped-mi__44721.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-pof-the-model-to-the-side-make-h__44722.webp'
                ] }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43']
        },
        {
            id: 'derby-dress-shoes-smooth-toe',
            name: 'Zarek | Shoes Derby Dress Smooth',
            category: 'shoes',
            price: 89.95,
            originalPrice: 119.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__89017.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__img1-make-a-man-wear-the-shoes-man-sitting-cut-ima__89022.webp'
                ] },
                { name: 'Light Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__89018.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__reference-image-img1-make-a-man-wear-the-shoes-mak__89023.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square-remove-the-background-__89029.webp'
                ] },
                { name: 'Dark Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__89019.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__img1-make-a-man-wear-the-shoes-seated-cropped-knee__89028.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__89020.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__img1-make-a-man-wear-the-shoes-sit-with-knees-cut-__89026.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-square-remove-the-background-__89030.webp'
                ] }
            ],
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
        },
        {
            id: 'derby-dress-shoes-rounded-toe',
            name: 'Zarek | Shoes Derby Dress Rounded',
            category: 'shoes',
            price: 139.95,
            colorVariants: [
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_da47eadf-1943-443b-8b83-04989085f71d.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__photo-reference-img1-cropped-midknee-caucasian-man__89004.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8_4a9fd1cb-96f3-4904-8005-e7a6ddb5d726.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_8b51be5b-1995-484c-9197-faa18cb07b05.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__photo-reference-img1-standing-adult-male-tiptoed-b__89005.webp'
                ] }
            ],
            sizes: ['38', '38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44']
        },
        {
            id: 'slide-sandals-double-buckle',
            name: 'Zarek | Sandals Slide Double Buckle',
            category: 'shoes',
            price: 89.95,
            originalPrice: 119.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-sqaure__76734.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-02at10.39.32PM.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-02at10.45.52PM.webp'
                ] },
                { name: 'Dark Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-sqaure__76735.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-into-sqaure__76737.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-02-02at10.39.43PM.webp'
                ] }
            ],
            sizes: ['39', '40', '41', '42', '43', '44', '45', '46']
        },
        {
            id: 'loafers-metal-bit-patterned',
            name: 'Zarek | Loafers Metal Bit Patterned',
            category: 'shoes',
            price: 119.95,
            originalPrice: 199.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_3_76010771-9976-4023-9fa4-4b9f6177479c.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__photorealistic-studio-image-of-a-standing-adult-ma__51006.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-wearing-the-shoes-o__51007.webp'
                ] }
            ],
            sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44']
        },
        {
            id: 'loafers-chunky-sole-vamp-strap',
            name: 'Zarek | Loafers Chunky Sole Vamp Strap',
            category: 'shoes',
            price: 109.95,
            originalPrice: 219.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_3.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-shoes-cut-off-the-image-from-__56275_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-it-face-front-one-is-a-bit-angled-to-the-left__56278_2.webp'
                ] },
                { name: 'Glossy Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_1_ed90343d-0c1c-475b-997f-6e76d40047db.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-a-man-wear-this-shoes-cut-off-the-image-from-__56277_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-it-face-front-one-is-a-bit-angled-to-the-left__56279_1.webp'
                ] }
            ],
            sizes: ['38', '39', '40', '41', '42', '43', '44', '45', '46']
        },
        {
            id: 'dress-shoes-textured-upper-sleek',
            name: 'Zarek | Shoes Dress Textured Sleek',
            category: 'shoes',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_2_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__56266_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-backgrounf__56273.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_28725956-b200-4284-bf56-0270ed16ba6d_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__56267_2.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-front-to-sho__56269_1.webp'
                ] },
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_2_debe4bf6-e111-4994-bfa9-a2bf2a51bf50_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__56271_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-front-to-sho__56272_1.webp'
                ] }
            ],
            sizes: ['40', '41', '42', '43', '44', '45', '46', '47', '48']
        },
        {
            id: 'bit-loafers-polished-almond-toe',
            name: 'Zarek | Loafers Bit Polished Almond',
            category: 'shoes',
            price: 129.95,
            originalPrice: 199.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_2_d0f87de2-98ef-407e-abb9-5aeea5c626ef.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-image-into-square__16816.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_4_c164505b-0205-4ab7-aae5-0d6a81fcb644.jpg'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/4_6aa4b7ea-37e3-4332-83cd-c46d7d1d38a0.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-image-into-square__16817.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/6_1_9797e0c5-49bb-4fd7-9061-fb6bfe037ae9.jpg'
                ] }
            ],
            sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']
        },
        {
            id: 'low-top-sneakers-smooth-slim',
            name: 'Zarek | Sneakers Low Top Smooth Slim',
            category: 'shoes',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_1_bc72ec22-6161-4324-b13e-3bde05e4cc48.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__reza-character-identity-referenceuse-only-the-pers__69077.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__background-solid-flat-color-efefeflighting-neutral__69078_1.png'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_1_c4d9c6dc-d927-40e3-8039-72680b5bf0dd.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__-character-identity-referenceuse-only-the-person-f__69079.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__background-solid-flat-color-efefeflighting-neutral__69080_1.png'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_1_9aeea033-6e6c-4f05-a7fb-0751c1791db6.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__-character-identity-referenceuse-only-the-person-f__69081.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__background-solid-flat-color-efefeflighting-neutral__69082_1_3aebe1ef-a438-4036-a5fa-c518af226ab1.png'
                ] }
            ],
            sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']
        },

        // ───────────────── OUTFITS ─────────────────
        {
            id: 'two-piece-suit',
            name: 'Zarek | Slim Fit Two-Piece Tailored Suit Set',
            category: 'outfits',
            price: 139.95,
            originalPrice: 279.90,
            badge: 'SALE',
            images: [
                'assets/products/332d56bf8843.webp',
                'assets/products/01d4e3831000.webp',
                'assets/products/3291e6a415e4.webp',
                'assets/products/e6b9787a4da7.webp'
            ],
            colorVariants: [
                { name: 'White',      image: 'assets/products/332d56bf8843.webp' },
                { name: 'Tan',        image: 'assets/products/e6b9787a4da7.webp' },
                { name: 'Light Blue', image: 'assets/products/c30ff51e2351.webp' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'tuxedo-three-piece',
            name: 'Zarek | Tuxedo Three-Piece Suit Single-Breasted',
            category: 'outfits',
            price: 119.95,
            originalPrice: 199.95,
            badge: 'SALE',
            images: [
                'assets/products/3807e2cf2f28.webp',
                'assets/products/ced267acc0cc.webp',
                'assets/products/9f754d7f6e74.webp',
                'assets/products/20726a743653.webp'
            ],
            colorVariants: [
                { name: 'Navy Blue', image: 'assets/products/3807e2cf2f28.webp' },
                { name: 'Black',     image: 'assets/products/9f754d7f6e74.webp' },
                { name: 'Bordeaux',  image: 'assets/products/20726a743653.webp' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'tracksuit-set-zip-polyester',
            name: 'Zarek | Set Tracksuit Zip',
            category: 'outfits',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7-Photoroom_a26f5672-9097-4b4a-a90f-78fabbb7b5fe.jpg'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8-Photoroom_25260e51-7480-4a89-8e2e-8f489fe7c482.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/9-Photoroom_ec3e7cd0-0daa-4dd6-91a0-1280b37dcede.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/11-Photoroom_5079c74e-7030-410d-8fb2-72b852c9c04b.jpg'
                ] }
            ],
            sizes: ['S', 'M', 'L', '2XL']
        },
        {
            id: 'tracksuit-set-zip-up-stretch',
            name: 'Zarek | Set Tracksuit Zip-Up',
            category: 'outfits',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/4-Photoroom_12df3da7-e9d1-4790-ad56-9ef5422a9cb0.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/178d23f4-5259-42fd-985b-4f4cb53a55d8.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/5-Photoroom_c887a2ab-0036-41c3-9d9d-e36304f6f2cf.jpg'
                ] },
                { name: 'Olive Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3-Photoroom_3ef206c5-5595-44d9-8b51-229ac3029cf1.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7-Photoroom_f9e4d040-c1fa-4ebe-85b8-a23a0c2041c0.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/10-Photoroom_fb9c3f18-b525-490d-a1be-576077079862.jpg'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1-Photoroom_de12b84b-6f49-4fc5-8605-d54b6b0a2aef.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/6-Photoroom_4f1182e2-ba95-4aca-b3c2-53e0d3b9feed.jpg'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2-Photoroom_ffb20efa-8ee7-448c-848e-a3e660125627.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8-Photoroom_dc15a955-611e-413b-8c7a-449d21cc40b1.jpg'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'suit-2piece-slim-notch-lapel',
            name: 'Zarek | Suit 2-Piece Slim Notch',
            category: 'outfits',
            price: 99.95,
            originalPrice: 199.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-7-Photoroom_1ed27636-c301-4cc8-91bd-d018be81ab4f.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage22okt2025_22_01_49-Photoroom.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7-Photoroom_5f4ea7a8-7bbf-4d71-a17d-a8016b165d15.jpg'
                ] },
                { name: 'Grey', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-1-Photoroom_2c9ab310-e506-44d2-9f23-50ec3121d494.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/ChatGPTImage22okt2025_22_01_33-Photoroom.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-8-Photoroom_7076395e-b67f-4e4e-92f9-d8a88f0f146d.jpg'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'suit-blazer-single-button-tailored',
            name: 'Zarek | Suit Blazer Single Button',
            category: 'outfits',
            price: 219.95,
            originalPrice: 439.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Burgundy', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__80218.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80217.webp'
                ] },
                { name: 'Royal Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__80220.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80216.webp'
                ] },
                { name: 'Navy', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__80221.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80215.webp'
                ] },
                { name: 'Tan', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__80223.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80213.webp'
                ] },
                { name: 'Yellow', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__80222.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80214.webp'
                ] },
                { name: 'Red', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4521.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80212.webp'
                ] },
                { name: 'Purple', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4522.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80211.webp'
                ] },
                { name: 'Pink', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4533.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80210.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4524.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80200.webp'
                ] },
                { name: 'Mustard', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4525.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80209.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4526.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80208.webp'
                ] },
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4527.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80202.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4529.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80204.webp'
                ] },
                { name: 'Teal', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4530.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80201_3af42bc5-6800-4cc2-a2bd-cc48eec3736f.webp'
                ] },
                { name: 'Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4531.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80205.webp'
                ] },
                { name: 'Hot Pink', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4534.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80203.webp'
                ] },
                { name: 'Mint', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4535.jpg'
                ] },
                { name: 'Lavender', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__4536.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80207.webp'
                ] }
            ],
            sizes: ['3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'suit-double-breasted-pinstripe',
            name: 'Zarek | Suit Double Breasted Pinstripe',
            category: 'outfits',
            price: 219.95,
            originalPrice: 439.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__80193.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80187.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__80194.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__80197.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80186.webp'
                ] },
                { name: 'Red', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__80190.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80189.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__80196.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80184.webp'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__80191.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80188.webp'
                ] },
                { name: 'Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__80195.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80185.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__80199.jpg'
                ] }
            ],
            sizes: ['3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'set-shirt-pants-two-piece',
            name: 'Zarek | Set Shirt Pants Two-Piece',
            category: 'outfits',
            price: 59.95,
            colorVariants: [
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50777.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-do-not-__50779.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__50763.webp'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50768.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-do-not-__50781.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__50762.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__50765.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__chaneg-the-whole-outfit-into-color-balck-except-th__50773_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__50755.webp'
                ] },
                { name: 'Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50769.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-do-not-__50774.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__50761.webp'
                ] },
                { name: 'Red', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__50757.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-do-not-__50776.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__50756.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50770.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-do-not-__50775.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__50760.webp'
                ] },
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-use-the-exact-product-sh__50783.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__50772.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__50764.webp'
                ] },
                { name: 'Light Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50771.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-do-not-__50778.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__50758.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L']
        },
        {
            id: 'tracksuit-set-tech-zip-jogger',
            name: 'Zarek | Set Tracksuit Tech Zip',
            category: 'outfits',
            price: 79.95,
            originalPrice: 133.25,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7-Photoroom_b5650b78-63df-4ece-9689-43bbf983547e.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/9-Photoroom_9287018d-a60a-429b-91bb-02a272701040.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8-Photoroom_858d1aae-9a0d-4e91-9c81-1b41625980ad.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2037ff98-6ec2-40d1-b66c-759926c9e675.jpg'
                ] }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'tracksuit-set-textured-zip-drawstring',
            name: 'Zarek | Set Tracksuit Textured Zip',
            category: 'outfits',
            price: 99.95,
            originalPrice: 199.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Charcoal Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_34a41c4a-b3e2-489f-a771-d64f4492d4cc.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-refer-to-img2-for-the-details-of-the-back-of-both-jacket-and-pants.-put-one-hand-on-hip-and-one-foot-forward_0001.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_73364060-5c0c-4e94-bfe3-8d931c23b7a9.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_9f6f18c5-4a26-4a1a-b5ad-7efeafc1163f.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-in-img1-refer-to-img2-tfor-the-details-of-the-back-of-both-jacket-and-pants_0001.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-both-jacket-and-pants-in-img2-to-the-jacket-and-pants-in-img2-no-hanegr-and-white-shirt-included_0001.webp'
                ] }
            ],
            sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL']
        },
        {
            id: 'set-button-up-stand-collar',
            name: 'Zarek | Set Button-Up Stand Collar',
            category: 'outfits',
            price: 99.95,
            originalPrice: 199.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_3f9e7b49-b419-4ad5-bcd1-5eba5a112ac8.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stace-of-the-model-to-side-.-amke-him-oblivious-of-the-camera_0001_2.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-set-in-img2-to-the-outfit-set-in-img1_0001_2.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_310a8a0b-57c0-4db0-92ce-4167bbbccd92.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stace-of-the-model-to-back-.-amke-him-oblivious-of-the-camera_0001.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-set-in-img2-to-the-outfit-set-in-img1_0001_1.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_fc235c7e-33d6-44ae-8b76-70f77168b0b2.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stace-of-the-model-to-side-.-amke-him-oblivious-of-the-camera_0001_1.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-set-in-img2-to-the-outfit-set-in-img1_0001.webp'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_abe7ce3a-996f-47a2-94eb-1ef61d8f7186.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stace-of-the-model-to-side-.-amke-him-oblivious-of-the-camera_0001.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_7eb48e31-c509-4585-83f2-caab9695ca9b.webp'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_29971b12-5b1b-45ff-add8-285214c28920.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stace-of-the-model-to-side-.-amke-him-oblivious-of-the-camera_0001.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-set-in-img2-to-the-outfit-set-in-img1_0001_3.jpg'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'set-polo-shirt-shorts-textured',
            name: 'Zarek | Set Polo Shirt Shorts Textured',
            category: 'outfits',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-soft-shadow._0001_c6e1d7bd-5e54-4689-8d39-2274007b9e85.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-right-side.-make-him-oblivious-of-the-camera_0001.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_0001.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-right-side.-make-him-oblivious-of-the-camera_0001_2.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_00012.webp'
                ] },
                { name: 'Navy', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001_3.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-side.-make-him-oblivious-of-the-camera_0001.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_0001_1_2.webp'
                ] },
                { name: 'Red', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001_2.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-side.-make-him-oblivious-of-the-camera_0001.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_0001_1.webp'
                ] },
                { name: 'Sky Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001_4.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-left-side.-make-him-oblivious-of-the-camera_0001.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_0001_2_2.webp'
                ] },
                { name: 'Orange', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001_5.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-right-side.-make-him-oblivious-of-the-camera_0001.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-siz-eof-the-image-into-square_0001.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001_1.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-side.-make-him-oblivious-of-the-camera_0001_1_12cdcfe0-25cb-4f6b-b5df-0d3e42c2519b.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_0001_3.webp'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_remove-the-background-and-change-it-to-efefef-and-apply-light-shadow._0001_12dcdd52-e288-4e42-b61c-e0383750fa22.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_change-the-stance-of-the-model-to-the-right-side.-make-him-oblivious-of-the-camera_0001_1.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik_apply-the-color-of-the-outfit-in-img2-to-the-outfit-in-img1_0001_2.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'set-hoodie-sweater-matching',
            name: 'Zarek | Set Hoodie Sweater Matching',
            category: 'outfits',
            price: 89.95,
            originalPrice: 179.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__59389.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__78578.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-background__59386.webp'
                ] },
                { name: 'Dusty Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__59387.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-background__44657.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__59388.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__78579.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-background__59385.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
        },
        {
            id: 'set-waffle-polo-shorts',
            name: 'Zarek | Set Waffle Polo Shorts',
            category: 'outfits',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Cream / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62079.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62078.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__70709_1.webp'
                ] },
                { name: 'Burgundy / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62075.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-rthe-stance-of-the-model-to-the-right-side-__62082.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__70712.webp'
                ] },
                { name: 'Forest Green / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62076.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-rthe-stance-of-the-model-to-the-right-side-__62081.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__70711.webp'
                ] },
                { name: 'Light Gray / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62077_31223c70-3de8-47f2-b868-b2e37c130082.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-rthe-stance-of-the-model-to-the-side-make-h__62080.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__70710.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'set-waffle-knit-colorblock-polo-pants',
            name: 'Zarek | Set Waffle Polo Pants Color Block',
            category: 'outfits',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black / Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50432.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50441.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__34751.webp'
                ] },
                { name: 'Forest Green / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50433.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50440.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__34752.webp'
                ] },
                { name: 'Light Gray / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50434.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50439.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__34754.webp'
                ] },
                { name: 'Cream / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50435.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50437.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__34755.webp'
                ] },
                { name: 'Burgundy / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50436.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__34757.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__50442.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
        },
        {
            id: 'set-ribbed-button-up-shirt-pants',
            name: 'Zarek | Set Ribbed Button-Up Shirt Pants',
            category: 'outfits',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Light Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50420.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50426.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61084.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50418.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-left-si__50430.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61086.webp'
                ] },
                { name: 'Dark Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__57187.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50424.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61088.webp'
                ] },
                { name: 'Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50417.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-right-s__50427.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61087.webp'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50419.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-left-si__50428.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61085.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__50421.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-img1-to-the-side-ma__50431.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61083.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },
        {
            id: 'set-tee-shorts-lounge-crew',
            name: 'Zarek | Set Tee Shorts Lounge',
            category: 'outfits',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Light Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__30481.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__30485.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-color-of-the-outfit-set-in-img1-into-th__30493.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__30482.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__30487.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-color-of-the-outfit-set-into-color-blac__30492.webp'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__30483.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__30488.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-sqaure__30494.webp'
                ] },
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__30478.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__30484.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-img1-as-the-reference-product-generate-a-clean__30489.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
        },
        {
            id: 'set-athletic-tshirt-shorts',
            name: 'Zarek | Set Athletic Tee Shorts',
            category: 'outfits',
            price: 39.95,
            colorVariants: [
                { name: 'White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62062.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__62068.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62053.webp'
                ] },
                { name: 'Black / White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62057.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side__62064.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62048.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62058.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-right-side-n__62070.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62049.webp'
                ] },
                { name: 'Black / Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62059.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side__62065.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62050.webp'
                ] },
                { name: 'Black / Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62060.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-make-bo__62066.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62051.webp'
                ] },
                { name: 'Black / Orange', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62061.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-one-han__62067.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62052.webp'
                ] },
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-character-identity-referenceuse-only-the-per__62063.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-no-pock__62069.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62054.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L']
        },
        {
            id: 'set-athletic-tshirt-layered-shorts',
            name: 'Zarek | Set Athletic Tee Layered Shorts',
            category: 'outfits',
            price: 69.95,
            colorVariants: [
                { name: 'Black / White', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62048.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62053.webp'
                ] },
                { name: 'Black / Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62049.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62054.webp'
                ] },
                { name: 'Black / Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62050.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62051.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__62052.webp'
                ] }
            ],
            sizes: ['S', 'M', 'L', 'XL']
        },
        {
            id: 'set-shirt-shorts-button-up-drawstring',
            name: 'Zarek | Set Shirt Shorts Button-Up',
            category: 'outfits',
            price: 79.95,
            originalPrice: 159.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Olive Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-siz-eof-the-image-into-square__92786.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-keep-sh__92791.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/24_4e3dea50-b5ba-447a-a6a8-947de6c87716.webp'
                ] },
                { name: 'Beige', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__char1-wear-the-exact-product-from-img1-neutral-gre__61076.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-keep-sh__92790.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/11_1f9bcd55-b50d-4c2f-83cb-c437d1c2aa46.webp'
                ] },
                { name: 'Navy', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square-maintain-__92787.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__92789.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/20_c01c95af-5a64-4edb-a445-8f4d9344db5e.webp'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square-crop-to-c__61075.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-back-keep-sh__92792.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7_8786569b-ae96-4ea4-adba-befbc2fc0f29.webp'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },

        // ───────────────── GLASSES ─────────────────
        {
            id: 'geometric-sunglasses',
            name: 'Zarek | Geometric Metal Frame Sunglasses Double Bridge',
            category: 'glasses',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            images: [
                'assets/products/5b6831f66683.webp',
                'assets/products/6f0f4de561ee.webp',
                'assets/products/9d9826af07e0.webp',
                'assets/products/f0c409df760c.webp'
            ],
            colorVariants: [
                { name: 'Silver Pink',  image: 'assets/products/5b6831f66683.webp' },
                { name: 'Silver Blue',  image: 'assets/products/9d9826af07e0.webp' },
                { name: 'Gold Gray',    image: 'assets/products/f0c409df760c.webp' },
                { name: 'Black Yellow', image: 'assets/products/00c53b045b68.webp' },
                { name: 'Gold Pink',    image: 'assets/products/0222187e133f.webp' },
                { name: 'Black Blue',   image: 'assets/products/7f11757881fa.webp' },
                { name: 'Gold Brown',   image: 'assets/products/520b51d5f12c.webp' }
            ],
            sizes: ['One Size']
        },
        {
            id: 'rectangular-sunglasses',
            name: 'Zarek | Rectangular Slim Metal Frame Sunglasses Tinted',
            category: 'glasses',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            images: [
                'assets/products/4968c969b3d5.webp',
                'assets/products/d63eb10f4201.webp',
                'assets/products/2ddc26304e65.webp',
                'assets/products/791883d507cd.webp'
            ],
            colorVariants: [
                { name: 'Silver Blue', image: 'assets/products/d63eb10f4201.webp' },
                { name: 'Gold Brown',  image: 'assets/products/eaf5efcf5ebe.webp' },
                { name: 'Gold Black',  image: 'assets/products/6ee80c17bef6.webp' }
            ],
            sizes: ['One Size']
        },
        {
            id: 'sunglasses-round-frame-dark-tinted',
            name: 'Zarek | Sunglasses Round Frame',
            category: 'glasses',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-him-wear-the-sungla__74159.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-stance-of-the-model-to-the-side-zoom-ou__74160.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__74158.webp'
                ] }
            ],
            sizes: ['One Size']
        },
        {
            id: 'sunglasses-square-frame-gold-detail',
            name: 'Zarek | Sunglasses Square Gold',
            category: 'glasses',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Blue Marble', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68339.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55852.webp'
                ] },
                { name: 'Classic Tortoiseshell', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__55840.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55848.webp'
                ] },
                { name: 'Matte Black Smoke', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68338.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55850.webp'
                ] },
                { name: 'Black Gray Gradient', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68340.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__74132.webp'
                ] },
                { name: 'Black Gold Smoke', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68337.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55854.webp'
                ] },
                { name: 'Black Clear Lens', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__55844.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55847.jpg'
                ] },
                { name: 'Transparent Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__55843.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55849.webp'
                ] },
                { name: 'Black Ice Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__55842.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-make-char1-wear-the-sung__55855.jpg'
                ] }
            ],
            sizes: ['One Size']
        },
        {
            id: 'sunglasses-square-frame-tinted-lens',
            name: 'Zarek | Sunglasses Square Tinted',
            category: 'glasses',
            price: 11.99,
            originalPrice: 59.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Black Smoke', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68314.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68336.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-everything-into-color-balck__68326.webp'
                ] },
                { name: 'Black Blue Tint', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68327.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68334.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68320.webp'
                ] },
                { name: 'Black Green Tint', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68325.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68333.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68321.webp'
                ] },
                { name: 'Crystal Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68324.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68335.jpg',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-the-background-and-change-it-to-efefef-add-__68322.webp'
                ] }
            ],
            sizes: ['One Size']
        },
        {
            id: 'sunglasses-square-full-rim-tinted',
            name: 'Zarek | Sunglasses Square Full-Rim',
            category: 'glasses',
            price: 39.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Silver / Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/11_452e6d61-911f-4988-bf20-60b36f5cad47.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-all-the-text__9712.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__83693.webp'
                ] },
                { name: 'Olive Green / Dark Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_c49c762b-d253-4f1a-bd28-9778d0efe9a6.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__do-not-remove-the-glasses-the-box-and-any-material__9715.webp'
                ] },
                { name: 'Gray / Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_bf41f23a-49d3-400f-a2e2-0aa2a0a16099.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__do-not-remove-the-glasses-the-box-and-any-material__9716.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__9727.webp'
                ] },
                { name: 'Black / Dark Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_41def3ca-cac0-442f-ae66-e54b66c4d0a4.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-all-the-text__9714.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__83694.webp'
                ] },
                { name: 'Clear / Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/j2Untitleddesign.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-any-letters-messages-and-texts__9720.webp'
                ] },
                { name: 'Amber Brown / Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/6_c32a061d-97ec-42cd-bb99-41a994ac96ef.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-any-letters-messages-and-texts__9721.webp'
                ] },
                { name: 'Sage Green / Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7_d207641a-2f39-423a-a280-ebe7326c2566.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-any-letters-messages-and-texts__9722.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-the-man-char1-wear-the-sunglass-in-img1-photo__50991.webp'
                ] },
                { name: 'Amber / Teal', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/8_4f3fe39d-978d-43e2-a9ae-536220944d04.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__make-the-background-efefef-and-put-soft-shadow__9725.png',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__change-the-size-of-the-image-into-square__83695.webp'
                ] },
                { name: 'Blue / Rose', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/9_1441db7b-6a23-477c-ae09-6721b1fe24a3.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__remove-any-letters-messages-and-texts__9724.webp'
                ] }
            ],
            sizes: ['One Size']
        },
        {
            id: 'sunglasses-geometric-metal-double-bridge',
            name: 'Zarek | Sunglasses Geometric Double Bridge',
            category: 'glasses',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Silver Pink', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74161.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/1_1a81191e-2a51-4c34-8dc9-7d05df484293.webp'
                ] },
                { name: 'Silver Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74162.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/2_40157372-b5ff-4178-98c7-3dc0d7d14701.webp'
                ] },
                { name: 'Gold Gray', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74163.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/3_af52d309-eda8-4b52-908b-1486017d3182.webp'
                ] },
                { name: 'Black Yellow', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74165.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/4_f051f39e-dd86-4ece-8980-a7473c4a4133.webp'
                ] },
                { name: 'Gold Pink', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74166.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/5_ce10f1cb-bcbc-4679-8193-899dacd53527.webp'
                ] },
                { name: 'Black Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74167.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/6_3a7e027e-1f09-499e-bfca-f9164061516b.webp'
                ] },
                { name: 'Gold Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74168.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/7_d90faf68-f755-419e-8144-92e07a43f85a.webp'
                ] }
            ],
            sizes: ['One Size']
        },
        {
            id: 'sunglasses-rectangular-slim-metal-frame',
            name: 'Zarek | Sunglasses Rectangular Slim',
            category: 'glasses',
            price: 39.95,
            originalPrice: 79.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Sliver Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-03-05at3.03.29AM.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-03-05at3.19.52AM.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-zoom-ou-t-the-image-cut-off-th__74169.webp'
                ] },
                { name: 'Gold Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-03-05at3.02.33AM.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-03-05at3.20.12AM.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74171.webp'
                ] },
                { name: 'Gold Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-03-05at3.03.49AM.webp',
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/Screenshot2026-03-05at3.20.18AM.webp'
                ] }
            ],
            sizes: ['One Size']
        },

        // ───────────────── ACCESSORIES ─────────────────
        {
            id: 'watch-travel-roll',
            name: 'Zarek | Watch Travel Roll Case',
            category: 'accessories',
            price: 29.00,
            originalPrice: 29.00,
            badge: null,
            images: [
                'assets/products/9772141516b7.webp',
                'assets/products/df5c6ac3466c.webp',
                'assets/products/383e9f0cf506.webp',
                'assets/products/e3cfa3ee57a2.webp'
            ],
            colorVariants: [
                { name: 'Black', image: 'assets/products/9772141516b7.webp' }
            ],
            sizes: ['One Size']
        },
        {
            id: 'leather-trio-roll',
            name: 'Zarek | Leather Trio Watch Roll',
            category: 'accessories',
            price: 59.95,
            originalPrice: 99.95,
            badge: 'SALE',
            images: [
                'assets/products/2a67b513faa2.webp',
                'assets/products/b10a413895dc.webp',
                'assets/products/0caf91ae3a5d.webp',
                'assets/products/7e9c92507ccd.webp'
            ],
            colorVariants: [
                { name: 'Navy Blue',     image: 'assets/products/2a67b513faa2.webp' },
                { name: 'Brown',         image: 'assets/products/b10a413895dc.webp' },
                { name: 'Black',         image: 'assets/products/0caf91ae3a5d.webp' },
                { name: 'Emerald Green', image: 'assets/products/7e9c92507ccd.webp' }
            ],
            sizes: ['One Size']
        },
        {
            id: 'watch-roll-leather-single',
            name: 'Zarek | Watch Roll Leather Single',
            category: 'accessories',
            price: 29.95,
            originalPrice: 59.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-1-Photoroom_41b46ae8-a03f-423c-a4ef-44e63678ce1d.jpg'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-2-Photoroom_ed585635-adee-4b6b-9890-001f71d4d771.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-5-Photoroom_b26942a0-91c8-48e8-90ae-4255c9095ee8.jpg'
                ] },
                { name: 'Emerald Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-1-Photoroom_f76a146a-735c-4cf2-b208-60a4302e916a.jpg'
                ] }
            ],
            sizes: ['One Size']
        },
        {
            id: 'watch-roll-leather-double',
            name: 'Zarek | Watch Roll Leather Double',
            category: 'accessories',
            price: 47.95,
            originalPrice: 95.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Navy Blue', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-8-Photoroom_2dcc7169-f572-465f-b31e-377b863b66e2.jpg'
                ] },
                { name: 'Brown', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-3-Photoroom_85f31943-838f-4973-a8f7-e29ed5bc4c1c.jpg'
                ] },
                { name: 'Black', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-6-Photoroom_dc797eeb-5c4d-4af6-b5a0-82de71a24e0b.jpg'
                ] },
                { name: 'Emerald Green', images: [
                    'https://cdn.shopify.com/s/files/1/0693/9387/5134/files/variant-image-3-Photoroom_7402cfb4-5bd0-4277-b3e8-1bef99d33c5e.jpg'
                ] }
            ],
            sizes: ['One Size']
        }
    ];

    // Expose for any other script that wants the catalog
    window.ZAREK_PRODUCTS = PRODUCTS;

    /* ----------------------------------------------------------------------
       CATEGORY LABELS — slug → display name
       ---------------------------------------------------------------------- */
    const CATEGORY_LABELS = {
        'coats':         'Coats & Jackets',
        'coats-jackets': 'Coats & Jackets',
        'tops':          'Tops',
        'pants':         'Pants',
        'shoes':         'Shoes',
        'watches':       'Watches',
        'glasses':       'Glasses',
        'accessories':   'Accessories',
        'outfits':       'Outfits',
        'sale':          'Sale'
    };

    const categoryDescriptions = {
      'coats-jackets': 'Engineered for the modern man, this piece blends structured tailoring with everyday wearability. Built from premium materials designed to withstand the elements while keeping your look sharp and intentional.',
      'tops': 'A refined essential for the considered wardrobe. Clean construction, quality fabric, and a fit designed to move with you — from morning to evening without compromise.',
      'pants': 'Tailored for comfort without sacrificing structure. Whether dressed up or kept casual, this piece delivers a clean silhouette that works across every occasion.',
      'shoes': 'Finished at the sole with the same care as the rest of your outfit. Crafted for durability and style, these shoes are built to complement every look in your rotation.',
      'outfits': 'A complete look, considered from top to bottom. Coordinated in fit, fabric, and tone — so you can dress with intention and step out with confidence.',
      'glasses': 'The right frame elevates everything. Minimal, precise, and built to last — designed for the man who understands that details define the look.',
      'accessories': 'The finishing touch that ties the outfit together. Each piece is selected for quality and purpose, adding character without overwhelming the look.',
      'sale': 'Zarek quality at a reduced price. The same premium materials and considered design — now available for less, for a limited time only.'
    };

    // Header nav still uses ?cat=coats; data uses 'coats-jackets'.
    // Aliases bridge them so old URLs keep working.
    const CATEGORY_ALIASES = {
        'coats': 'coats-jackets'
    };

    function normalizeCategory(slug) {
        if (!slug) return slug;
        return CATEGORY_ALIASES[slug] || slug;
    }

    /* ----------------------------------------------------------------------
       HELPERS
       ---------------------------------------------------------------------- */
    function formatPrice(n) {
        return '£' + n.toFixed(2);
    }

    function hasDiscount(p) {
        return typeof p.originalPrice === 'number'
            && typeof p.price === 'number'
            && p.originalPrice > p.price;
    }

    // Resolve the "card" image for a product. Falls back through:
    //   p.images[0] → p.colorVariants[0].images[0] → p.colorVariants[0].image
    // Lets the catalog drop the product-level images[] array when every
    // colour already carries its own image set.
    function primaryImage(p) {
        if (p.images && p.images.length) return p.images[0];
        if (p.colorVariants && p.colorVariants[0]) {
            const c = p.colorVariants[0];
            if (c.images && c.images.length) return c.images[0];
            if (c.image) return c.image;
        }
        return '';
    }

    // Gallery images for a (product, colour-index) combination.
    // Prefer the colour's own images[] array; fall back to the
    // product-level images[] array for legacy products.
    function galleryImagesFor(p, colorIndex) {
        const c = p.colorVariants && p.colorVariants[colorIndex || 0];
        if (c && c.images && c.images.length) return c.images;
        return p.images || [];
    }

    function getParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    function getById(id) {
        return PRODUCTS.find((p) => p.id === id);
    }

    // Filter the catalog. category 'sale' returns only items that are on sale.
    function filterProducts(opts) {
        opts = opts || {};
        let list = PRODUCTS.slice();
        if (opts.category) {
            if (opts.category === 'sale') {
                list = list.filter((p) => p.badge === 'SALE' || hasDiscount(p));
            } else {
                const cat = normalizeCategory(opts.category);
                list = list.filter((p) => p.category === cat);
            }
        }
        if (opts.exclude) {
            list = list.filter((p) => p.id !== opts.exclude);
        }
        if (opts.limit) {
            list = list.slice(0, opts.limit);
        }
        return list;
    }

    /* ----------------------------------------------------------------------
       CARD TEMPLATE — variant 'home' uses .product-card,
       variant 'collection' uses .product-card-c (with hover Add to Cart)
       ---------------------------------------------------------------------- */
    function cardHTML(p, variant) {
        const cls = variant === 'home' ? 'product-card' : 'product-card-c';
        const addBtn = variant === 'home'
            ? ''
            : '<button type="button" class="' + cls + '__add">Add to Cart</button>';

        const badgeHTML = p.badge
            ? '<span class="' + cls + '__badge">' + p.badge + '</span>'
            : '';

        const pricesHTML = hasDiscount(p)
            ? '<span class="' + cls + '__price--old">' + formatPrice(p.originalPrice) + '</span>'
              + '<span class="' + cls + '__price--new">' + formatPrice(p.price) + '</span>'
            : '<span class="' + cls + '__price--new">' + formatPrice(p.price) + '</span>';

        return ''
            + '<a href="product.html?id=' + p.id + '" class="' + cls + '">'
            +   '<div class="' + cls + '__media">'
            +     badgeHTML
            +     '<img class="' + cls + '__img" src="' + primaryImage(p) + '" alt="' + p.name + '" loading="lazy">'
            +     addBtn
            +   '</div>'
            +   '<h3 class="' + cls + '__name">' + p.name + '</h3>'
            +   '<div class="' + cls + '__prices">'
            +     pricesHTML
            +   '</div>'
            + '</a>';
    }

    /* ----------------------------------------------------------------------
       RENDER — any [data-product-grid] container
       ---------------------------------------------------------------------- */
    document.querySelectorAll('[data-product-grid]').forEach((grid) => {
        const variant = grid.dataset.variant || 'collection';
        const category = grid.dataset.category || getParam('cat');
        const list = filterProducts({
            category: category,
            exclude: grid.dataset.exclude || null,
            limit: parseInt(grid.dataset.limit, 10) || null
        });
        grid.innerHTML = list.length
            ? list.map((p) => cardHTML(p, variant)).join('')
            : '<p class="empty-state">No products in this collection yet — check back soon.</p>';
    });

    /* ----------------------------------------------------------------------
       COLLECTION PAGE — hero title, count, active filter chip
       ---------------------------------------------------------------------- */
    const currentCat = getParam('cat');

    const heroTitle = document.querySelector('[data-collection-title]');
    if (heroTitle) {
        heroTitle.textContent = (currentCat && CATEGORY_LABELS[currentCat]) || 'All Products';
    }

    const countText = (function () {
        const n = filterProducts({ category: currentCat }).length;
        return n + ' product' + (n === 1 ? '' : 's');
    })();

    const heroCount = document.querySelector('[data-collection-count]');
    if (heroCount) heroCount.textContent = countText;

    const showingCount = document.querySelector('[data-showing-count]');
    if (showingCount) showingCount.textContent = 'Showing ' + countText;

    const normalizedCurrent = normalizeCategory(currentCat) || '';
    document.querySelectorAll('[data-filter-chip]').forEach((chip) => {
        const chipCat = normalizeCategory(chip.dataset.filterChip) || '';
        chip.classList.toggle('is-active', chipCat === normalizedCurrent);
    });

    /* ----------------------------------------------------------------------
       PRODUCT DETAIL PAGE — hydrate fields, gallery, variants, related
       ---------------------------------------------------------------------- */
    const productPage = document.querySelector('[data-product-page]');
    if (productPage) {
        const id = getParam('id');
        let p = id ? getById(id) : null;
        if (!p) p = PRODUCTS[0];

        if (p) {
            document.title = p.name + ' — Zarek';

            const setText = (sel, txt) => {
                const el = document.querySelector(sel);
                if (el) el.textContent = txt;
            };

            const labelText = CATEGORY_LABELS[p.category] || p.category;
            setText('[data-product-label]', labelText);
            setText('[data-product-name]', p.name);

            const descEl = document.querySelector('[data-product-description]');
            if (descEl) {
              const desc = p.description || categoryDescriptions[p.category] || 'Premium quality crafted for the modern man.';
              descEl.textContent = desc;
            }

            // Prices — hide old price element when there's no discount
            const oldPriceEl = document.querySelector('[data-product-price-old]');
            const newPriceEl = document.querySelector('[data-product-price-new]');
            if (newPriceEl) newPriceEl.textContent = formatPrice(p.price);
            if (oldPriceEl) {
                if (hasDiscount(p)) {
                    oldPriceEl.textContent = formatPrice(p.originalPrice);
                    oldPriceEl.style.display = '';
                } else {
                    oldPriceEl.textContent = '';
                    oldPriceEl.style.display = 'none';
                }
            }

            // Discount badge — hide when there's no discount
            const badgeEl = document.querySelector('[data-product-badge]');
            if (badgeEl) {
                if (hasDiscount(p)) {
                    const discount = Math.round((1 - p.price / p.originalPrice) * 100);
                    badgeEl.textContent = 'Sale — ' + discount + '% Off';
                    badgeEl.style.display = '';
                } else {
                    badgeEl.textContent = '';
                    badgeEl.style.display = 'none';
                }
            }

            // ---- Gallery — initial state from first colour variant's
            // images[] (or product-level images[] for legacy products).
            // renderThumbs() is reused by the colour-click handler below.
            const mainImg = document.querySelector('[data-gallery-main]');
            const thumbs = document.querySelector('[data-gallery-thumbs]');

            const renderThumbs = (imgs) => {
                if (!thumbs) return;
                thumbs.innerHTML = imgs.map((src, i) => ''
                    + '<li>'
                    +   '<button type="button" class="gallery__thumb' + (i === 0 ? ' is-active' : '') + '"'
                    +     ' data-gallery-thumb data-src="' + src + '"'
                    +     ' aria-label="View image ' + (i + 1) + '">'
                    +     '<img class="gallery__thumb-img" src="' + src + '" alt="">'
                    +   '</button>'
                    + '</li>'
                ).join('');
            };

            const initialImages = galleryImagesFor(p, 0);
            if (mainImg && initialImages[0]) {
                mainImg.src = initialImages[0];
                mainImg.alt = p.name;
            }
            renderThumbs(initialImages);

            // ---- Colour variants — clicking a colour swaps the main image
            //                      AND syncs the active thumb (when the colour
            //                      image is one of the gallery thumbs).
            const colorBlock = document.querySelector('[data-color-block]');
            if (colorBlock) {
                if (p.colorVariants && p.colorVariants.length) {
                    const colorValue = colorBlock.querySelector('[data-variant-value]');
                    if (colorValue) colorValue.textContent = p.colorVariants[0].name;

                    const colorOptions = colorBlock.querySelector('[data-color-options]');
                    if (colorOptions) {
                        colorOptions.innerHTML = p.colorVariants.map((c, i) => {
                            // Support both schemas: c.images[] (preferred, new)
                            // and c.image (legacy single string).
                            const colorImg = (c.images && c.images.length) ? c.images[0] : c.image;
                            return ''
                                + '<img'
                                +   ' class="color-thumb' + (i === 0 ? ' active' : '') + '"'
                                +   ' src="' + colorImg + '"'
                                +   ' alt="' + c.name + '"'
                                +   ' data-color-index="' + i + '"'
                                +   ' data-color-image="' + colorImg + '">';
                        }).join('');
                    }

                    // Hide colour selector if there's only a single colour
                    if (p.colorVariants.length < 2) {
                        colorBlock.style.display = 'none';
                    }

                    // When a colour thumbnail is clicked, mark it active,
                    // update the label, and refresh the gallery.
                    colorBlock.addEventListener('click', (e) => {
                        const opt = e.target.closest('.color-thumb');
                        if (!opt) return;
                        const idx = parseInt(opt.dataset.colorIndex, 10);
                        const c = p.colorVariants[idx];
                        if (!c) return;

                        // Active thumb sync
                        colorOptions.querySelectorAll('.color-thumb')
                            .forEach((t) => t.classList.remove('active'));
                        opt.classList.add('active');

                        // Label update
                        const colorValue = colorBlock.querySelector('[data-variant-value]');
                        if (colorValue) colorValue.textContent = c.name;

                        if (c.images && c.images.length) {
                            // New schema — replace the whole gallery
                            if (mainImg) mainImg.src = c.images[0];
                            renderThumbs(c.images);
                        } else if (c.image) {
                            // Legacy schema — swap main image only,
                            // sync the matching thumb's active state.
                            if (mainImg) mainImg.src = c.image;
                            if (thumbs) {
                                const allThumbs = thumbs.querySelectorAll('[data-gallery-thumb]');
                                allThumbs.forEach((t) => t.classList.remove('is-active'));
                                const matching = Array.from(allThumbs).find(
                                    (t) => t.getAttribute('data-src') === c.image
                                );
                                if (matching) matching.classList.add('is-active');
                            }
                        }
                    });
                } else {
                    colorBlock.style.display = 'none';
                }
            }

            // ---- Size variants
            const sizeBlock = document.querySelector('[data-size-block]');
            if (sizeBlock) {
                if (p.sizes && p.sizes.length) {
                    const sizeValue = sizeBlock.querySelector('[data-variant-value]');
                    if (sizeValue) sizeValue.textContent = p.sizes[0];

                    const sizeOptions = sizeBlock.querySelector('[data-size-options]');
                    if (sizeOptions) {
                        sizeOptions.innerHTML = '<select class="size-select" data-size-select>'
                            + p.sizes.map((s) =>
                                '<option value="' + s + '">' + s + '</option>'
                            ).join('')
                            + '</select>';

                        const sizeSelect = sizeOptions.querySelector('[data-size-select]');
                        if (sizeSelect) {
                            sizeSelect.addEventListener('change', (e) => {
                                const sizeValue = sizeBlock.querySelector('[data-variant-value]');
                                if (sizeValue) sizeValue.textContent = e.target.value;
                            });
                        }
                    }
                } else {
                    sizeBlock.style.display = 'none';
                }
            }

            // ---- Related products — same category, fall back to other categories
            const relatedGrid = document.querySelector('[data-related-grid]');
            if (relatedGrid) {
                let related = filterProducts({ category: p.category, exclude: p.id });
                if (related.length < 8) {
                    const more = PRODUCTS.filter((x) => x.id !== p.id && x.category !== p.category);
                    related = related.concat(more);
                }
                related = related.slice(0, 8);
                relatedGrid.innerHTML = related.map((rp) => cardHTML(rp, 'collection')).join('');
            }
        }
    }
})();
