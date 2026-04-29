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
                'https://vintares.com/cdn/shop/files/freepik_change-the-size-of-the-image-into-sqaure.-remove-background-and-change-it-to-solid-efefef-add-applya.-very-light-shadow_0001.jpg?v=1775043831&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-back.-make-him-look-at-his-left-side_0001.jpg?v=1775044078&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_fcd6cd1d-1759-4794-8425-d954b2a3b485.webp?v=1775044078&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_change-the-size-of-the-image-into-sqaure.-remove-background-and-change-it-to-solid-efefef-add-applya.-very-light-shadow_0002.png?v=1775044078&width=1024'
            ],
            colorVariants: [
                { name: 'Black', image: 'https://vintares.com/cdn/shop/files/freepik_change-the-size-of-the-image-into-sqaure.-remove-background-and-change-it-to-solid-efefef-add-applya.-very-light-shadow_0001.jpg?v=1775043831&width=1024' },
                { name: 'Navy',  image: 'https://vintares.com/cdn/shop/files/freepik_change-the-size-of-the-image-into-sqaure.-remove-background-and-change-it-to-solid-efefef-add-applya.-very-light-shadow_0002.png?v=1775044078&width=1024' }
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
                'https://vintares.com/cdn/shop/files/freepik_change-the-sweater-the-man-is-wear-in-img1-into-the-sweater-in-img2-make-both-hands-on-his-back_0001.webp?v=1774987075&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-side.-make-him-oblivious-of-the-camera_0001_8.webp?v=1774987075&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-back_0001_973fd899-e440-402f-92a3-cb51bb426590.webp?v=1774987075&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_creqate-nice-zoom-image-on-a-whiyte-abckground-fopcus-on-the-front-detail-make-it-flatlay-and-make-it-slightly-angled_0001.webp?v=1774987685&width=1024'
            ],
            colorVariants: [
                { name: 'Light Gray', image: 'https://vintares.com/cdn/shop/files/freepik_change-the-sweater-the-man-is-wear-in-img1-into-the-sweater-in-img2-make-both-hands-on-his-back_0001.webp?v=1774987075&width=1024' },
                { name: 'Navy Blue',  image: 'https://vintares.com/cdn/shop/files/freepik_change-the-siz-epf-the-image-into-square_0039.webp?v=1774987075&width=1024' },
                { name: 'Gray',       image: 'https://vintares.com/cdn/shop/files/freepik_change-the-sweater-the-man-is-wear-in-img1-into-the-sweater-in-img2-change-the-hand-pose-put-both-hands-togetehr-in-front-of-him_0001.webp?v=1774987641&width=1024' },
                { name: 'Dark Brown', image: 'https://vintares.com/cdn/shop/files/freepik_change-the-sweater-the-man-is-wear-in-img1-into-the-sweater-in-img2_0001.webp?v=1774987075&width=1024' },
                { name: 'Black',      image: 'https://vintares.com/cdn/shop/files/freepik_change-the-siz-epf-the-image-into-square_0038.webp?v=1774987075&width=1024' }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
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
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-cargo-pants-in-img1-.-make-him-wear-a-plain-white-tshirt-and-a-boots-shoes.-cut-off-the-image-from-his-hip-down-to-his-feet.-make-o_2a30b6b6-50ef-480c-8b8a-585e246996c5.jpg?v=1774614265&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_chnge-the-stance-of-the-model-in-img1-to-the-back.-refer-to-img2-for-the-details-of-the-nack-of-the-pants._0001.jpg?v=1774614856&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_e5db12dc-c6f6-480a-9a51-1ce3dcfa3750.webp?v=1774614856&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-cargo-pants-in-img1-.-make-him-wear-a-plain-white-tshirt-and-a-boots-shoes.-cut-off-the-image-from-his-hip-down-to-his-feet.-make-o_faf899c2-f94d-4f3c-ade8-3640bc8ea8a1.jpg?v=1774614856&width=1024'
            ],
            colorVariants: [
                { name: 'Olive Gray',    image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-cargo-pants-in-img1-.-make-him-wear-a-plain-white-tshirt-and-a-boots-shoes.-cut-off-the-image-from-his-hip-down-to-his-feet.-make-o_2a30b6b6-50ef-480c-8b8a-585e246996c5.jpg?v=1774614265&width=1024' },
                { name: 'Charcoal Gray', image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-cargo-pants-in-img1-.-make-him-wear-a-plain-white-tshirt-and-a-boots-shoes.-cut-off-the-image-from-his-hip-down-to-his-feet.-make-o_faf899c2-f94d-4f3c-ade8-3640bc8ea8a1.jpg?v=1774614856&width=1024' }
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
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_ff8eddba-d951-4333-a467-4c3301d39502.png?v=1774471122&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-in-img1-to-the-back.-refer-to-img2-fro-the-detsail-of-the-back-of-the-pants-background-should-be-efefef-and-apply-a-soft-shadow._0001.jpg?v=1774471655&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_f302667f-a762-49d3-b4ae-a13497a50153.png?v=1774471655&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_2d4740e9-4e2e-4513-923d-d809ddc1dc7b.png?v=1774472044&width=1024'
            ],
            colorVariants: [
                { name: 'Khaki Beige', image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_ff8eddba-d951-4333-a467-4c3301d39502.png?v=1774471122&width=1024' },
                { name: 'Navy Blue',   image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_f302667f-a762-49d3-b4ae-a13497a50153.png?v=1774471655&width=1024' },
                { name: 'Olive Green', image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_2d4740e9-4e2e-4513-923d-d809ddc1dc7b.png?v=1774472044&width=1024' },
                { name: 'Black',       image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-pants-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-pants.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h.jpg?v=1774472044&width=1024' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
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
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-cut-off-the-image-from-his-knee-down-to-his-feet.-make-one-of-the-foot-angled-a-bit.-make-him-wear-a-light-beige-p.webp?v=1774979381&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-in-img1-to-the-right-side.-refer-to-img2-for-the-side-profile-detail-of-the-shoes_0001.webp?v=1774979890&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_5e993af0-40a3-45f2-8bac-d4935d60696c.webp?v=1774979890&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-cut-off-the-image-from-his-knee-down-to-his-feet.-make-one-of-the-foot-angled-a-bit.-make-him-wear-a-light-beige-p_3f9dffa5-c918-44ef-aa83-87d5248de0f7.webp?v=1774979890&width=1024'
            ],
            colorVariants: [
                { name: 'Black', image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-cut-off-the-image-from-his-knee-down-to-his-feet.-make-one-of-the-foot-angled-a-bit.-make-him-wear-a-light-beige-p.webp?v=1774979381&width=1024' },
                { name: 'Brown', image: 'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wearing-the-shoes-in-img1-cut-off-the-image-from-his-knee-down-to-his-feet.-make-one-of-the-foot-angled-a-bit.-make-him-wear-a-light-beige-p_3f9dffa5-c918-44ef-aa83-87d5248de0f7.webp?v=1774979890&width=1024' }
            ],
            sizes: ['38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44', '44.5', '45.5']
        },
        {
            id: 'wallabee-shoes',
            name: 'Zarek | Moc Toe Wallabee Shoes Lace-Up Crepe Sole',
            category: 'shoes',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            images: [
                'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_f688cb3e-46d4-48ca-a2fd-a18716a88e7a.webp?v=1774871717&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_make-the-profile-of-the-shoes-in-frontboth-feet-on-the-floor.-.-make-it-facing-front_0001.jpg?v=1774889059&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-create-an-image-of-a-caucasian-man-wearing-a-light-beige-pants-wear-the-shoes-in-img1-make-the-pants-not-reach-the-shoes.-mak.png?v=1774889059&width=1024',
                'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_fa44c50b-cd71-49d8-aea5-8ce040a0e5f9.webp?v=1774889059&width=1024'
            ],
            colorVariants: [
                { name: 'Sand Beige',    image: 'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_f688cb3e-46d4-48ca-a2fd-a18716a88e7a.webp?v=1774871717&width=1024' },
                { name: 'Black',         image: 'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_fa44c50b-cd71-49d8-aea5-8ce040a0e5f9.webp?v=1774889059&width=1024' },
                { name: 'Charcoal Gray', image: 'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-shoes-in-img2-to-the-color-of-the-shoes-in-img1_0001.webp?v=1774889059&width=1024' },
                { name: 'Tan Brown',     image: 'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-shoes-in-img2-to-the-color-of-the-shoes-in-img1_0001_1.webp?v=1774889059&width=1024' }
            ],
            sizes: ['37', '38', '38.5', '39.5', '40', '41', '41.5', '42.5', '43', '44', '44.5', '45.5']
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
                'https://vintares.com/cdn/shop/files/freepik__change-the-image-into-square__56249_1.webp?v=1769767893&width=1024',
                'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__56248_1.webp?v=1769767935&width=1024',
                'https://vintares.com/cdn/shop/files/9_df3377ee-b885-4ac9-a925-7e09641dc253.webp?v=1769767935&width=1024',
                'https://vintares.com/cdn/shop/files/freepik__change-the-image-into-square__56246_1_1.webp?v=1769768016&width=1024'
            ],
            colorVariants: [
                { name: 'White',      image: 'https://vintares.com/cdn/shop/files/freepik__change-the-image-into-square__56249_1.webp?v=1769767893&width=1024' },
                { name: 'Tan',        image: 'https://vintares.com/cdn/shop/files/freepik__change-the-image-into-square__56246_1_1.webp?v=1769768016&width=1024' },
                { name: 'Light Blue', image: 'https://vintares.com/cdn/shop/files/freepik__change-the-image-into-square__56244_1.webp?v=1769768063&width=1024' }
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
                'https://vintares.com/cdn/shop/files/variant-image-1-Photoroom_1b05d548-cb50-406f-b3a0-fc5c46bb8b4e.jpg?v=1760729677&width=1024',
                'https://vintares.com/cdn/shop/files/ChatGPTImage17okt2025_21_49_43.png?v=1760731047&width=1024',
                'https://vintares.com/cdn/shop/files/variant-image-2-Photoroom_cddee024-0c87-4f62-a6a5-9a4f51e87612.jpg?v=1760731047&width=1024',
                'https://vintares.com/cdn/shop/files/variant-image-3-Photoroom_ab0021a2-cadd-4925-8d28-dfe3c87d0635.jpg?v=1760731053&width=1024'
            ],
            colorVariants: [
                { name: 'Navy Blue', image: 'https://vintares.com/cdn/shop/files/variant-image-1-Photoroom_1b05d548-cb50-406f-b3a0-fc5c46bb8b4e.jpg?v=1760729677&width=1024' },
                { name: 'Black',     image: 'https://vintares.com/cdn/shop/files/variant-image-2-Photoroom_cddee024-0c87-4f62-a6a5-9a4f51e87612.jpg?v=1760731047&width=1024' },
                { name: 'Bordeaux',  image: 'https://vintares.com/cdn/shop/files/variant-image-3-Photoroom_ab0021a2-cadd-4925-8d28-dfe3c87d0635.jpg?v=1760731053&width=1024' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
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
                'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74161.webp?v=1772649535&width=1024',
                'https://vintares.com/cdn/shop/files/1_1a81191e-2a51-4c34-8dc9-7d05df484293.webp?v=1772649535&width=1024',
                'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74162.webp?v=1772649535&width=1024',
                'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74163.webp?v=1772649535&width=1024'
            ],
            colorVariants: [
                { name: 'Silver Pink',  image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74161.webp?v=1772649535&width=1024' },
                { name: 'Silver Blue',  image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74162.webp?v=1772649535&width=1024' },
                { name: 'Gold Gray',    image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74163.webp?v=1772649535&width=1024' },
                { name: 'Black Yellow', image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74165.webp?v=1772649535&width=1024' },
                { name: 'Gold Pink',    image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74166.webp?v=1772649535&width=1024' },
                { name: 'Black Blue',   image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74167.webp?v=1772649788&width=1024' },
                { name: 'Gold Brown',   image: 'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74168.webp?v=1772650890&width=1024' }
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
                'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74170.webp?v=1772651932&width=1024',
                'https://vintares.com/cdn/shop/files/Screenshot2026-03-05at3.03.29AM.webp?v=1772651932&width=1024',
                'https://vintares.com/cdn/shop/files/freepik__character-reference-zoom-ou-t-the-image-cut-off-th__74169.webp?v=1772652130&width=1024',
                'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoom-ou-t-the-image-cut-__74171.webp?v=1772652130&width=1024'
            ],
            colorVariants: [
                { name: 'Silver Blue', image: 'https://vintares.com/cdn/shop/files/Screenshot2026-03-05at3.03.29AM.webp?v=1772651932&width=1024' },
                { name: 'Gold Brown',  image: 'https://vintares.com/cdn/shop/files/Screenshot2026-03-05at3.02.33AM.webp?v=1772652130&width=1024' },
                { name: 'Gold Black',  image: 'https://vintares.com/cdn/shop/files/Screenshot2026-03-05at3.03.49AM.webp?v=1772652130&width=1024' }
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
                'https://vintares.com/cdn/shop/files/main-image-2-Photoroom.jpg?v=1757865933&width=1024',
                'https://vintares.com/cdn/shop/files/main-image-3-Photoroom.jpg?v=1757865933&width=1024',
                'https://vintares.com/cdn/shop/files/main-image-4-Photoroom.jpg?v=1757865933&width=1024',
                'https://vintares.com/cdn/shop/files/main-image-1-Photoroom.jpg?v=1757865933&width=1024'
            ],
            colorVariants: [
                { name: 'Black', image: 'https://vintares.com/cdn/shop/files/main-image-2-Photoroom.jpg?v=1757865933&width=1024' }
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
                'https://vintares.com/cdn/shop/files/variant-image-9-Photoroom_4050fd6f-50b0-4567-b59b-580406402bd3.jpg?v=1755163900&width=1024',
                'https://vintares.com/cdn/shop/files/variant-image-4-Photoroom_b578d81c-536a-4f04-b71a-c84ab566685c.jpg?v=1755163900&width=1024',
                'https://vintares.com/cdn/shop/files/variant-image-7-Photoroom_26fb493e-688e-491f-a54e-15f80662f549.jpg?v=1755163900&width=1024',
                'https://vintares.com/cdn/shop/files/variant-image-2-Photoroom_70866a6e-ec9c-471e-883c-9d44a2dcd819.jpg?v=1756465315&width=1024'
            ],
            colorVariants: [
                { name: 'Navy Blue',     image: 'https://vintares.com/cdn/shop/files/variant-image-9-Photoroom_4050fd6f-50b0-4567-b59b-580406402bd3.jpg?v=1755163900&width=1024' },
                { name: 'Brown',         image: 'https://vintares.com/cdn/shop/files/variant-image-4-Photoroom_b578d81c-536a-4f04-b71a-c84ab566685c.jpg?v=1755163900&width=1024' },
                { name: 'Black',         image: 'https://vintares.com/cdn/shop/files/variant-image-7-Photoroom_26fb493e-688e-491f-a54e-15f80662f549.jpg?v=1755163900&width=1024' },
                { name: 'Emerald Green', image: 'https://vintares.com/cdn/shop/files/variant-image-2-Photoroom_70866a6e-ec9c-471e-883c-9d44a2dcd819.jpg?v=1756465315&width=1024' }
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
        return '$' + n.toFixed(2);
    }

    function hasDiscount(p) {
        return typeof p.originalPrice === 'number'
            && typeof p.price === 'number'
            && p.originalPrice > p.price;
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
            +     '<img class="' + cls + '__img" src="' + p.images[0] + '" alt="' + p.name + '" loading="lazy">'
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

            // ---- Gallery main image
            const mainImg = document.querySelector('[data-gallery-main]');
            if (mainImg) {
                mainImg.src = p.images[0];
                mainImg.alt = p.name;
            }

            // ---- Gallery thumbs
            const thumbs = document.querySelector('[data-gallery-thumbs]');
            if (thumbs) {
                thumbs.innerHTML = p.images.map((src, i) => ''
                    + '<li>'
                    +   '<button type="button" class="gallery__thumb' + (i === 0 ? ' is-active' : '') + '"'
                    +     ' data-gallery-thumb data-src="' + src + '"'
                    +     ' aria-label="View image ' + (i + 1) + '">'
                    +     '<img class="gallery__thumb-img" src="' + src + '" alt="">'
                    +   '</button>'
                    + '</li>'
                ).join('');
            }

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
                        colorOptions.innerHTML = p.colorVariants.map((c, i) => ''
                            + '<li>'
                            +   '<button type="button"'
                            +     ' class="variant__option' + (i === 0 ? ' is-active' : '') + '"'
                            +     ' data-variant-option'
                            +     ' data-color-image="' + c.image + '">'
                            +     c.name
                            +   '</button>'
                            + '</li>'
                        ).join('');
                    }

                    // Hide colour selector if there's only a single colour
                    if (p.colorVariants.length < 2) {
                        colorBlock.style.display = 'none';
                    }

                    // Swap main gallery image when a colour is clicked.
                    // If that image is also a thumbnail, mark the thumb active
                    // so the gallery stays in sync.
                    colorBlock.addEventListener('click', (e) => {
                        const opt = e.target.closest('[data-color-image]');
                        if (!opt) return;
                        const newSrc = opt.dataset.colorImage;
                        if (mainImg) mainImg.src = newSrc;

                        if (thumbs) {
                            const allThumbs = thumbs.querySelectorAll('[data-gallery-thumb]');
                            allThumbs.forEach((t) => t.classList.remove('is-active'));
                            const matching = Array.from(allThumbs).find(
                                (t) => t.getAttribute('data-src') === newSrc
                            );
                            if (matching) matching.classList.add('is-active');
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
                        sizeOptions.innerHTML = p.sizes.map((s, i) => ''
                            + '<li>'
                            +   '<button type="button"'
                            +     ' class="variant__option' + (i === 0 ? ' is-active' : '') + '"'
                            +     ' data-variant-option>'
                            +     s
                            +   '</button>'
                            + '</li>'
                        ).join('');
                    }
                } else {
                    sizeBlock.style.display = 'none';
                }
            }

            // ---- Related products — same category, fall back to other categories
            const relatedGrid = document.querySelector('[data-related-grid]');
            if (relatedGrid) {
                let related = filterProducts({ category: p.category, exclude: p.id });
                if (related.length < 4) {
                    const more = PRODUCTS.filter((x) => x.id !== p.id && x.category !== p.category);
                    related = related.concat(more);
                }
                related = related.slice(0, 4);
                relatedGrid.innerHTML = related.map((rp) => cardHTML(rp, 'collection')).join('');
            }
        }
    }
})();
