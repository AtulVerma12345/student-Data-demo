import React from 'react';
import { Route, Link } from 'react-router-dom';
import Welcome from '../home/welcome';
import About from '../about/about';
import DetailViewPage from '../DetailsView/DetailsViewPage';
import ProductForm from '../FormMaterialUi/Form';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/DetailViewPage" component={DetailViewPage} />
      <Route exact path="/ProductForm" component={ProductForm} />
    </main>
  </div>
);

export default App;
