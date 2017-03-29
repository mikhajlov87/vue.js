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

new Vue ({
    el: '#headline-center',
    data: {
        headlineText: 'Fast Admission',
        headlineInner: 'You don’t have to take care of the admission process. Our consultants will be in the' +
                        'negotiation process with the universities while your admission process will be in progress.' +
                        'They will also inform you in case of any decision made by the university administration.'
    }
});

new Vue ({
    el: '#headline-right',
    data: {
        headlineText: 'Fast Student Visa',
        headlineInner: 'We will speedup the student visa process because we know how time is important for our clients.' +
                        'Our employees always keep in touch with the Magistrate 35 and receive the latest' +
                        'information for our clients.'
    }
});

new Vue ({
    el: '#profits-button',
    data: {
        link: {
            name: 'More about our offer',
            href: 'services',
            title: 'Подробнее о наших услугах'
        }
    }
});

new Vue ({
    el: '#how-help',
    data: {
        header: 'How Can Education in Austria Make You Successful in the Future?',

        innerTextFirst: 'Studying in Europe, especially in Austria, is one of the best ways to get a good career' +
                    'and be successful in the future. Reputable universities in Austria are known for developing' +
                    'young and successful professionals in the field of engineering, business, medicine, arts and' +
                    'natural science. By choosing Austria as your study destination, you get a high-quality' +
                    'education that hones your skills and brings out your true potential.',

        innerTextSecond: 'Austria is known for having the best universities in Europe where you can be passionate about' +
                        'learning new things and polishing your skills to prepare you for the future. You will' +
                        'definitely stand out from other job candidates because you have the skills that can only be' +
                        'gained through international experience. Education in Austria can also broaden your worldview' +
                        'because you are exposed to a new culture which can diversify your knowledge and values.' +
                        'Studying in Austria also exposes you to different leadership and business styles that will help' +
                        'you manage and work with people from all over the world.',
        link: {
            name: 'Choose University',
            href: 'universities',
            title: 'Выбрать эффективный ВУЗ'
        }
    }
});