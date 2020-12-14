const app = new Vue({
    el: '#app',
    data: {
        product: {
            productName: 'Онлайн-касса VIKI MINI',
            productPrice: 16900,
            productImages: [
                {
                    link: 'img/equip_pos.jpg',
                    textAlt: 'Товар 1',
                    active: true,
                    id: 1
                },
                {
                    link: 'img/equip_pos13.jpg',
                    textAlt: 'Товар 2',
                    active: false,
                    id: 2
                },
                {
                    link: 'img/equip_pos36.jpg',
                    textAlt: 'Товар 3',
                    active: false,
                    id: 3
                }
            ]
        }
    }
});