import React from 'react';
import { Button } from 'antd';

const Navigation = ({ prevPage, nextPage, ...rest }) => (
  <div className="custom-pagination">
    <Button type="primary" onClick={prevPage} disabled={!rest.page}>
      Previous
    </Button>
    |
    <Button type="primary" onClick={nextPage} disabled={!rest.nbPages}>
      Next
    </Button>
  </div>
);

export default Navigation;
