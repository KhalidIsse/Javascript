async function fetchData() {
    console.log("Start fetching data...");

    // Simulating fetching JSON data from jason placeholder
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json(); 

    console.log("Fetched Data:", data);
    console.log("Data fetching complete. This message runs after data is fetched.");
}

fetchData();
console.log("This message runs immediately and is not blocked.");

