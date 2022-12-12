import './styles.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Pages from '../../pages/Pages';

const AppContent = () => {
  return (
    <div className="mainWrapper">
        <Header/>
        <main>
            <Pages />
        </main>
        <Footer />
    </div>
  );
}

export default AppContent;
