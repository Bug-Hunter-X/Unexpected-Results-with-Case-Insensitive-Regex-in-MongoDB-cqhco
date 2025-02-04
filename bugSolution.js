```javascript
const myQuery = { name: { $regex: 'John', $options: 'i' } }; // Explicit case-insensitive using $options

db.collection('users').find(myQuery).toArray((err, result) => {
if (err) throw err;
console.log(result);
});
```