let activeBtn = document.getElementById('ActiveBtn')
activeBtn.onclick=function(){
    let sidebar = document.getElementById('sidebar')
    console.log(sidebar.style.marginLeft);
    if (sidebar.style.marginLeft !== '-16rem') {
        sidebar.style.marginLeft = '-16rem'
    } else {
        sidebar.style.marginLeft = '0px'
    }
}