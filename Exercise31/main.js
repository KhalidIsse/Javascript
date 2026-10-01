async function fetchuserdata(){
    try {
        console.log("fetching user data....")
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok){
            console.log('user data is found!')
            throw new Error(`Error: ${response.status}`)
        }
        console.log("Before json response.")
        console.log(response)
        const data = await response.json();
        console.log("After json")
        console.log("Response data:", data);
    } catch (error) {
        console.error("Error: ", error)
    }
}

fetchuserdata()