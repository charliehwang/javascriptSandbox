import test from 'ava';

// 1. Checking for undefined or null values
// 2. Defaulting Values
// 3. Ensuring the literal values 0, false, and ''are not defaulted.

function oldCoalesce(value) {
  return value != null ? value : 'default';
}

function wrongCoalesce(value) {
  return value || 'default';
}

function newCoalesce(value) {
  return value ?? 'default';
}

test('Nullish Coalescing', async (t) => {
  t.is(oldCoalesce(undefined), 'default');
  t.is(oldCoalesce(null), 'default');
  t.is(oldCoalesce(0), 0);
  t.is(oldCoalesce(''), '');
  t.is(oldCoalesce(false), false);
  t.is(oldCoalesce('setValue'), 'setValue');

  t.is(wrongCoalesce(undefined), 'default');
  t.is(wrongCoalesce(null), 'default');
  t.is(wrongCoalesce(0), 'default'); // Should be 0
  t.is(wrongCoalesce(''), 'default'); // Should be ''
  t.is(wrongCoalesce(false), 'default'); // should be false
  t.is(wrongCoalesce('setValue'), 'setValue');

  // Nullish Coalescing Operator
  t.is(newCoalesce(undefined), 'default');
  t.is(newCoalesce(null), 'default');
  t.is(newCoalesce(0), 0);
  t.is(newCoalesce(''), '');
  t.is(newCoalesce(false), false);
  t.is(newCoalesce('setValue'), 'setValue');
});
