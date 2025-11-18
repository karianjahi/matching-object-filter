# Matching Object Filter

This project implements a utility function that filters an array of objects and returns only those objects that contain all key–value pairs from a provided source object. It is a common JavaScript exercise used to practice object handling, array filtering, and logical comparison.

## 📌 Overview
The core function:
```js
 whatIsInAName(collection, source)
```
returns a new array containing only the objects from collection that match every key–value pair in source.

If no matching objects are found, the function returns an empty array, `[]`.

## 🚀 Features

- 🔍 Strict key–value matching

- 🧩 Supports any number of keys in the source object

- 👜 Allows objects to contain extra properties

- ❌ Returns an empty array when no match is found

- 🎯 Works with mixed value types, including null

## Example 
### Match multiple key–value pairs:

```js
whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
```
### Output
```js
[
  { apple: 1, bat: 2 },
  { apple: 1, bat: 2, cookie: 2 }
]
```

## 🛠 How It Works
1. Convert the source object into a list of combined "key + value" strings

Example:
```js
{ a: 1, b: 2 }  →  ["a1", "b2"]
```
2. Convert each object in the collection into a similar list of key–value strings.

3. Check whether every source pair exists in the current object.

4. Push matching objects into a new result array.


## 🧭 Use Cases
- Filtering search results

- Implementing simple query logic

- Practicing object iteration and comparison

- Coding interviews or algorithm challenges

## 📄 License
This project is released under the MIT License.
You are free to use, modify, and distribute it.





