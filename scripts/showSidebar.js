function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// JavaScript para manejar la apertura del menú
document.getElementById('toggleMenu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('.sidebar');
});
