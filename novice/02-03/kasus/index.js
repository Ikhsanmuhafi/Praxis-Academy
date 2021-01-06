const axios = require('axios');

//promise
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => console.log(res.data))

// let payload = {
//     name: 'apa',
//     age: 23
// }
// axios.post('url', payload);

// axios.delete(`url/${id}/lain-lain`);

// let payloadForEdit = {
//     name: 'apa',
//     age: 23
// }
// axios.put('url' + id, payloadForEdit)

//async/await
async function getData() {
    // let resultData;
    const req = await axios.get('https://jsonplaceholder.typicode.com/users')
    // resultData = req.data;
    console.log(req.data);
}

getData();

