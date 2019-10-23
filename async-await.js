import fetch from "node-fetch";

function getData() {

    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => json);
}


async function x() {

    const response = await getData();
    console.log(response); /*?+*/

}


x();


