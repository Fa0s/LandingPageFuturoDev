const botaoMenu = document.querySelector('.cabecalho_menu-botao')
const menu = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle( 'menu_lateral-ativo')
})

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')

btn1.addEventListener('click', () => {
    menu.classList.remove('menu_lateral-ativo')
    });

btn2.addEventListener('click', () => {
    menu.classList.remove('menu_lateral-ativo')
    });

btn3.addEventListener('click', () => {
    menu.classList.remove('menu_lateral-ativo')
    });

btn4.addEventListener('click', () => {
    menu.classList.remove('menu_lateral-ativo')
    });