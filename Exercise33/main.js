const title = document.querySelector('#title')
console.log(title)
const paragraphs  = document.querySelectorAll(".paragraph");

function changeContent(){
    title.textContent = "DOM content Manipulation";
}

function changeParagraphs() {
    paragraphs.forEach(p => {
        p.innerHTML = "This content has been <strong>updated</strong>.";
    });
}