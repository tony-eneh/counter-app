import React, { Component } from "react";
import "./App.css";
import { store } from "./store";
import { setActiveSessionAction, changeTimeAction } from "./actions";

class App extends Component {
  render() {
    const { days, hours, minutes, seconds, activeSession } = store.getState();
    const setActiveSession = (e) => {
      store.dispatch(setActiveSessionAction(e.target.value));
    };

    const changeTime = (e) => {
      store.dispatch(changeTimeAction(e.target.dataset.type));
    };

    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">BOOK NAME</h4>
          <h1 className="App__header">Understanding Redux - 1</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={setActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button
              className="App__text--white"
              data-type="INCREASE_COUNTER"
              onClick={changeTime}
            >
              INCREASE
            </button>
            <button
              className="App__text--white"
              data-type="DECREASE_COUNTER"
              onClick={changeTime}
            >
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
