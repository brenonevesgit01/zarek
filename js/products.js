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
        {
            id: 'zip-up-stand-collar',
            name: 'Zarek | Zip-Up Jacket Stand Collar Textured Finish',
            category: 'coats-jackets',
            price: 69.95,
            originalPrice: 139.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Dark Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_b60c1ea6-b624-45f1-8fe9-89f67f6fa9ee.jpg?v=1774976582&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_b5fc2b45-1be9-426d-9b83-13cdf5dd9219.webp?v=1774976582&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-jacket-in-img2-into-the-jacke-tin-img1_0001_3.webp?v=1774976582&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_b5fc2b45-1be9-426d-9b83-13cdf5dd9219.webp?v=1774976582&width=1024'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-jacket-in-img2-into-the-jacke-tin-img1_0001_1.webp?v=1774976582&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_b5fc2b45-1be9-426d-9b83-13cdf5dd9219.webp?v=1774976582&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-jacket-in-img2-into-the-jacke-tin-img1_0001_2.webp?v=1774976582&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_b5fc2b45-1be9-426d-9b83-13cdf5dd9219.webp?v=1774976582&width=1024'
                ] },
                { name: 'Slate Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-jacket-in-img2-into-the-jacke-tin-img1_0001.webp?v=1774976582&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_b5fc2b45-1be9-426d-9b83-13cdf5dd9219.webp?v=1774976582&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background-and-change-it-to-efefef-apply-light-shadow.-position-is-centered-padding-is-9_0001_1.webp?v=1774619564&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-left-side-make-him-oblivious-of-the-camera_0001_1.jpg?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-coat-sweater-in-img2-to-the-coat-sweater-in-img1_0001_2fe2afd6-3369-44ae-a237-1498c81a2fad.webp?v=1774620190&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background-and-change-it-to-efefef-apply-light-shadow.-position-is-centered-padding-is-9_0001_1_1.webp?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-side-make-him-oblivious-of-the-camera_0001_1.jpg?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-coat-sweater-in-img2-to-the-coat-sweater-in-img1_00012_8cf6a04f-bbf5-4a52-bef5-c1a6a10f204a.webp?v=1774620190&width=1024'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background-and-change-it-to-efefef-apply-light-shadow.-position-is-centered-padding-is-9_0001.webp?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-left-side-make-him-oblivious-of-the-camera_0001.jpg?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-coat-sweater-in-img2-to-the-coat-sweater-img1_0001_e04e335f-a1e5-47be-a4df-0ff4aaf3b890.webp?v=1774620190&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background-and-change-it-to-efefef-apply-light-shadow.-position-is-centered-padding-is-9_0001_2.webp?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-side-make-him-oblivious-of-the-camera_0001.webp?v=1774620190&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_b310aa5a-a4d8-4089-88fb-8a11beabb35a.webp?v=1774620190&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik_char1char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clo.jpg?v=1774534589&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-back.-make-the-padding-9.-background-should-be-efefef-and-apply-soft-shadow_0001_2.jpg?v=1774536241&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-size-opf-the-image-into-square_0001_1.webp?v=1774536241&width=1024'
                ] },
                { name: 'Sand Beige', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-cl.jpg?v=1774536241&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-back.-make-the-padding-9.-background-should-be-efefef-and-apply-soft-shadow_0001_1.jpg?v=1774536241&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-size-opf-the-image-into-square_0001.webp?v=1774536241&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-char1-character-identity-reference.-use-only-the-person-from-char1-body-shape.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only.jpg?v=1774536241&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-back.-make-the-padding-9.-background-should-be-efefef-and-apply-soft-shadow_0001_4.jpg?v=1774536378&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-size-opf-the-image-into-square_0001_2.webp?v=1774536378&width=1024'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-char1-character-identity-reference.-use-only-the-person-from-char1-body-shape.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only.png?v=1774536378&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-back.-make-the-padding-9.-background-should-be-efefef-and-apply-soft-shadow_0001.png?v=1774536378&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-size-opf-the-image-into-square_0001_3.webp?v=1774536378&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background-and-change-it-to-efefef.-apply-a-soft-shadow_0001.webp?v=1774455279&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-side.-make-him-oblivious-of-the-camera_0001_1.webp?v=1774455279&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_ed454ba6-7186-4760-82cc-6204567638e9.webp?v=1774455279&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background-and-change-it-to-efefef.-apply-a-light-shadow_0001.webp?v=1774455279&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-side.-make-him-oblivious-of-the-camera_0001_0d875320-5c6a-4a16-8003-f28d0a3f157f.webp?v=1774455396&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-jacket-in-img2-to-the-jacket-in-img1_0001.webp?v=1774455396&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik_remove-the-background_0001.webp?v=1774455279&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-left-side-downward-a-bit.make-him-oblivious-of-the-camera_0001.webp?v=1774455279&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-jacket-in-img2-to-the-jacket-in-img1_0001_1.webp?v=1774455279&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__hchange-the-size-of-the-image-into-sqaure__50076.webp?v=1774388033&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-apply-b__50077.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-jacket-in-img2-to-the-color__78583.webp?v=1774442449&width=1024'
                ] },
                { name: 'Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__50072.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-apply-b__50084.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-jacket-in-img2-to-the-color__78584.webp?v=1774442449&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__50073.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-apply-b__50082.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-jacket-in-img2-to-the-color__78585.webp?v=1774442449&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__hchange-the-size-of-the-image-into-sqaure__50074.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-apply-b__50081.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-color-of-the-jacket-into-color-dark-nav__44659.webp?v=1774442449&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__hchange-the-size-of-the-image-into-sqaure__50075.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-apply-b__50080.webp?v=1774442449&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-background__44658.webp?v=1774442329&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-cardigan-the-man-is-wearin__44642.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-stance-of-the-model-to-the-side__44645.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-background__44641.webp?v=1774370365&width=1024'
                ] },
                { name: 'Orange', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__44639.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-stance-of-the-model-to-the-back__59359.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-background__44633.webp?v=1774370365&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-cardigan-the-man-is-wearin__44638.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-stance-of-the-model-to-the-side__59360.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-background__44630.webp?v=1774370365&width=1024'
                ] },
                { name: 'Heather Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-cardigan-the-man-is-wearin__44643.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-stance-of-the-model-to-the-side__44644.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-background__44631.webp?v=1774370365&width=1024'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-cardigan-the-man-is-wearin__44640.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-stance-of-the-model-to-the-back__44646.webp?v=1774370365&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-background__44634.webp?v=1774370365&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__34513.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__34515.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__34506.webp?v=1774302650&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__34523.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__34518.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__34507.webp?v=1774302650&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__34514.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__34517.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__34508.webp?v=1774302650&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__34511.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__34526.webp?v=1774302719&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-extra-zipper-in-the-opening-only-do-not__34522.webp?v=1774302719&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__34524.webp?v=1774302719&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__34525.webp?v=1774302719&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__34504.webp?v=1774302719&width=1024'
                ] },
                { name: 'Royal Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__34512.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__34516.webp?v=1774302650&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__34505.webp?v=1774302650&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__52058.webp?v=1773233626&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__52061.webp?v=1773233626&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-as-the-reference-product-generate-a-clean-ecom__52055.webp?v=1773233626&width=1024'
                ] },
                { name: 'Charcoal Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__52060.webp?v=1773233626&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__52063.webp?v=1773233626&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-jacket-in-img1-into-the-co__52057.webp?v=1773233626&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__52059.webp?v=1773233626&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__52062.webp?v=1773233626&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-jacket-in-img1-into-the-co__52056.webp?v=1773233626&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__88772.webp?v=1773172667&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__88776.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__88768.webp?v=1773173481&width=1024'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__88774.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__88778.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__88769.webp?v=1773173481&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__88773.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__88779.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__88770.webp?v=1773173481&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__88775.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__88780.webp?v=1773173481&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__88771.webp?v=1773173481&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__4566.jpg?v=1773150216&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__4569.jpg?v=1773150413&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__4563.webp?v=1773150413&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__4567.jpg?v=1773150413&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__4568.jpg?v=1773150413&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__4564.webp?v=1773150413&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__4557.webp?v=1773147843&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-mnake-h__4558.webp?v=1773147843&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__4555.webp?v=1773147843&width=1024'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__4559.webp?v=1773147843&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back__4560.webp?v=1773147843&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__4556.webp?v=1773147843&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__6785.webp?v=1770822669&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6786.webp?v=1770822669&width=1024',
                    'https://vintares.com/cdn/shop/files/8_0fc604ca-4cbe-468b-adb3-d2dbde1f09f9.webp?v=1770822689&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__6780.webp?v=1770822689&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6784.webp?v=1770822689&width=1024',
                    'https://vintares.com/cdn/shop/files/6_5c720567-6fd6-49eb-ad35-431bd06aacdc.webp?v=1770822901&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__6782.webp?v=1770822901&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6783.webp?v=1770822901&width=1024',
                    'https://vintares.com/cdn/shop/files/7_629eaa02-7514-468e-bba7-6fcfb4628154.webp?v=1770822901&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__6769.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6774.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/2_638863b6-0a1d-4e2a-afd7-18228ed351e5.webp?v=1770819896&width=1024'
                ] },
                { name: 'Black / Graphite Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__6772.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6778.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/6_c7e039eb-c364-4b95-afbc-d88ae23bbdef.webp?v=1770819896&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__6771.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6777.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/5_57d74db9-312a-4a33-a427-cc1579212158.webp?v=1770819896&width=1024'
                ] },
                { name: 'Green / Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__6768.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6775.webp?v=1770819896&width=1024',
                    'https://vintares.com/cdn/shop/files/3_a83b396c-c0b8-4b8d-a8eb-fe4fd4fa483c.webp?v=1770819896&width=1024'
                ] },
                { name: 'Dark Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__6773.webp?v=1770820610&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6779.webp?v=1770820610&width=1024',
                    'https://vintares.com/cdn/shop/files/7_1436013b-7a51-40f2-af74-d38cffdd9b91.webp?v=1770820610&width=1024'
                ] },
                { name: 'Olive', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__6770.webp?v=1770820610&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-g1-to-the-s__6776.webp?v=1770820610&width=1024',
                    'https://vintares.com/cdn/shop/files/4_4521cf80-73a2-4b31-8324-8682d6f0d186.webp?v=1770820610&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__58652.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__58654.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/1_2504b10f-2ff6-43bd-8763-166dd5caba3b.webp?v=1770814068&width=1024'
                ] },
                { name: 'Slate Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__58653.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__6761.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/2_378c87bb-d9c2-49ab-873a-466369a51541.webp?v=1770814068&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__6762.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__58655.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/3_c1d887ec-e002-49be-9e16-ef0bcf45faba.webp?v=1770814068&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__6765.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__6764.webp?v=1770814068&width=1024',
                    'https://vintares.com/cdn/shop/files/4_d85e69de-2fb9-402d-a1b1-2ffc950ddc09.webp?v=1770814068&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18893.webp?v=1770756868&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18901.webp?v=1770756974&width=1024',
                    'https://vintares.com/cdn/shop/files/10_a0aaa22f-c234-4b5d-b008-0b2c90e6e51a.webp?v=1770756974&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18895.webp?v=1770756991&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18898.webp?v=1770756991&width=1024',
                    'https://vintares.com/cdn/shop/files/12_4867f86e-f05f-4596-bcd8-bb0b63003a45.webp?v=1770756991&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18894.webp?v=1770756974&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18900.webp?v=1770756974&width=1024',
                    'https://vintares.com/cdn/shop/files/13_2fc38464-3083-426a-b27e-bd3063b24258.webp?v=1770756974&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18896.webp?v=1770756974&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18899.webp?v=1770756974&width=1024',
                    'https://vintares.com/cdn/shop/files/14_d7e4cec8-a85b-4e52-8a71-0ff1a2b6791f.webp?v=1770756974&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__18881.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__18882.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/3_918e49a0-e1f4-41ee-989e-747e41f20797.webp?v=1770753823&width=1024'
                ] },
                { name: 'Taupe', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__18883.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__18884.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/41.webp?v=1770753823&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__18886.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__18885.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/1_64516544-2c4b-403e-99d3-760e8badf866.webp?v=1770753823&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__18887.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__18888.webp?v=1770753823&width=1024',
                    'https://vintares.com/cdn/shop/files/42.webp?v=1770753823&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18878.webp?v=1770749867&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-change-the-stance-of-the__18879.webp?v=1770749868&width=1024',
                    'https://vintares.com/cdn/shop/files/2_d7c65a36-a4d0-43ce-a078-29c53288d220.webp?v=1770749868&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18877.webp?v=1770749867&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-change-the-stance-of-the__18880.webp?v=1770749868&width=1024',
                    'https://vintares.com/cdn/shop/files/5_a11f287c-dc10-4a09-884e-dd63784ff48c.webp?v=1770749868&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18872.webp?v=1770747999&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18875.webp?v=1770747999&width=1024',
                    'https://vintares.com/cdn/shop/files/2_f73548dd-38cb-4b71-8e8a-c8bc63fc65e1.webp?v=1770747999&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18869.webp?v=1770747999&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18873.webp?v=1770747999&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-tshirt-underneath__18867.webp?v=1770748393&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__18871.webp?v=1770748393&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-back__18874.webp?v=1770748393&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-tshirt-underneath__18866.webp?v=1770748393&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__18860.webp?v=1770743953&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__18862.webp?v=1770743953&width=1024',
                    'https://vintares.com/cdn/shop/files/2_bfd7fa7d-e9c9-4928-8b8f-faaf8c76f252.webp?v=1770743953&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__18863.webp?v=1770743953&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-img1-to-the-side__18865.webp?v=1770743953&width=1024',
                    'https://vintares.com/cdn/shop/files/4_727419ef-8efc-49c1-b194-50c2b6d5b51b.webp?v=1770743953&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__cahnge-the-size-f-the-image-into-square__910_1.webp?v=1770295987&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-img1to-the-side-mak__912.webp?v=1770295987&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-img1to-the-back-mak__913.webp?v=1770295987&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__37288.webp?v=1768663710&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-give-me__37293.webp?v=1768664561&width=1024',
                    'https://vintares.com/cdn/shop/files/6_7ef5ee75-3d1c-4eef-96e9-e8b98b0bc1ca.webp?v=1768664561&width=1024'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__37290.webp?v=1768664561&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-give-me__37292.webp?v=1768664561&width=1024',
                    'https://vintares.com/cdn/shop/files/9_c1c87703-3513-4a7e-89e4-dfd8fa2131c8.webp?v=1768664561&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__make-the-image-square__74574.webp?v=1768588315&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__the-img1-is-the-back-profile-of-a-jacket-make-char__74576.webp?v=1768588593&width=1024',
                    'https://vintares.com/cdn/shop/files/7_1.webp?v=1768588593&width=1024'
                ] },
                { name: 'Dark Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__make-the-image-square__74577.webp?v=1768588763&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__the-img1-is-the-back-profile-of-a-jacket-make-char__74578.webp?v=1768588763&width=1024',
                    'https://vintares.com/cdn/shop/files/2_1.webp?v=1768588763&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__make-the-image-square__74572.webp?v=1768588876&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-sidemake-him__74575.webp?v=1768588876&width=1024',
                    'https://vintares.com/cdn/shop/files/4_0e79f641-66c4-4214-bb80-a31aec3fd3cf.webp?v=1768588745&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22812.jpg?v=1773420954&width=1024',
                    'https://vintares.com/cdn/shop/files/4_c4f22412-feb8-4a91-9ebe-ace469ba9aab.webp?v=1773420954&width=1024'
                ] },
                { name: 'Slate Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22813.jpg?v=1773421798&width=1024',
                    'https://vintares.com/cdn/shop/files/6_63772bd6-1a14-4d9f-aeac-54c5b2ee7ca0.webp?v=1773421798&width=1024'
                ] },
                { name: 'Dark Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22814.jpg?v=1773422188&width=1024',
                    'https://vintares.com/cdn/shop/files/8_530f3dfa-d762-4368-9d4a-fa9a85a04183.webp?v=1773422188&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22815.jpg?v=1773422188&width=1024',
                    'https://vintares.com/cdn/shop/files/10_87a8e853-213c-48c1-b16b-46290c93d889.webp?v=1773422188&width=1024'
                ] },
                { name: 'Dark Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22816.jpg?v=1773422231&width=1024',
                    'https://vintares.com/cdn/shop/files/12_a1a7569e-4e70-4d8b-a2ea-4388516c3d2d.webp?v=1773422231&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22817.jpg?v=1773422231&width=1024',
                    'https://vintares.com/cdn/shop/files/14_08aed894-0f59-408a-9a9a-2957a1f9457d.webp?v=1773422231&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__22807.webp?v=1773419831&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__22808.webp?v=1773419831&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22804.webp?v=1773419831&width=1024'
                ] },
                { name: 'Dark Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__22805.webp?v=1773419831&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__22810.webp?v=1773419831&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22802.webp?v=1773419831&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__22806.webp?v=1773419831&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__22809.webp?v=1773419831&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22803.webp?v=1773419831&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22772.jpg?v=1773412019&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__22776_f0263a07-b620-4156-8cc3-15df0e72b7f9.jpg?v=1773412019&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22771.webp?v=1773412019&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22774.jpg?v=1773412748&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__22775.jpg?v=1773412748&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22770.webp?v=1773412748&width=1024'
                ] },
                { name: 'Sage Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22773.jpg?v=1773412019&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__22777.jpg?v=1773412748&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22769.webp?v=1773412748&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__22818.webp?v=1773424676&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22828.jpg?v=1773425176&width=1024',
                    'https://vintares.com/cdn/shop/files/1_3672fb0d-a479-4591-b0c9-e3f5aac01426.webp?v=1773425176&width=1024'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22825.webp?v=1773425176&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22829.jpg?v=1773425375&width=1024',
                    'https://vintares.com/cdn/shop/files/2_5b032be7-fa0d-4b39-866e-a301ab788bd9.webp?v=1773425375&width=1024'
                ] },
                { name: 'Dark Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__chaneg-the-size-of-the-image-into-square__22820.webp?v=1773425375&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__22830.jpg?v=1773425645&width=1024',
                    'https://vintares.com/cdn/shop/files/3_f308a957-5df3-4836-879b-e79f6ca6c06e.webp?v=1773425645&width=1024'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22821.webp?v=1773425645&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__22831.jpg?v=1773425645&width=1024',
                    'https://vintares.com/cdn/shop/files/4_547c6650-754a-4c32-8094-621274069c9c.webp?v=1773425645&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22822.webp?v=1773425645&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__22833.jpg?v=1773425828&width=1024',
                    'https://vintares.com/cdn/shop/files/5_df4f70cf-d040-42c5-bd63-c3e09ce33143.webp?v=1773425828&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22823.webp?v=1773425828&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__22832.jpg?v=1773425828&width=1024',
                    'https://vintares.com/cdn/shop/files/6_00a03953-b4eb-4075-904c-aa18da24f990.webp?v=1773425828&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22824.webp?v=1773425828&width=1024',
                    'https://vintares.com/cdn/shop/files/7_c3cd2e80-00eb-4139-9d30-ac5218dc887f.webp?v=1773425828&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_127e1054-bea0-4e3f-850c-7233261b8e52.jpg?v=1774546212&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-change-the-stance-of-the-model-to-the-back_0001.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_e64691e5-b725-4270-8c40-72175a54f9f2.webp?v=1774547008&width=1024'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_3460ee9c-82f6-4cf3-a5b1-e2c1e0753705.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-change-the-stance-of-the-model-to-the-back._0001_1.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_7211760d-9208-41e3-805d-727bf6030567.webp?v=1774547008&width=1024'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_a23b294d-ce98-401c-b36d-3787c4db5451.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-change-the-stance-of-the-model-to-the-back.-one-foot-forward.-one-hand-on-the-side-pocket_0001_1_1.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_86ff6b2b-07d5-4659-8eeb-21467cdc8085.webp?v=1774547008&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_e90862f2-fa50-4132-936d-29092c55e763.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-change-the-stance-of-the-model-to-the-back.-one-foot-forward.-one-hand-on-the-side-pocket_0001_1.jpg?v=1774547008&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_42bc3d25-aafb-4b98-b5fd-d02fc05ded22.webp?v=1774547008&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_153fa78f-df3a-453f-8d83-65ed1654363d.webp?v=1774543279&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-change-the-stance-of-the-model-to-the-back._0001.webp?v=1774543922&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_e8280104-8849-4f1f-820b-362fe9565d12.webp?v=1774543922&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik_char1-character-identity-reference.-use-only-the-person-from-char1-face.-discard-all-clothing-from-char1-.-img1-primary-clothing-item.-dress-the-person-using-only-the-clothing_3e1d26ad-7b99-4f82-96d3-db3bbb597ed8.jpg?v=1774543922&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_background-is-solid-efefef-and-apply-soft-shadow.-change-the-stance-of-the-model-to-the-right-side-make-him-oblivious-of-the-camera_0001.jpg?v=1774543928&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_use-img1-as-the-reference-product.-generate-a-clean-ecommerce-flatlay-topdown-view-perfectly-straight-alignment-centered-composition-solid-efefef-background.-remove-hanger-and_e113bfd3-04e0-450e-9d93-2d8e2266b438.webp?v=1774543928&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22740.webp?v=1773405867&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22749.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__22746.webp?v=1773407407&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22741.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22750.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-in-img1-into-the-col__22744.webp?v=1773407407&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22742.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22752.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-into-color-black__22747.webp?v=1773407407&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22743.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__22751.webp?v=1773407407&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-into-color-white__22748.webp?v=1773407407&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22725.jpg?v=1773402676&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22732.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/1_1a2790f8-c925-4909-9cdb-e479a9913131.webp?v=1773403798&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22728.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22736.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/3_da2aef0a-f9b7-4498-b7bb-d87c8dab3fed.webp?v=1773403798&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22729.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22733.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/4_a469428d-ad35-4216-9768-b8d9ca435030.webp?v=1773403798&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22730.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22731.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/5_0481d4a3-f2f5-4c62-b430-c7475c9150ac.webp?v=1773403798&width=1024'
                ] },
                { name: 'Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__22727.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__22734.jpg?v=1773403798&width=1024',
                    'https://vintares.com/cdn/shop/files/2_dfcd26f4-6e87-4529-9430-8754fe00f5f2.webp?v=1773403798&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41140.webp?v=1773312732&width=1024',
                    'https://vintares.com/cdn/shop/files/6_37fe96e2-26ec-4061-8ad3-9e63d3f95b6f.webp?v=1773312732&width=1024'
                ] },
                { name: 'Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41144.webp?v=1773312732&width=1024',
                    'https://vintares.com/cdn/shop/files/8_0b406677-ec05-4a0a-b8e8-0b897fbb5300.webp?v=1773312732&width=1024'
                ] },
                { name: 'Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41139.webp?v=1773312732&width=1024',
                    'https://vintares.com/cdn/shop/files/5_0087d447-130d-443c-8000-7417a2ceed6e.webp?v=1773312732&width=1024'
                ] },
                { name: 'Purple', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41138_076d9b68-0533-4023-8d43-027047a12e2e.webp?v=1773313339&width=1024',
                    'https://vintares.com/cdn/shop/files/4_b8203c15-e374-4d05-a72d-91efeda9e019.webp?v=1773313339&width=1024'
                ] },
                { name: 'Yellow', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41135.webp?v=1773313339&width=1024',
                    'https://vintares.com/cdn/shop/files/2_ea9ab9db-8086-44a6-915c-26d9b01f2122.webp?v=1773313339&width=1024'
                ] },
                { name: 'Teal', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41142.webp?v=1773313339&width=1024',
                    'https://vintares.com/cdn/shop/files/1_06c868cc-6681-43e5-bd3f-b484fa96dbba.webp?v=1773313339&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41137.webp?v=1773313339&width=1024',
                    'https://vintares.com/cdn/shop/files/3_0088ff41-8fd4-4a53-a4c4-1df5f41719ff.webp?v=1773313339&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41143.webp?v=1773313339&width=1024',
                    'https://vintares.com/cdn/shop/files/9_ff865494-8c1b-4567-a890-74589505af3b.webp?v=1773313339&width=1024'
                ] },
                { name: 'Orange', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__91280.webp?v=1773313339&width=1024',
                    'https://vintares.com/cdn/shop/files/7_742ae64c-220a-4e27-9809-e577155747e8.webp?v=1773313339&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__41118.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__41133.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-in-img1-into-the-col__41112.webp?v=1773263586&width=1024'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__41121.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__41127.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-in-img1-into-the-col__41116.webp?v=1773263586&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__41119.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__41132.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-in-img1-into-the-col__41115.webp?v=1773263586&width=1024'
                ] },
                { name: 'Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__make-the-model-wear-the-shirt-in-the-second-photo-__41126.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__41125.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-in-img1-into-the-col__41113.webp?v=1773263586&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-inb-img1-into-color-__41128.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__41129.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41111.webp?v=1773263586&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-inb-img1-into-color-__41130.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__41131.webp?v=1773263586&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-in-img1-into-the-col__41117.webp?v=1773263586&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41105.webp?v=1773257822&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-abck-amke-hi__41106.webp?v=1773257822&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-shirt-into-color-white__41110.webp?v=1773258392&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41103.webp?v=1773953460&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-abck-amke-hi__41104.webp?v=1773953460&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41109.webp?v=1773258392&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41089.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-to-the-back-make-hi__41098.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41085.webp?v=1773256115&width=1024'
                ] },
                { name: 'Light Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41093.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-to-the-back-make-hi__41095.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41086.webp?v=1773256115&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41090.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-to-the-back-make-hi__41094.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41084.webp?v=1773256115&width=1024'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41092.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-to-the-back-make-hi__41096.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41087.webp?v=1773256115&width=1024'
                ] },
                { name: 'Teal', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__41091.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-image-to-the-back-make-hi__41097.webp?v=1773256115&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41088.webp?v=1773256115&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-wearing-identical-produc__91308.webp?v=1772275355&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-torso-t__91314.webp?v=1772275355&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-reference-product-topdown-flatlay-perf__31904_96638d5e-a694-40d6-bf05-f104395fa4ff.webp?v=1772275823&width=1024'
                ] },
                { name: 'Light Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-from-img1-worn-by-model-cent__31910.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-from-img1-worn-by-model-squa__31911.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31900_d249abae-a9c2-4c03-bfce-ba47d696ab20.webp?v=1772275823&width=1024'
                ] },
                { name: 'Dusty Pink', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-identical-product-from-reference-held-by-model__31907.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-left-fo__91309.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31903_2c0d0c3e-5129-47ba-9066-9173a5017b3b.webp?v=1772275823&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-shown-in-the-reference-image__31913.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-from-img1-worn-by-model-squa__31912.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31898_afa779f5-ab46-4c7c-84da-c9de5c943562.webp?v=1772275823&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-shown-zoomed-out-composition__31909.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-torso-t__91311.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31901_d264310a-5440-417b-bc67-87d526284126.webp?v=1772275823&width=1024'
                ] },
                { name: 'Light Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-from-img1-worn-by-a-male-mod__31908.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-torso-t__91312.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31902_7e51da13-524d-487a-b182-3ae90c0b3304.webp?v=1772275823&width=1024'
                ] },
                { name: 'Sage Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__replicate-product-exactly-from-reference-model-wit__31906.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-full-pr__91310.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31905_54ebf202-b15f-41a3-a150-d98878cac1d6.webp?v=1772275823&width=1024'
                ] },
                { name: 'Dark Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__produce-a-studioshot-with-the-identical-product-fr__22985.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-the-exact-product-from-reference-worn-by-a-mal__22986.webp?v=1772275823&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31895_eedb2465-4c80-4808-a90c-d0dda5c14b6c.webp?v=1772275886&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-zoomed-out-face-forward-__91307.webp?v=1772275886&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-torso-t__91313.webp?v=1772275886&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__31894_e9d5a05b-1306-4c7c-a995-855b2cc25a08.webp?v=1772275823&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__14353.webp?v=1772733974&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__14359.webp?v=1772733974&width=1024',
                    'https://vintares.com/cdn/shop/files/6_db32af78-f7ef-44d2-af35-e6fa272ceeff.webp?v=1772733974&width=1024'
                ] },
                { name: 'Beige', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__14354.webp?v=1772733974&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__14357.webp?v=1772733974&width=1024',
                    'https://vintares.com/cdn/shop/files/7_e7f4ef89-aa01-4d18-a898-0c3bd4ae8fab.webp?v=1772733974&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__14355.webp?v=1772733974&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__14356.webp?v=1772733974&width=1024',
                    'https://vintares.com/cdn/shop/files/5_f77b29ed-c4a7-4438-950a-309cf9eb87e4.webp?v=1772733974&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__61065.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-note-th__61071.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61060.webp?v=1772201394&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__61067.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-note-th__61069.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61061.webp?v=1772201394&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__61064.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-note-th__61070.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-top-into-color-black__61063.webp?v=1772201394&width=1024'
                ] },
                { name: 'Dark Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__61068.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-note-th__61072.webp?v=1772201394&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__61062.webp?v=1772201394&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__61047.webp?v=1772197954&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__61056.webp?v=1772197955&width=1024',
                    'https://vintares.com/cdn/shop/files/2_216fd845-d5ea-4c78-85ad-70e9f7efc7e7.webp?v=1772196295&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__61049.webp?v=1772197954&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__61053.webp?v=1772197954&width=1024',
                    'https://vintares.com/cdn/shop/files/1_056b9c69-bfed-4047-8ba7-ee2568502977.webp?v=1772196295&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__61058.webp?v=1772198472&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__61057.webp?v=1772198472&width=1024',
                    'https://vintares.com/cdn/shop/files/3_6a5c396f-43d2-4eaa-a08d-62a1896f1056.webp?v=1772198472&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__61050.webp?v=1772198472&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__61054.webp?v=1772198472&width=1024',
                    'https://vintares.com/cdn/shop/files/4_22049eab-b6f0-4bd1-9092-43d22df118cc.webp?v=1772198472&width=1024'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-char1-use-the-exact-product-sh__61051.webp?v=1772198472&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__61055.webp?v=1772198472&width=1024',
                    'https://vintares.com/cdn/shop/files/5_259d57f0-cacc-44b0-bb80-41319aea7dcb.webp?v=1772198472&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__23817.webp?v=1771526186&width=1024',
                    'https://vintares.com/cdn/shop/files/1_711d955c-1785-4f8a-8a0f-724c9090913b.webp?v=1771526186&width=1024'
                ] },
                { name: 'Light Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__23819.webp?v=1771526186&width=1024',
                    'https://vintares.com/cdn/shop/files/2_4c4193fe-53ac-4edf-b187-a8b5f1fdd2b1.webp?v=1771526186&width=1024'
                ] },
                { name: 'Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__23821.webp?v=1771526186&width=1024',
                    'https://vintares.com/cdn/shop/files/4_e812c1c5-508e-4d44-8869-ae790b73c139.webp?v=1771526186&width=1024'
                ] },
                { name: 'Yellow', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__23824.webp?v=1771526186&width=1024',
                    'https://vintares.com/cdn/shop/files/5_aca867d4-790f-4887-85ff-cdcf08ef324a.webp?v=1771526186&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__23822.webp?v=1771526186&width=1024',
                    'https://vintares.com/cdn/shop/files/6_bddeeed8-6bf8-4077-a7c2-90d36c1a16d1.webp?v=1771526186&width=1024'
                ] },
                { name: 'Navy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__23823.webp?v=1771526186&width=1024',
                    'https://vintares.com/cdn/shop/files/7_663d0666-6907-4cb3-9d9a-8190f5f69e8e.webp?v=1771526186&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__73193.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-to-the-side-no-w__73200.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__73186.webp?v=1771520490&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__73192.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-to-the-side-no-w__73199.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__73185.webp?v=1771520490&width=1024'
                ] },
                { name: 'Yellow', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__73194.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-to-the-side-no-w__73202.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__73188.webp?v=1771520490&width=1024'
                ] },
                { name: 'Light Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__73195.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-to-the-side-no-w__73201.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__73189.webp?v=1771520490&width=1024'
                ] },
                { name: 'Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__73197.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-to-the-side-no-w__73203.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__73190.webp?v=1771520490&width=1024'
                ] },
                { name: 'Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__73198.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-in-to-the-side-no-w__73204.webp?v=1771520490&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__73191.webp?v=1771520490&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__11242.webp?v=1771155354&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__character-reference-img1-change-the-stance-of-the-__11246.webp?v=1771155354&width=1024',
                    'https://vintares.com/cdn/shop/files/3_806ec1bb-9f5f-47dc-9a7c-e0c3e977cca7.webp?v=1771155354&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__11247.webp?v=1771155354&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11245.webp?v=1771155354&width=1024',
                    'https://vintares.com/cdn/shop/files/5_3765fa49-f46e-4a48-9331-6f9958f9bc81.webp?v=1771155354&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-into-square-remove-the-background-__11221.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11224.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/1_40f8fc8a-1d99-482d-b1d8-06face64bc5e.webp?v=1771150613&width=1024'
                ] },
                { name: 'Mint', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__11223.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11225.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/3_0fb98661-d9d9-47af-a71e-59bf2b1a4e38.webp?v=1771150613&width=1024'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-longsleeve-the-man-is-wearing__11227.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11232.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/5_56127771-51bb-4a45-a156-becc223e5e5c.webp?v=1771150613&width=1024'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-long-sleeve__11229.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11231.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/2_b01017d6-bc07-401a-b160-da627a7e83bd.webp?v=1771150613&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-long-sleeve__11228.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11235.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/6_a605f3de-652c-470a-a4f1-399794a48e4e.webp?v=1771150613&width=1024'
                ] },
                { name: 'Burgundy', images: [
                    'https://vintares.com/cdn/shop/files/freepik__reza-reza-char1-character-identity-referenceuse-on__11233.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-make-hi__11234.webp?v=1771150613&width=1024',
                    'https://vintares.com/cdn/shop/files/4_0759c748-350f-49be-9f89-f58712bfaf66.webp?v=1771150613&width=1024'
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
        {
            id: 'chino-shorts',
            name: 'Zarek | Chino Shorts Straight Fit Flat Front',
            category: 'pants',
            price: 44.94,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30470.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/7_cb2d03e9-2ada-4dde-9fa2-3719dc9cdce5.webp?v=1773329566&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30476.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/1_200d6410-14b1-4564-b8fe-bf41c97e7c9c.webp?v=1773329566&width=1024'
                ] },
                { name: 'Navy Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30475.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/2_7ffa3b18-a31a-4b0c-9405-5324a1277d66.webp?v=1773329566&width=1024'
                ] },
                { name: 'Sky Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30473.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/3_7cc382b5-83a1-473c-ad4c-7c840e01ca3b.webp?v=1773329566&width=1024'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30474.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/4_c0bb1d32-2faf-49cb-92be-d8ed4cc7fcd0.webp?v=1773329566&width=1024'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30472.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/5_d3b410e2-fd4c-424e-8f04-766c2e28fa47.webp?v=1773329566&width=1024'
                ] },
                { name: 'Charcoal Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30471.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/6_336a4329-9b2a-4396-9a25-d1dba0c57cc7.webp?v=1773329566&width=1024'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30468.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/9_1276d71d-3566-444e-a470-905c9ef98705.webp?v=1773329566&width=1024'
                ] },
                { name: 'Pink', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30469.webp?v=1773329566&width=1024',
                    'https://vintares.com/cdn/shop/files/8_2d31b1c0-ceba-4d32-909f-8ec1ee9a9ba3.webp?v=1773329566&width=1024'
                ] },
                { name: 'Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__30466.webp?v=1773329718&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-refer-t__30467.webp?v=1773329718&width=1024',
                    'https://vintares.com/cdn/shop/files/10_68fce2f5-75ab-4d49-82b3-c625eeb042f0.webp?v=1773329718&width=1024'
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
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-sqaure__41054.jpg?v=1773247880&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side__41056.jpg?v=1773247880&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__1313.webp?v=1773247880&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-sqaure__41057.png?v=1773247880&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side__41059.webp?v=1773248140&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-short-in-img1-into-color-b__41053.webp?v=1773248140&width=1024'
                ] }
            ],
            sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL']
        },
        {
            id: 'cargo-shorts-button-straight',
            name: 'Zarek | Cargo Shorts Straight Fit Multi-Pocket Utility',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41075.jpg?v=1773251453&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41067.webp?v=1773251453&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41076.jpg?v=1773251453&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41068.webp?v=1773251453&width=1024'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41077.jpg?v=1773251453&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41069.webp?v=1773251453&width=1024'
                ] },
                { name: 'Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41078.jpg?v=1773251876&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41070.webp?v=1773251876&width=1024'
                ] },
                { name: 'Slate Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41079.jpg?v=1773251876&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41071.webp?v=1773251876&width=1024'
                ] },
                { name: 'Beige', images: [
                    'https://vintares.com/cdn/shop/files/freepik__char1-character-identity-referenceuse-only-the-per__41081.jpg?v=1773251876&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__41073.webp?v=1773251876&width=1024'
                ] }
            ],
            sizes: ['29', '30', '31', '32', '33', '34', '36', '38', '40', '42', '44']
        },
        {
            id: 'cargo-shorts-elastic-multipocket',
            name: 'Zarek | Cargo Shorts Elastic Waist Drawstring Multi Pocket',
            category: 'pants',
            price: 59.95,
            originalPrice: 119.90,
            badge: 'SALE',
            colorVariants: [
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-short-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-short.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h_09d2c3b4-45f1-4db0-9383-a91c191eaee4.png?v=1774469070&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-right-side.-make-one-foot-forward-one-hand-on-his-pocket.-background-is-solid-efefef-and-apply-soft-shadow_0001.png?v=1774469523&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-size-of-the-image-into-square_0001.webp?v=1774469523&width=1024'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik_create-an-image-of-a-caucasian-man-wear-the-short-in-img1-make-him-wear-a-plain-white-tshirt-tucked-in-inside-the-short.-cut-off-the-image-from-his-hip-down-to-his-feet-make-h.png?v=1774469523&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_change-the-stance-of-the-model-to-the-right-side.-make-one-foot-forward-one-hand-on-his-pocket.-background-is-solid-efefef-and-apply-soft-shadow._0001.png?v=1774469744&width=1024',
                    'https://vintares.com/cdn/shop/files/freepik_apply-the-color-of-the-short-in-img2-to-the-short-in-img1_0001.webp?v=1774469744&width=1024'
                ] }
            ],
            sizes: ['3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL']
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
                                + '<li>'
                                +   '<button type="button"'
                                +     ' class="variant__option' + (i === 0 ? ' is-active' : '') + '"'
                                +     ' data-variant-option'
                                +     ' data-color-index="' + i + '"'
                                +     ' data-color-image="' + colorImg + '">'
                                +     c.name
                                +   '</button>'
                                + '</li>';
                        }).join('');
                    }

                    // Hide colour selector if there's only a single colour
                    if (p.colorVariants.length < 2) {
                        colorBlock.style.display = 'none';
                    }

                    // When a colour is clicked, refresh the gallery to that
                    // colour's images. Products with c.images[] get a full
                    // main + thumbs replacement; legacy products with a
                    // single c.image fall back to the previous behaviour
                    // (main-only swap with active-thumb sync).
                    colorBlock.addEventListener('click', (e) => {
                        const opt = e.target.closest('[data-variant-option]');
                        if (!opt) return;
                        const idx = parseInt(opt.dataset.colorIndex, 10);
                        const c = p.colorVariants[idx];
                        if (!c) return;

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
