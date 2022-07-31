import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;

  position: fixed;
  top:0;
  right: 0;

  width: 100%;
  height: 100%;

  background: var(--color-tertiary);

  @media(min-width: 1024px){
    width: calc(100% / 3);
    box-shadow: -7px 0 5px -6px rga(0,0,0, 0.075);
  }

  @media(min-width: 1440px){
    width: calc(480px + ((100vw) - 1440px)/2) ;
  }

  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1); //transição do menu
  transform: translateX(100%); //o menu fica por padrão escondido (translateX(100%))

  &.open{ //quando o menu é aberto por interação do usuario
    transform: translateX(0);
  }

  @media(min-width: 1024px){
    &.scrollOpen{
      transform: translateX(0);
    }
    //se a tela é maior que 1024 e o componente é scrollOpen, o menu ficara aberto (translateX 0 significa que ele não ficará a mostra e 100% totalmente escondido)

    &.scrollOpen .action--close{
      display:none;
    }
    //quando for aberto pelo scroll não tem o botão de fechar
  }
`