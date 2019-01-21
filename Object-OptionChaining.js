import test from 'ava';

const data = {
  user: {
    address: {
      street: 'Correct Ave.',
      mailBox: 4,
    },
    dogsOwned: [{ name: 'Sammy' }, { name: 'Roof' }],
  },
};

test('Optional Chaining returns real values', (t) => {
  // //////////////////////////////////////////////////////
  // Usual
  t.is(data.user.address.mailBox, 4);
  t.is(data.user.address.houseColor, undefined);

  t.is(data?.user?.address?.street, 'Correct Ave.');

  // //////////////////////////////////////////////////////
  // Throws TypeError without Optional Chaining
  t.throws(() => {
    t.is(data.user.phoneNumber.type, undefined);
  });

  const oldWayPhoneNumberType =
    data && data.user && data.user.phoneNumber && data.user.phoneNumber.type;
  t.is(oldWayPhoneNumberType, undefined);

  t.is(data?.user?.phoneNumber?.type, undefined);
  // //////////////////////////////////////////////////////
  // Array Access
  t.is(data?.user?.catsOwned?.[1]?.name, undefined);

  t.is(data?.user?.dogsOwned?.[1]?.name, 'Roof');
  // //////////////////////////////////////////////////////
});
