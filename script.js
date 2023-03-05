function init(){
    loadimages()
}

function loadimages(){
    for(let i = 1; i <= 20; i++){
        let picture = `all-photos/all-${i}.jpg`;
        document.getElementById('gallery').innerHTML += /*html*/ `
            <img src="${picture}" alt="">
        `;   
    }
}