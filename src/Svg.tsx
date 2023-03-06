import React, { useEffect, useState } from 'react';

interface Props {
  svgUrl: string;
}

const SVGConverter: React.FC<Props> = ({ svgUrl }) => {
  const [svgCode, setSvgCode] = useState<string>('');
  const [svgDataUrl, setSvgDataUrl] = useState<string>('');

  useEffect(() => {
    fetch(svgUrl)
      .then((response) => response.text())
      .then((data) => {
        setSvgCode(data);
        const svgDataUrl = `data:image/svg+xml;base64,${btoa(data)}`;
        setSvgDataUrl(svgDataUrl);
      });
  }, [svgUrl]);

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: svgCode }} /> */}

      {/* <img src={svgDataUrl} alt="svg" /> */}

      <svg style={{ backgroundImage: `url(${svgDataUrl})` }}>
        {/* <image href={svgDataUrl} /> */}
      </svg>
    </>
  );
};

export default SVGConverter;
