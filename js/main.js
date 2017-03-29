/*
* @author S.Mikhajlov
* */

new Vue ({
    el: "#menu",
    data: {
        links: [
            {
                name: 'About',
                href: '/about',
                title: 'About'
            },

            {
                name: 'Education',
                href: '/education',
                title: 'Education'
            },

            {
                name: 'Universities',
                href: '/universities',
                title: 'Университеты'
            },

            {
                name: 'Services',
                href: '/services',
                title: 'Услуги'
            },

            {
                name: 'Blog',
                href: '/news',
                title: 'Новости'
            },

            {
                name: 'Contact',
                href: '/contacts',
                title: 'Контакты'
            }
        ]
    }
});

new Vue ({
    el: '#headline',
    data: {
        text: 'Start a successful future<br>in Austria today!'
    }
});