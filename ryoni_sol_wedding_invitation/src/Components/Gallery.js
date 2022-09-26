import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import styled from 'styled-components';
import GalleryPhoto1 from '../Assets/IMG_0031.JPG';
import GalleryPhoto2 from '../Assets/IMG_0197.JPG';
import GalleryPhoto3 from '../Assets/IMG_0364.JPG';
import GalleryPhoto4 from '../Assets/IMG_0409.JPG';
import GalleryPhoto5 from '../Assets/IMG_0466.JPG';
import GalleryPhoto6 from '../Assets/IMG_0723.JPG';
import GalleryPhoto7 from '../Assets/IMG_0861.JPG';
import GalleryPhoto8 from '../Assets/IMG_0959.JPG';
import GalleryPhoto9 from '../Assets/IMG_1036.jpg';
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Gallery</Title>
      </Divider>
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
     
    </Wrapper>
   
  );
};

export default Gallery;
