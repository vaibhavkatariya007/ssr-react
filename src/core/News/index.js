import React from 'react';
import dayjs from 'dayjs';

const NewsItem = ({
  data: {
    objectID,
    url = null,
    title = 'No title',
    created_at,
    author,
    points,
  } = {},
  hideNews,
}) => (
  <div className="news-title-block">
    {(url && (
      <a rel="noopene noreferrer" href={url} target="_blank">
        {title}
      </a>
    )) || <span>{title}</span>}
    {created_at && (
      <span className="createdOn">
        | posted on: ({dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')})
      </span>
    )}
    <div className="more-info-n-action">
      {author && <span className="author">by {author} |</span>}
      {points && <span className="points">{points} points | </span>}
      <span onClick={() => hideNews(objectID)} className="hide-action">
        [ hide ]
      </span>
    </div>
  </div>
);

export default NewsItem;
