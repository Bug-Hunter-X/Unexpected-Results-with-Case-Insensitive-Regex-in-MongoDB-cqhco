```javascript
const myQuery = { name: /John/i }; // Case-insensitive search

// Find documents that match the query
db.collection('users').find(myQuery).toArray((err, result) => {
if (err) throw err;
console.log(result);
});
```