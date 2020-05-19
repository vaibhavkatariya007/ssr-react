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
router.use('^/$', actionIndex);
router.use(express.static(path.resolve(__dirname, '../../build')));
router.get('/:id', actionIndex);
router.use('*', (req, res, next) =>
  res.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Not Found</title>
  </head>
  <body>
    <h1>Page Not Found</h1>
  </body>
</html>
`)
);

export default router;
