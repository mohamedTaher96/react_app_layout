import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVal } from './store/action';
import axios from "axios";
import reduxSetup from "./requests/reduxSetup";
import Navbar from './components/Navbar/index';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from './lang';
import 'antd/dist/antd.css';

function App({ store, _setVal }) {
  i18n.use(initReactI18next)
    .init({
      resources: Lang,
      lng: store?.lang,
      fallbackLng: store?.lang,
      interpolation: {
        escapeValue: false
      }
    })
  reduxSetup(axios, store?._token, store?.lang, _setVal)

  return (
    <div className="App">
      <Router>
        {store?.user && <Navbar lang={store?.lang} user={store?.user} _setVal={_setVal} />}
        <div className="page_content">
          <Routes store={store} _setVal={_setVal} />
        </div>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    store: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _setVal: (type, value) => { dispatch(setVal(type, value)); },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
