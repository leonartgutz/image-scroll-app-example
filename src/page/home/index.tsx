/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';
import MyButton from '../../components/button';
import { HomeBody, Scroll } from './styles';
import api from '../../services/api';
import RenderItem from '../../components/renderItem';

const Home: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    async function getImages() {
      const result: any = await api.get('/albums/1/photos');
      const { data } = result;
      setPhotos([]);

      Promise.all(data.map(async (image: any) => {
        const hash = shorthash.unique(image.url);
        const path = `${FileSystem.cacheDirectory}${hash}`;
        const imgUrl = await FileSystem.getInfoAsync(path);

        // Vefiry Cache
        if (imgUrl.exists) {
          setPhotos((oldArray) => [...oldArray, {
            title: image.title, url: imgUrl.uri, id: image.id.toString(),
          }]);
        } else {
          const imgDownloaded = await FileSystem.downloadAsync(image.url, path);
          setPhotos((oldArray) => [...oldArray, {
            title: image.title, url: imgDownloaded.uri, id: image.id.toString(),
          }]);
        }
      }));
    }

    getImages();
  }, []);

  const randomize = (array: any, newArr: any = []): any => {
    const newPhotoArray = newArr;
    if (array.length === 0) {
      return true;
    }

    const i = Math.floor(Math.random() * array.length);
    newPhotoArray.push(array[i]);
    array.splice(i, 1);
    const oldArray = array;

    setPhotos(newPhotoArray);

    return randomize(oldArray, newPhotoArray);
  };

  return (
    <HomeBody>
      <Scroll data={photos} renderItem={(RenderItem) as any} keyExtractor={(item: any) => item.id} horizontal />
      <MyButton onPress={() => { randomize(photos); }} isDisabled={false} size="big" type="primary" text="Click me" isRound />
    </HomeBody>
  );
};

export default Home;
