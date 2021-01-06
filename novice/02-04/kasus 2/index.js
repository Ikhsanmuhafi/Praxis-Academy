// class wrongUrl extends Error {
//     constructor(message){
//       super(message);
//       this.name = 'wrongUrl';   
//     }
// }

axios.get('https://jsonplaceholder.typicode.com/users')
    .catch(err => {
        if (err){
            console.log('wrong URL');
        }
    })
    .then(response => response.data)
    .then(response => {
        response.forEach(element =>{
            console.log('id:', element.id)
            console.log('name:',element.name)
            }
        )})
        .catch(err =>{
            console.log(err);
        })