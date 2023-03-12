import classNames from "classnames";
import React, { FC, useEffect } from "react";

import { loadAppFunc } from "./actions";
import { Loading } from "./Loading";
import "./styles.scss";

export interface AppProps {
  title: string;
  loading: boolean;
}
export interface AppActions {
  load: loadAppFunc;
}

const App: FC<AppProps & AppActions> = (props) => {
  useEffect(() => {
    props.load();
    console.log("RUN!");
  }, []);

  return (
    <div className={classNames({ app: true, no: false })}>
      {props.loading && <Loading />}
      Test - {props.title}
    </div>
  );
};

export default App;
