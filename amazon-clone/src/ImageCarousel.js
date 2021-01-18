import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./ImageCarousel.css";

function ImageCarousel() {
  return (
    <div className="imageCarousel">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="Amazon Prime Video Banner"
              className="home__image"
            />
          </Slide>
          <Slide index={1}>
            <img
              src="https://store-images.s-microsoft.com/image/apps.53280.13756631990520576.c7bf8936-a11d-4c89-b498-2442c2977baf.7cd42ed2-955c-4a17-91aa-842c072a1056?mode=scale&q=90&h=1080&w=1920"
              alt="Amazon Music"
              className="home__image"
            />
          </Slide>
          <Slide index={2}>
            <img
              src="https://media-assets-04.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-77017-494891-alexa-tell-me-some-amazon-echo-tips--2x1--740.jpg"
              alt="Amazon Prime Video Banner"
              className="home__image"
            />
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default ImageCarousel;
