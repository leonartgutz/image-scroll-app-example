import React from 'react';
import { Text } from 'react-native';
import { ImgBody } from './styles';

interface ItemProps {
  item: {
    title: string,
    url: string
  }
}

const Item = ({ url, title }: any) => (
  <ImgBody
    imageStyle={{
      borderRadius: 7,
    }}
    source={{
      uri: url,
    }}
  >
    <Text>{title}</Text>
  </ImgBody>
);

const RenderItem: React.FC<ItemProps> = ({ item }) => (
  <Item url={item.url} title={item.title} />
);

export default RenderItem;
