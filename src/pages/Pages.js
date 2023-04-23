import {Route, Routes, Navigate} from 'react-router-dom';

import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import NewsListPage, {routeMain as routeNewsList} from 'pages/NewsListPage';
import NewsDetail, {routeMain as routeNewsDetail} from 'pages/NewsDetail';
import Contacts, {routeMain as routeContacts} from 'pages/Contacts';

const Pages = () => {
    return (
        <Routes>
            <Route path={routeMainPage()} element={<MainPage />} />
            <Route path={routeNewsList()} element={<NewsListPage />} />
            <Route path={routeNewsDetail()} element={<NewsDetail />} />
            <Route path={routeContacts()} element={<Contacts />} />
            <Route path='*'
                element={<Navigate to='/main' replace/>}
            />
        </Routes>
    )
}

export default Pages