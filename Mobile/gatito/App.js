import React from "react";
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Routes from "./src/routes";
import StandartScreen from "./src/components/StandartScreen";

export default function App() {
  return (
    <StandartScreen>
      <Routes />
    </StandartScreen>
  );
}
