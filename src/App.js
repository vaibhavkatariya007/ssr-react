import React, { Component } from 'react';
import { Table, Spin } from 'antd';
import moment from 'moment';
import { CaretUpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LineGraph from './Graph';

import './App.css';

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

  render() {
    const { hideData, votesData } = this.state;
    const columns = [
      {
        title: 'comments',
        dataIndex: 'num_comments',
        width: '30px',
        key: 'comments',
        className: 'comments',
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
        render: (data, index) => (
          <div key={`news-${index}`} className="news-title-block">
            {(data.url && (
              <a href={data.url} target="_blank">
                {data.title}
              </a>
            )) || <span>{data.title}</span>}
            <span className="createdOn">
              | posted on: (
              {moment(data.created_at).format('MMMM Do YYYY, h:mm:ss a')})
            </span>
            <div className="more-info-n-action">
              {data.author && (
                <span className="author">by {data.author} |</span>
              )}
              {data.points && (
                <span className="points">{data.points} points | </span>
              )}
              <span
                onClick={() => this.hideNews(data.objectID)}
                className="hide-action"
              >
                [ hide ]
              </span>
            </div>
          </div>
        ),
      },
    ];
    let newsData = this.props.data && this.props.data.hits;
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
      <center>
        <div className="App">
          {(hideData && votesData && (
            <>
              <Table
                columns={columns}
                dataSource={newsData}
                pagination={{ pageSize: 20 }}
              />
              <LineGraph data={GRAPH_DATA} />
              <div style={{ textAlign: 'center', padding: '5px' }}>ID</div>
            </>
          )) || <Spin tip="Loading..." />}
        </div>
      </center>
    );
  }
}

export default withRouter(
  connect(({ app }) => ({
    data: app.newsData,
  }))(App)
);
