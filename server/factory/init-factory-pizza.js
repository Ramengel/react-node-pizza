const pizzaInitialState = [
  {
    id: 1,
    name: 'Пепперони',
    price: {
      euro: 8,
      dollar: 10
    },
    description: "Томатный соус Domino's, Пепперони, Сыр моцарелла",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni.png'
  },
  {
    id: 2,
    name: 'Барбекю',
    price: {
      euro: 13,
      dollar: 15
    },
    description: "Соус барбекю, Лук, Курица, Шампиньоны, Сыр моцарелла, Бекон",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/barbecue.png'
  },
  {
    id: 3,
    name: 'Маргарита',
    price: {
      euro: 10,
      dollar: 12
    },
    description: "Томатный соус Domino's, Сыр моцарелла",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/margarita.png'
  },
  {
    id: 4,
    name: 'Карбонара',
    price: {
      euro: 10,
      dollar: 12
    },
    description: "Шампиньоны, Крем фреш, Лук, Сыр моцарелла, Ветчина, Бекон",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png'
  },
  {
    id: 5,
    name: 'Спайси',
    price: {
      euro: 10,
      dollar: 12
    },
    description: "Пепперони, Халапеньо, Сыр моцарелла, Томатный соус Domino's, Томаты, Бекон",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/spice.png'
  },
  {
    id: 6,
    name: '5 Сыров',
    price: {
      euro: 13,
      dollar: 15
    },
    description: "Фета, Пармезан, Голубой сыр, Крем фреш, Сыр моцарелла, Чеддер",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png'
  },
  {
    id: 7,
    name: 'Говядина BURGER',
    price: {
      euro: 13,
      dollar: 15
    },
    description: "Шампиньоны, Телятина, Сыр моцарелла, Соус Бургер, Лук, Огурцы",
    image: 'https://images.dominos.by/media/dominos/osg/api/2020/03/11/govyadina_burger_small.png'
  },
  {
    id: 8,
    name: 'Овощная',
    price: {
      euro: 10,
      dollar: 12
    },
    description: "Сладкий перец, Сыр моцарелла, Лук, Оливки, Томаты, Шампиньоны, Томатный соус Domino's",
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png'
  },
  {
    id: 9,
    name: 'Гавайская',
    price: {
      euro: 8,
      dollar: 10
    },
    description: "Сыр моцарелла, Курица, Томатный соус Domino's, Ананас, Ветчина",
    image: 'https://images.dominos.by/media/dominos/osg/api/2020/07/01/gavayskaya_new_small.png'
  },
];

module.exports = async (Pizza) => {
  pizzaInitialState.forEach(async (pizza) => {
    await Pizza.create({
      name: pizza.name,
      dollar: pizza.price.dollar,
      euro: pizza.price.euro,
      description: pizza.description,
      image: pizza.image
    }).then((res) => res).catch((err) => console.log(err));
  });
};
