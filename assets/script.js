
const { createApp, ref } = Vue


createApp({
    setup() {
        const cart = ref(0);
        const addToCart = () => { cart.value += 1 };
      
        const changeImage = (product, variantImage) => {
            product.image = variantImage;
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

        return { cart, addToCart, products, changeImage };
    }
}).mount('#app');