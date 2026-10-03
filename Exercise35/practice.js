function changeImage() {

    const image = document.querySelector('#image');

    // const url = prompt("Please enter your image url")

    image.setAttribute('src', 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

    // element.style.
    image.style.border = '2px solid red';
    image.style.padding = "10px";
    // background-color

    image.style.backgroundColor = '#cfc2dc';

}


function changeContentStyle() {

    const header = document.querySelector("#header");
    const text = document.querySelector(".text");

    // font-size
    header.style.color = "skyblue";
    text.style.padding = "20px";
    text.style.border = "1px solid black";
    text.style.fontSize = "30px";
}




function setLightMode() {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}

function setDarkMode() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

}