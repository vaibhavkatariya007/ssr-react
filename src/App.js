import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Table, Spin, Button } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Page } from './core';

import { setNewsData } from './store/appReducer';

const AsyncGraph = Loadable({
  loader: () => import(/* webpackChunkName: "graph" */ './core/Graph/index'),
  loading: () => <Spin tip="Loading..." />,
  modules: ['graph'],
});
const NewsItem = Loadable({
  loader: () => import(/* webpackChunkName: "newsitem" */ './core/News/index'),
  loading: () => <Spin tip="Loading..." />,
  modules: ['newsitem'],
});

const TIMELINE_DATA = {
  labels: [],
  datasets: [
    {
      key: 'Votes',
      label: 'Votes',
      data: [],
      borderColor: '#6495ED',
      backgroundColor: '#6495ED',
      pointHoverBackgroundColor: '#6495ED',
    },
  ],
};

const calculateTimeLineData = (newsData, votesData) => {
  if (newsData && votesData && newsData.length) {
    TIMELINE_DATA.labels = [];
    TIMELINE_DATA.datasets[0].data = [];
    newsData.forEach((news) => {
      TIMELINE_DATA.labels.push(news.objectID);
      TIMELINE_DATA.datasets[0].data.push(votesData[news.objectID] || 0);
    });
  }
  return TIMELINE_DATA;
};

class App extends Component {
  state = {};
  upVote = (dataID) => {
    if (dataID) {
      const { votesData = {} } = this.state;
      let newCount = 1;
      if (votesData[dataID]) {
        newCount = parseInt(votesData[dataID]) + 1;
      }
      this.setState(
        {
          ...this.state,
          votesData: {
            ...votesData,
            [dataID]: newCount,
          },
        },
        () => {
          if (window && window.localStorage) {
            localStorage.setItem(
              'votesData',
              JSON.stringify(this.state.votesData)
            );
          }
        }
      );
    }
  };

  hideNews = (dataID) => {
    if (dataID) {
      const { hideData = {} } = this.state;
      this.setState(
        {
          ...this.state,
          hideData: {
            ...hideData,
            [dataID]: true,
          },
        },
        () => {
          if (window && window.localStorage) {
            localStorage.setItem(
              'hideData',
              JSON.stringify(this.state.hideData)
            );
          }
        }
      );
    }
  };

  componentDidMount() {
    if (window && window.localStorage) {
      const hideData = localStorage.getItem('hideData');
      const votesData = localStorage.getItem('votesData');
      this.setState({
        hideData: (hideData && JSON.parse(hideData)) || {},
        votesData: (votesData && JSON.parse(votesData)) || {},
      });
    }
  }

  getData = (pageNo) => {
    const { history, updateNews } = this.props;
    history.push(`/${pageNo || ''}`);
    fetch(
      `https://hn.algolia.com/api/v1/search${pageNo ? '?page=' + pageNo : '/'}`
    )
      .then((res) => res.json())
      .then((result) => {
        updateNews(result);
        history.push(`/${pageNo || ''}`);
      })
      .catch((err) => console.log(err));
    //window.open(`http://localhost:3000/${pageNo || ''}`, '_self');
  };

  prevPage = () => {
    const { data: { page = 0 } = {} } = this.props;
    const nPage = page - 1;
    this.getData(nPage);
  };

  nextPage = () => {
    const { data: { page = 0 } = {} } = this.props;
    const nPage = page + 1;
    this.getData(nPage);
  };

  render() {
    const { hideData, votesData } = this.state;
    const { data: { page = 0, nbPages = 0, hits = [] } = {} } = this.props;
    const columns = [
      {
        title: 'comments',
        width: '30px',
        key: 'comments',
        className: 'comments',
        render: (data) => data.num_comments || 0,
      },
      {
        title: 'Vote Count',
        key: 'voteCount',
        dataIndex: 'votes',
        width: '30px',
        className: 'voteCount',
      },
      {
        title: 'UpVote',
        key: 'votes',
        width: '20px',
        className: 'upVote',
        render: (data) => (
          <CaretUpOutlined
            className="upvoteAction"
            onClick={() => this.upVote(data.objectID)}
          />
        ),
      },
      {
        title: 'New Details',
        key: 'news_details',
        render: (data) => <NewsItem data={data} hideNews={this.hideNews} />,
      },
    ];
    let newsData = hits;
    if (hideData && Object.keys(hideData).length) {
      newsData = newsData.filter((news) => {
        if (news && !hideData[news.objectID]) {
          return news;
        }
      });
    }

    if (newsData && newsData.length) {
      newsData = newsData.map((news) => {
        if (news && votesData && votesData[news.objectID]) {
          return Object.assign(news, { votes: votesData[news.objectID] });
        }
        return Object.assign(news, { votes: 0 });
      });
    }

    const GRAPH_DATA = calculateTimeLineData(newsData, votesData);

    return (
      <Page {...this.props}>
        <center>
          <header>
            <h1 onClick={() => this.getData(null)}>Hacker News</h1>
          </header>
          <main className="app">
            <Table columns={columns} dataSource={newsData} pagination={false} />
            <div className="custom-pagination">
              <Button type="primary" onClick={this.prevPage} disabled={!page}>
                Previous
              </Button>
              |
              <Button
                type="primary"
                onClick={this.nextPage}
                disabled={!nbPages}
              >
                Next
              </Button>
            </div>
            <AsyncGraph data={GRAPH_DATA} />
            {/* {(hideData && votesData && (
            <>
              <Table
                columns={columns}
                dataSource={newsData}
                pagination={{ pageSize: 20 }}
              />
              <LineGraph data={GRAPH_DATA} />
            </>
          )) || <Spin tip="Loading..." />} */}
          </main>
        </center>
      </Page>
    );
  }
}

export default withRouter(
  connect(
    ({ app }) => ({
      data: app.newsData,
    }),
    (dispatch) => ({
      updateNews: (data) => dispatch(setNewsData(data)),
    })
  )(App)
);
