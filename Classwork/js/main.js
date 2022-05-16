let menuItems = document.querySelectorAll('#tab-menu .menu-item');

let tabIndicator=document.getElementsByClassName("tab-indicator")[0];
let tabBody=document.getElementsByClassName("tab-body")[0];


menuItems.forEach((elem, i)=>{
    elem.addEventListener('click',function(){
        let currentActiveItem = document.querySelector('.active-menu-item');
        currentActiveItem.classList.remove('active-menu-item');
      
        this.classList.add('active-menu-item')
        tabBody.getElementsByClassName("active")[0].classList.remove("active")
        tabBody.getElementsByTagName("div")[i].classList.add("active")
    })
})

