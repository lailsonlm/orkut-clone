import React from 'react';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';
import MainGrid from '../components/MainGrid';

const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';


function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

// ================================================================================================================
// Menu
// ================================================================================================================
export function AlurakutMenu({ githubUser }) {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <AlurakutMenu.Logo src="gitkut_logo.svg" />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/login`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`}/> }
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={githubUser} />
    </AlurakutMenu.Wrapper>
  )
}
AlurakutMenu.Wrapper = styled.header`
  width: 100%;
  background-color: #2D333B;
  position: fixed;
  z-index: 100;

  .alurakutMenuProfileSidebar {
    background: #22272E;
    position: absolute;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0px;
    margin-top: 30px;
    transition: .3s;
    width:100%;
    height: 100vh;
    overflow: auto;
    pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 30px))'};
    @media(min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      min-height: 100%;
      margin: auto;
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: #2E7BB4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #2D333B;
    }
  }
  .container {
    background-color: #2D333B;
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 101;
    @media(min-width: 860px) {
      justify-content: flex-start;
    }
    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media(min-width: 860px) {
        display: none;
      }
    }
    nav {
      display: none;
      @media(min-width: 860px) {
        display: flex;
      }
      a {
        font-size: 12px;
        color: white;
        padding: 10px 16px;
        position: relative;
        text-decoration: none;
        &:after {
          content: " ";
          background-color: #5A5A5A;
          display: block;
          position: absolute;
          width: 1px;
          height: 15px;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
    input {
      color: #ADBAC7;
      background: #1F242B;
      padding: 10px 42px;
      border: 0;
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      border: 1px solid #373E47;
      border-radius: 1000px;
      font-size: 12px;
      ::placeholder {
        color: #5A5A5A;
        opacity: 1;
      }
    } 
  }
`;
AlurakutMenu.Logo = styled.img`
  padding: 7px 14px;
  height: 36px;
`;

function AlurakutMenuProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

// ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================
export function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
            Perfil
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
            Recados
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Fotos
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
            Depoimentos
          </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
            GitHub Trends
          </a>
        <a href="/login">
          <img src={`${BASE_URL}//icons/logout.svg`} />
            Sair
          </a>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}
AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;

// ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================
export function OrkutNostalgicIconSet(props) {
  return (
    <OrkutNostalgicIconSet.List>
      {[
        { name: 'Recados', slug: 'recados', icon: 'book' },
        { name: 'Fotos', slug: 'fotos', icon: 'camera' },
        { name: 'Videos', slug: 'videos', icon: 'video-camera' },
        { name: 'Fãs', slug: 'fas', icon: 'star' },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
      ].map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
            {name}
          </span>
          <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
            <img key={`orkut__icon_set__${slug}_img`} className="OrkutNostalgicIconSet__iconSample" src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}
      {[
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' },
      ].map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;
        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">
              {name}
            </span>
            <span className="OrkutNostalgicIconSet__iconComplex" className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= (total - 1);
                return <img key={`orkut__icon_set__${slug}_img_${index}`} src={`https://alurakut.vercel.app/icons/${icon}.svg`} style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} />
              })}
            </span>
          </li>
        );
      })}
    </OrkutNostalgicIconSet.List>
  )
}
OrkutNostalgicIconSet.List = styled.ul`
  margin-top: 32px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    font-size: 12px;
    color: #5A5A5A;
    display: grid;
    grid-template-areas:
      "title title"
      "number number"; 
    
    &:not(:last-child) {
      margin-right: 5px;
    }
    .OrkutNostalgicIconSet__title {
      display: block;
      font-style: italic; 
    }
    .OrkutNostalgicIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .OrkutNostalgicIconSet__iconSample {
        margin-right: 7px;
      }
    }
  }
`;

// ================================================================================================================
// Login Page
// ================================================================================================================

const AlurakutLoginScreen = css`
  :root {
    --backgroundPrimary: #22272E;
    --backgroundSecondary: #2D333B;
    --backgroundTertiary: #1F242B;
    --backgroundQuarternary: #2D333B;
    --colorPrimary: #4A88D5;
    --colorSecondary: #4A88D5;
    --colorTertiary: #ADBAC7;
    --colorQuarternary: #4A88D5;
    --textPrimaryColor: #ADBAC7;
    --textSecondaryColor: #FFFFFF;
    --textTertiaryColor: #5A5A5A;
    --textQuarternaryColor: #373E47;
    --commonRadius: 8px;
  }
  .loginScreen {
    padding: 16px;
    max-width: 1110px;
    display: grid;
    --gap: 12px;
    --gutter: 16px;
    grid-gap: var(--gap);
    grid-template-areas: 
      "logoArea"
      "formArea"
      "footerArea";
    @media(min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
              "logoArea formArea"
              "logoArea formArea"
              "footerArea footerArea";
    }
    
    .logoArea {
      grid-area: logoArea;
      background-color: var(--backgroundSecondary);
      border-radius: var(--commonRadius);
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;
      @media(min-width: 860px) {
        min-height: 368px;
      }
      p {
        font-size: 12px;
        line-height: 1.2;
        &:not(:last-child) {
          margin-bottom: 12px;
        }
        strong {
          color: var(--colorQuarternary);
        }
      }
      img {
        max-height: 60px;
        margin-bottom: 36px;
      } 
    }
    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 50px;
        padding-right: 50px;
        background-color: var(--backgroundSecondary);
        border-radius: var(--commonRadius);
        flex: 1;
        &:not(:last-child) {
          margin-bottom: var(--gap);
        }
        &:first-child {
          min-height: 224px;
          @media(min-width: 860px) {
            min-height: 282px;
          }
        }
        p {
          font-size: 14px;
        }
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
        strong {
          color: var(--colorQuarternary);
        }
        input {
          width: 100%;
          display: block;
          border: 1px solid var(--textQuarternaryColor);
          padding: 12px;
          background-color: var(--backgroundTertiary);
          border-radius: var(--commonRadius);
          margin-top: 24px;
          margin-bottom: 16px;
          color: var(--colorTertiary)
        }
        button {
          width: 100%;
          display: block;
          border: 0;
          padding: 12px;
          border-radius: var(--commonRadius);
          background-color: var(--colorPrimary);
          color: var(--textSecondaryColor);
        }
      }
    }
    .footerArea {
      grid-area: footerArea;
      background-color: var(--backgroundQuarternary);
      border-radius: var(--commonRadius);
      padding: 8px;
      p {
        font-size: 12px;
        text-align: center;
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
      }
    }
  }
`;

// ================================================================================================================
// Reset Styles
// ================================================================================================================
export const AlurakutStyles = css`
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  *::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  a,
  button {
    cursor: pointer;
    transition: .3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: .8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }
  input {
    transition: .3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
  ${AlurakutLoginScreen}
`;