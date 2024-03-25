import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
// import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Text, Title } = Typography;

const News = ({ simplified }) => {

  const { data: cryptosNews, isFetching } = useGetCryptoNewsQuery({ count: simplified ? 6 : 12 });

  // if (!cryptoNews?.value) return 'Loading ...';
  if(isFetching) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {cryptosNews?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable>
            <a href={news.url} target='_blank' rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.title}</Title>
                <div className='provider-container'>
                  <div>
                    <Text>{news.source}</Text>
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News