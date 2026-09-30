function getPersonData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const success = false;
            if (success){
                resolve({id: 123, name: 'Ahmed', Age: 24})
            }else{
                reject('Failed to fetch user Data')
            }
        }, 2000);
    })
}

getPersonData()
    .then(data =>{ console.log('user data: ', data)})
    .catch(err => {console.log('Error: ', err )})