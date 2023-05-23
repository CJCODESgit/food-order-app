const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'White Rice and stew',
    description: 'whole grained rice and delicious stew made from carefully picked tomatoes',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Afang Soup',
    description: 'An AkwaIbom special delicacy',
    price: 30.55,
  },
  {
    id: 'm3',
    name: 'Jollof Rice',
    description: 'Just like the ones at owambe',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Chicken and chips',
    description: 'properly oiled and fried chicken and delicious chips',
    price: 18.99,
  },
  {
     id: 'm5',
    name: 'Egusi Soup and pounded yam',
    description: 'delicious egusi soup. one owambe mummy said i should add it too',
    price: 18.99,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map();

    return (
        <section>
            <ul>
               {mealsList} 
            </ul>
        </section>
    )
};

export default AvailableMeals;