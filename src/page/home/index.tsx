import React, { useState } from 'react';
import { Text } from 'react-native';
import MyButton from '../../components/button';
import { HomeBody, ImgBody, Scroll } from './styles';

const DATA = [
  {
    id: 1,
    uri: 'https://via.placeholder.com/600/771796',
  },
  {
    id: 2,
    uri: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 3,
    uri: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 4,
    uri: 'https://via.placeholder.com/600/92c952',
  },
];

const Item = ({ uri }: any) => (
  <ImgBody source={{
    uri,
  }}
  >
    <Text>{uri}</Text>
  </ImgBody>
);

const renderItem = ({ item }: any) => (
  <Item uri={item.uri} />
);

const Home: React.FC = () => {
  const [isDisabled, setIsDisable] = useState(false);

  return (
    <HomeBody>
      <Scroll data={DATA} renderItem={renderItem} horizontal />
      <MyButton isDisabled={isDisabled} size="big" type="secondary" text="Click me" isRound />
    </HomeBody>
  );
};

export default Home;
