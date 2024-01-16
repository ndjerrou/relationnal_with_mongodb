# Relationnal Data with MongoDB

## Using references (Normalization) - CONSISTENCY

```js
const course = {
  name: 'PHP',
  author: 'id1',
};
```

```js
const author = {
  _id: 'id1',
  name: 'Oscar',
};
```

We can have multiple collections

## Using Embedded Documents (Denormalization) - PERFORMANCE

```js
const course = {
  name: 'PHP',
  author: {
    name: 'Author1',
    age: 55,
  },
};
```

## Using Hybrid approach

```js
const course = {
  // 50 properties...,
  author: {
    name: 'Author1',
    age: 55,
  },
  editor: 'id1',
};
```
