import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import { Helmet } from 'react-helmet';

// import our main App component
import ServerApp from '../../src/ServerApp';

// import the manifest generated with the create-react-app build
import manifest from '../../build/asset-manifest.json';
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => {
  return Object.keys(assets)
    .filter((asset) => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map((k) => assets[k]);
};

export default (store) => (req, res, next) => {
  const filePath = path.resolve(__dirname, '../../build/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const modules = [];
    const context = {};

    frontloadServerRender(() =>
      ReactDOMServer.renderToString(
        <Loadable.Capture report={(m) => modules.push(m)}>
          <ReduxProvider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Frontload isServer={true}>
                <ServerApp />
              </Frontload>
            </StaticRouter>
          </ReduxProvider>
        </Loadable.Capture>
      )
    ).then((routeMarkup) => {
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });

        res.end();
      } else {
        const reduxState = JSON.stringify(store.getState());
        const extraChunks = extractAssets(manifest, modules).map((chunk) => {
          return `<script type="text/javascript" src="/${chunk}"></script>`;
        });

        const helmet = Helmet.renderStatic();

        return res.send(
          htmlData
            // write the React app
            .replace(
              '<div id="root"></div>',
              `<div id="root">${routeMarkup}</div>`
            )
            // write the string version of our state
            .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
            // append the extra js assets
            .replace('</body>', extraChunks.join('') + '</body>')
            // write the HTML header tags
            .replace(
              '<title></title>',
              helmet.title.toString() + helmet.meta.toString()
            )
        );
      }
    });
  });
};
