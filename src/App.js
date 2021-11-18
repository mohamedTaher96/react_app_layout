import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVal } from './store/action';
import axios from "axios";
import reduxSetup from "./requests/reduxSetup";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from './lang';
import 'antd/dist/antd.css';
import "./App.css";
import DashboardRoutes from './routes/dashboard';
import UserdRoutes from './routes/user';

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
        <div className="page_content">
          <Route path="/dashboard"
            render={(props) => (
              <DashboardRoutes store={store} _setVal={_setVal} layout={"/dashboard"} />
            )}
          />
          <Route path="/"
            render={(props) => (
              <UserdRoutes store={store} _setVal={_setVal} layout={"/"} />
            )}
          />
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
