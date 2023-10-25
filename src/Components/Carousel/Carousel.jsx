import { useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css"

const Carousel = ({ content }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const caroContainer = useRef(null)
    const dotContainer = useRef(null)
    const activeDot = useRef(null)

    const nextSlide = () => {
        if(Object.values(caroContainer.current.children).length - 1 === currentIndex) {
            goToSlide(0)
        } else {
            goToSlide(currentIndex + 1)
        }
    }

    const previousSlide = () => {
        if(currentIndex === 0) {
            goToSlide(Object.values(caroContainer.current.children).length - 1)
        } else {
            goToSlide(currentIndex - 1)
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        updateFocusedDot(slideIndex)
    };

    const updateFocusedDot = (slideIndex) => {
        // remove classes from previous dot
        var previousDot = activeDot.current
        previousDot.className = previousDot.className.replaceAll("carousel__active-dot", " ")

        // add classes to new dot based on slideIndex
        var newActiveDot = Object.values(dotContainer.current.children)[slideIndex]
        newActiveDot.className += " carousel__active-dot"

        // update previous dot ref
        activeDot.current = newActiveDot
    }


  return (
    <div className="carousel__container">
        <div className="carousel__slides-container" ref={caroContainer}>
          {content["video"]
            ?
              <div
                className='carousel__item'
                key={0}
                style={{transform: `translate(-${currentIndex * 100}%)`}}
              >
                <iframe className="responsive-iframe" src={content["video"] }/>
              </div>
            :
              null
          }
          {content["images"].map((image, index) => {
            return(
              <div
                className='carousel__item'
                key={content["video"] ? index + 1  : index}
                style={{transform: `translate(-${currentIndex * 100}%)`}}
              >
                <img className="responsive-image" src={image} alt="project-image" width="500" height="600"/>
              </div>
            )
          })}
        </div>
        <div ref={dotContainer}>
          {content["video"]
            ?
              <span
                className="carousel__individual-dot carousel__active-dot"
                onClick={() => goToSlide(0)}
                ref={activeDot}
              >
                  &#x2022;
              </span>
            :
              null
          }
          {content["images"].map((image, index) => {
            return (
              <span
                className={`carousel__individual-dot ${content["video"] === null && index === 0 ? " carousel__active-dot" : null}`}
                ref={content["video"] === null && index === 0 ? activeDot : null}
                onClick={() => goToSlide(content["video"] === null ? index : index + 1)}
              >
                &#x2022;
              </span>
            )
          })}
        </div>

        <a className="carousel__previous carousel__button" onClick={() => previousSlide()}>
            <span className="carousel__icon-container">
                <FaChevronLeft />
            </span>
        </a>
        <a className="carousel__forward carousel__button" onClick={() => nextSlide()}>
            <span className="carousel__icon-container">
                <FaChevronRight/>
            </span>
        </a>
    </div>
    )
}

export default Carousel
