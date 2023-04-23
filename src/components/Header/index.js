import './styles.scss';

import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeNewsList} from 'pages/NewsListPage';
import {routeMain as routeContacts} from 'pages/Contacts';


const Header = () => {
  return (
    <header className="mainHeader">
      <div className='title'>Новостник</div>
      <nav>
        <NavLink to={routeMainPage()}>
          Главная
        </NavLink>
        <NavLink to={routeNewsList()}>
          Новости
        </NavLink>
        <NavLink to={routeContacts()}>
          Контакты
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
