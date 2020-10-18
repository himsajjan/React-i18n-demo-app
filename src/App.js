import React, { useContext } from "react";
import "./App.css";
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";
import { Context } from "./components/Wrapper";

function App() {
  const context = useContext(Context);
  const updates = [1, 2, 3, 4];

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <FormattedMessage id="app.header" />
        </h2>
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
        <p>
          <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZoneName="long"
          />
        </p>
      </header>
      <div className="updates">
        <h1 className="update_header">
          <FormattedMessage id={`app.updates.header`} />{" "}
        </h1>
        {updates.map((update) => (
          <div className="update">
            <div class="update_date">
              <FormattedDate id={`app.update_${update}.date`} />
            </div>
            <div class="update_details">
              <div className="title">
                <FormattedMessage id={`app.update_${update}.title`} />
              </div>
              <div className="detail">
                <FormattedMessage id={`app.update_${update}.detail`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
