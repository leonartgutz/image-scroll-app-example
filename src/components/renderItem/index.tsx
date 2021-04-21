import React from 'react';
import { ImgBody, ImgText } from './styles';

interface ItemProps {
  item: {
    id: any,
    title: string,
    url: string
  }
}

const Item = ({ id, url, title }: any) => (
  <ImgBody
    key={id}
    imageStyle={{
      borderRadius: 7,
    }}
    source={{
      uri: url,
    }}
  >
    <ImgText>{title}</ImgText>
  </ImgBody>
);

const RenderItem: React.FC<ItemProps> = ({ item }) => (
  <Item url={item.url} title={item.title} id={item.id} />
);

export default RenderItem;
