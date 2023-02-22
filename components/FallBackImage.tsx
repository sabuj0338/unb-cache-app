import Image, { ImageProps } from "next/future/image";
import { useEffect, useState } from "react";
import Api from "../config/Api";

export default function FallBackImage({ src, ...rest }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...rest}
      src={imgSrc ? imgSrc : Api.PLACEHOLDER}
      onError={() => {
        setImgSrc(Api.PLACEHOLDER);
      }}
    />
  );
}
