const menuPrincipal = document.querySelectorAll('#navPrincipal li');
const telas = document.querySelectorAll('main section'); 

menuPrincipal.forEach(menuSelecionado => {
   menuSelecionado.addEventListener('click', () => {
     // 1. Remove a classe de todos
     menuPrincipal.forEach(m => m.classList.remove('menuSelecionado'));
     // 2. Adiciona no clicado
     menuSelecionado.classList.add('menuSelecionado');

     // 3. Esconde todas as sections
     telas.forEach(tela => tela.style.display = 'none');

     // 4. Busca a tela pelo ID dinâmico
     const idTelaAlvo = menuSelecionado.id.replace('menu', 'tela');
     const telaAlvo = document.getElementById(idTelaAlvo);

     if(telaAlvo){
        telaAlvo.style.display = 'block';
     }
   });
});