import coffeLogo from '../../assets/coffeeLogo.svg';
import { HeaderContainer, MenuRight, Location } from './styles';
import { ShoppingCart, MapPin } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={coffeLogo} alt="" />
      </div>

      <MenuRight>
        <Location>
          Localização
        </Location>

        <ShoppingCart size={24} />
      </MenuRight>
    </HeaderContainer>
  )
}