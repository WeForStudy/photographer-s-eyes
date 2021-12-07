import { useState, useEffect } from 'react';
import { ImageType } from '../types/ImageType';

export function useImgs(initialVal: Array<ImageType>, apisCall: Function, callback: Function|undefined = undefined): [Array<ImageType>] {
  const [imgs, setImgs] = useState<Array<ImageType>>(initialVal);
  useEffect(() => {
      apisCall().then((res: Array<ImageType>) => {
          setImgs(res);
      });
  }, [])
  useEffect(() => {
    if (callback && !!imgs.length) {
      console.log('???');
      callback();
    }
  }, [imgs]);
  return [imgs];
}
    