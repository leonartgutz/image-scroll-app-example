import React, { useEffect, useState } from 'react';
import MyButton from '../../components/button';
import { HomeBody, Scroll } from './styles';
import api from '../../services/api';
import RenderItem from '../../components/renderItem';

const Home: React.FC = () => {
  const [isDisabled, setIsDisable] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getImages() {
      const result: any = await api.get('/photos');
      setPhotos(result.data);
      console.log(photos);
    }

    getImages();
  }, []);

  function handlePress(value: string): void {
    console.log(value);
  }

  return (
    <HomeBody>
      <Scroll data={photos} renderItem={RenderItem} horizontal />
      <MyButton onPress={() => handlePress('hey')} isDisabled={isDisabled} size="big" type="primary" text="Click me" isRound />
    </HomeBody>
  );
};

export default Home;
