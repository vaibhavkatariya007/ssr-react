import express from 'express';
import 'isomorphic-fetch';

import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configureStore';
import { setNewsData } from '../../src/store/appReducer';

const router = express.Router();
const path = require('path');

const actionIndex = (req, res, next) => {
  let URL = req.headers.referer || req.params.id;
  const ID = URL && URL.substring(URL.lastIndexOf('/')).replace('/', '');
  const pageId = parseInt(ID);
  const store = configureStore();
  //tags=front_page
  fetch(
    `https://hn.algolia.com/api/v1/search${
      pageId && pageId !== NaN ? '?page=' + pageId : '/'
    }`
  )
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

router.get('/:id', actionIndex);

// any other route should be handled by react-router, so serve the index page
router.use('*', actionIndex);

export default router;
