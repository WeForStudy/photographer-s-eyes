import { useState, useEffect } from 'react';
import { ImageType } from '../types/ImageType';

export function useImgs(initialVal: Array<ImageType>, apisCall: Function): [Array<ImageType>] {
  const [imgs, setImgs] = useState<Array<ImageType>>(initialVal);
  useEffect(() => {
      apisCall().then((res: any) => {
          setImgs(res);
      });
  }, [])
  return [imgs];
}
    