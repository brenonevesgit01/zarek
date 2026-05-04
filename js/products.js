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
            id: 'cargo-shorts-relaxed-fit',
            name: 'Zarek | Cargo Shorts Relaxed Fit',
            category: 'pants',
            price: 44.95,
            originalPrice: 59.95,
            badge: 'SALE',
            colorVariants: [
                { name: 'Slate Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-sqaure__41054.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side__41056.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__1313.webp'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-sqaure__41057.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side__41059.webp',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-short-in-img1-into-color-b__41053.webp'
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
                    'https://vintares.com/cdn/shop/files/freepik__create-a-caucasian-man-wearing-the-short-in-img1-c__59377.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__59380.webp',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__59372.webp'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-a-caucasian-man-wearing-the-short-in-img1-c__59376.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__59383.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__44651.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-a-caucasian-man-wearing-the-short-in-img1-c__44653.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__59381.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__44652.webp'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-a-caucasian-man-wearing-the-short-in-img1-c__44654.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__59382_39864c0c-3db8-4adc-9d19-aedfb3689e66.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__59373.webp'
                ] },
                { name: 'Warm Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-a-caucasian-man-wearing-the-short-in-img1-c__44655.webp',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stanc-eof-the-model-to-the-back__59379.webp',
                    'https://vintares.com/cdn/shop/files/freepik__apply-the-color-of-the-short-in-img2-to-the-color-__59374_f9973fd4-25b6-4770-b8c4-2150f5c82b62.webp'
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
                    'https://vintares.com/cdn/shop/files/freepik__focus-remove-the-background-and-change-it-to-efefe__80168.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__80171.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80161.webp'
                ] },
                { name: 'Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__focus-remove-the-background-and-change-it-to-efefe__80167.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-back-make-hi__80169.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80160.webp'
                ] },
                { name: '2-Piece (Black)', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80164.webp',
                    'https://vintares.com/cdn/shop/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__80172.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__create-a-nice-zoom-in-shot-on-a-plain-background-f__80173.jpg'
                ] },
                { name: '2-Piece (Black & Gray)', images: [
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__80163.webp'
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
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__62159.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-pants-into-color-black-dra__62157.webp',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-note-th__80153.jpg'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__80154.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-note-th__80155.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62156.webp'
                ] },
                { name: 'Dark Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__80156.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-stance-of-the-model-to-the-side-note-th__80157.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-panst-into-color-dark-blue__62158.webp'
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
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62142.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62132.webp'
                ] },
                { name: 'Black / Blue Waistband', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62144.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62133.webp'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62145.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62134.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62147.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62135.webp'
                ] },
                { name: 'Light Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62148.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62136.webp'
                ] },
                { name: 'Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62149.webp',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62137.webp'
                ] },
                { name: 'Gray / Blue Waistband', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62150.webp',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62138.webp'
                ] },
                { name: 'Red', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62151.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62139.webp'
                ] },
                { name: 'Dark Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62152.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62140.webp'
                ] },
                { name: 'Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__create-an-image-of-a-caucasian-man-wear-this-pants__62153.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__use-img1-as-the-reference-product-generate-a-clean__62141.webp'
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
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36370.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__90186.webp'
                ] },
                { name: 'White', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36369.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-size-of-the-image-into-square__44644.webp'
                ] },
                { name: 'Khaki', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36371.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36359.webp'
                ] },
                { name: 'Light Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36372.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36360.webp'
                ] },
                { name: 'Brown', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36373.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36361.webp'
                ] },
                { name: 'Sage Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36374.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36362.webp'
                ] },
                { name: 'Olive Green', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36383.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36363.webp'
                ] },
                { name: 'Charcoal Gray', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36375.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36364.webp'
                ] },
                { name: 'Sky Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36376.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36365.webp'
                ] },
                { name: 'Mustard', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36377.png',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36366.webp'
                ] },
                { name: 'Steel Blue', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36378.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36367.webp'
                ] },
                { name: 'Black', images: [
                    'https://vintares.com/cdn/shop/files/freepik__remove-the-background-and-change-it-to-efefef-add-__36381.jpg',
                    'https://vintares.com/cdn/shop/files/freepik__change-the-color-of-the-linen-pants-in-img1-into-c__36368.webp'
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
            price: 29.95,
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
