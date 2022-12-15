import { Container, DivMenu, MenuOptions } from './style'

export function Header() {
  return (
    <Container>
      <DivMenu>
        <div>
          <img
            src={
              'https://seeklogo.com/images/F/ferrari-logo-7935CF173C-seeklogo.com.png'
            }
            alt=""
            height={120}
          />
        </div>
        <MenuOptions>
          <ul>
            <li>
              <a>Grupos de carros</a>
            </li>
            <li>
              <a>Rede De Agências</a>
            </li>
            <li>
              <a>Ofertas</a>
            </li>
            <li>
              <a>Fidelidade</a>
            </li>
            <li>
              <a>Dúvidas</a>
            </li>
          </ul>
          <div></div>
        </MenuOptions>
      </DivMenu>
    </Container>
  )
}
