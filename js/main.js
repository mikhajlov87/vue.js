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

new Vue ({
    el: '#subline',
    data: {
        text: 'Higher education in Austria will help you<br>' +
        'to become one of the highest-paid specialists in Europe.<br>' +
        'Austria is a perfect country for living, working, studying and just enjoying your life.'
    }
});

new Vue ({
    el: '#buttons',
    data: {
        links: [
            {
                name: 'More information',
                href: 'services',
                title: 'More information'
            },

            {
                name: 'Select University',
                href: 'universities',
                title: 'Select University'
            }
        ]
    }
});

new Vue ({
    el: '#headline_2',
    data: {
        text: 'Three unique advantages to work with us:'
    }
});

new Vue ({
    el: '#headline-left',
    data: {
        headlineText: '100% Guaranteed Admission',
        headlineInner: 'We guarantee your admission at a state university in the shortest period of time.' +
                        'Besides that, we can also offer search of accommodation for free and your transfer' +
                        'to the student accommodation in Vienna.'
    }
});