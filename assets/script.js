const { createApp, ref, onMounted } = Vue

createApp({
    setup() {
        const cart = ref([]);
        const showCart = ref(false); 

        const addToCart = (product) => {
            cart.value.push(product);
        };

        const AlterarCart = () => {
            showCart.value = !showCart.value;
        };

        const changeImage = (product, variantImage) => {
            product.image = variantImage;
        };
        
        const VerMobileMenu = ref(false);

        const AlterarMenu = () => {
            VerMobileMenu.value = !VerMobileMenu.value;
        };

        const products = ref([
            {
                id: 1,
                title: 'Boneca',
                brand: 'Clawdeen',
                image: 'assets/images/rosto-clawdeen.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'pink', image: 'assets/images/rosto-clawdeen.jpg' },
                    { id: 2, color: 'purple', image: 'assets/images/clawdeen.jpeg' }
                ]
            },
            {
                id: 2,
                title: 'Boneca',
                brand: 'Cleo',
                image: 'assets/images/rosto-cleo.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'yellow', image: 'assets/images/rosto-cleo.jpg' },
                    { id: 2, color: 'cyan', image: 'assets/images/doll-cleo.jpg' }
                ]
            },
            {
                id: 3,
                title: 'Boneca',
                brand: 'Draculaura',
                image: 'assets/images/rosto-draculaura.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'pink', image: 'assets/images/rosto-draculaura.jpg' },
                    { id: 2, color: 'black', image: 'assets/images/doll-draculaura.jpg' }
                ]
            },
            {
                id: 4,
                title: 'Boneca',
                brand: 'Abbey',
                image: 'assets/images/rosto-abbey.png',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'white', image: 'assets/images/rosto-abbey.png' },
                    { id: 2, color: '#3299CC', image: 'assets/images/abbey.jpg' }
                ]
            },
            {
                id: 5,
                title: 'Boneca',
                brand: 'lagoona',
                image: 'assets/images/rosto-lagoona.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: '#871F78', image: 'assets/images/rosto-lagoona.jpg' },
                    { id: 2, color: '#ADEAEA', image: 'assets/images/lagoona.jpg' }
                ]
            },
            {
                id: 6,
                title: 'Boneca',
                brand: 'Operetta',
                image: 'assets/images/rosto-operetta.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'purple', image: 'assets/images/rosto-operetta.jpg' },
                    { id: 2, color: '#A62A2A', image: 'assets/images/operetta.png' }
                ]
            },
            {
                id: 7,
                title: 'Boneca',
                brand: 'Ghoulia',
                image: 'assets/images/rosto-ghoulia.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'blue', image: 'assets/images/rosto-ghoulia.jpg' },
                    { id: 2, color: 'red', image: 'assets/images/doll-ghoulia.jpg' }
                ]
            },
            {
                id: 8,
                title: 'Boneca',
                brand: 'Spectra',
                image: 'assets/images/rosto-spectra.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: '#673dff', image: 'assets/images/rosto-spectra.jpg' },
                    { id: 2, color: 'white', image: 'assets/images/doll-spectra.jpg' }
                ]
            },
            {
                id: 9,
                title: 'Boneca',
                brand: 'Frankie',
                image: 'assets/images/rosto-frankie.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'black', image: 'assets/images/rosto-frankie.jpg' },
                    { id: 2, color: '', image: 'assets/images/doll-frankie.jpg' }
                ]
            },
            {
                id: 10,
                title: 'Boneca',
                brand: 'Toralei',
                image: 'assets/images/toralei.jpg',
                inStock: 20,
                details: ['Original', 'Roupas e acessórios inclusos'],
                variants: [
                    { id: 1, color: 'orange', image: 'assets/images/toralei.jpg' },
                    { id: 2, color: 'black', image: 'assets/images/toralei2.jpg' }
                ]
            }
        ]);

        const slides = ref([
            { id: 1, image: 'assets/images/banner-monster.webp', alt: 'Banner 1' },
            { id: 2, image: 'assets/images/banner_Monster.jpg', alt: 'Banner 2' },
            { id: 3, image: 'assets/images/banner.jpg', alt: 'Banner 3' }
        ]);
        onMounted(() => {
            new Swiper('.swiper', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });

        return { cart, addToCart, products, changeImage, showCart, AlterarCart, slides, VerMobileMenu, AlterarMenu };
    }
}).mount('#app');

