import React from 'react';
import { Route, Link } from 'react-router-dom';
import Welcome from '../home/welcome';
import DetailViewPage from '../DetailsView/DetailsViewPage';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/DetailViewPage" component={DetailViewPage} />
    </main>
  </div>
);

export default App;
