import express from 'express';
import 'isomorphic-fetch';

import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configureStore';
import { setNewsData } from '../../src/store/appReducer';

const router = express.Router();
const path = require('path');

const actionIndex = (req, res, next) => {
  const store = configureStore();

  fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
    .then((res) => res.json())
    .then((result) => {
      return store.dispatch(setNewsData(result));
    })
    .then(() => {
      serverRenderer(store)(req, res, next);
    })
    .catch((err) => console.log(err));
};

// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, '..', '..', 'build'), {
    maxAge: '30d',
  })
);

// any other route should be handled by react-router, so serve the index page
router.use('*', actionIndex);

export default router;
