import { useState, useEffect } from 'react';
import { ImageType } from '../types/ImageType';

export function useImgs(initialVal: Array<ImageType>, apisCall: Function, callback: Function|undefined = undefined): [Array<any>] { // open return type for more possibility
  const [imgs, setImgs] = useState<Array<ImageType>>(initialVal);
  useEffect(() => {
      apisCall().then((res: Array<ImageType>) => {
          setImgs(res);
          if (callback) {
            callback();
          }
      });
  }, [setImgs, apisCall, callback])
  return [imgs];
}
    