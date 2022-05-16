let menuItems = document.querySelectorAll('#tab-menu .menu-item');

let tabIndicator=document.getElementsByClassName("tab-indicator")[0];
let tabBody=document.getElementsByClassName("tab-body")[0];


menuItems.forEach(elem=>{
    elem.addEventListener('click',function(){
        let currentActiveItem = document.querySelector('.active-menu-item');
        currentActiveItem.classList.remove('active-menu-item');
      
        this.classList.add('active-menu-item')
        tabBody.getElementsByClassName("active")[0].classList.remove("active")
        tabBody.getElementsByTagName("div")[i].classList.add("active")
    })
})

// let menuItem=document.getElementsByClassName(' menu-item active-menu-item')

// menuItem.forEach(elem=>{
//     elem.addEventListener('click',function(){
//         alert('bcjb')
//         let txtbaki=document.getElementById('baki-text')
//         txtbaki.style.display= 'unset'
//         let txtseki=document.getElementById('seki-text')
//         txtseki.style.display='hide'
//         let txtgence=document.getElementById('gence-text')
//         txtgence.style.display='hide'
//     })
// })