import test from 'ava';

const food = { carrots: 4, onions: 3, butter: 2 };

test('Object.values', async (t) => {
  // ES 2017+
  const values = Object.values(food);
  t.deepEqual(values, [4, 3, 2]);

  const entries = Object.entries(food);
  t.deepEqual(entries, [['carrots', 4], ['onions', 3], ['butter', 2]]);
});

test('String Padding', async (t) => {
  // const foodsDisplayed = Object.entries(food).map(([foodItem, foodAmt]) => {
  //   return `${foodItem.padEnd(20, '-')}${foodAmt}`;
  // });  // Does not pass ESLint-airbnb

  const foodsDisplayed = Object.entries(food).map((entry) => {
    const [foodItem, foodAmt] = entry;
    return `${foodItem.padEnd(20, '-')}${foodAmt}`;
  });

  // const foodsDisplayed = [1, 2, 3].map((num) => ({ num }));
  // const foodsDisplayed = [1, 2, 3].map((num) => num);
  // const foodsDisplayed = [1, 2, 3].map(num => num);  // OK for ESLint-airbnb

  t.is(foodsDisplayed[0], 'carrots-------------4');
  t.is(foodsDisplayed[1], 'onions--------------3');
  t.is(foodsDisplayed[2], 'butter--------------2');
});
