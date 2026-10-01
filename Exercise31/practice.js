async function fetchData() {
    try {
        console.log("Start fetching data...");

        const response = await fetch('https://jsonplaceholder.typicode.com/postssss');
        // console.log("before json: ", response)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();



async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('before json response: ', response)

        const data = await response.json();
        console.log("Posted data fter json:", data);
    } catch (error) {
        console.error("Error posting data:", error);
    }
}

postData();









// async function fetchData() {
//     console.log("Start fetching data...");

//     // Simulating fetching JSON data from jason placeholder
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response.ok){
//         throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     const data = await response.json(); 

//     console.log("Fetched Data:", data);
//     console.log("Data fetching complete. This message runs after data is fetched.");
// }

// fetchData();
// console.log("This message runs immediately and is not blocked.");

