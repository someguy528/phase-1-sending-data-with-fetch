// Add your code here

function submitData(username, userEmail){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: userEmail,
        })
    }).then(resp=>resp.json()).then(data=>{
        return document.body.innerHTML = data.id
    }).catch(error => document.body.innerHTML = error)
}


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     // method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// };
// fetch("http://localhost:3000/dogs", configurationObject)
// .then(response=> response.json())
// .then(object => console.log(object))
// .catch(error=>{
//     alert("This is an error message");
//     console.log(error.message)
// });

