import React, { Component}  from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



export default class VideosScreen extends Component {
    render() {
        return (
            <div>
                <div className="sliderback">
                    <h1>Fofao chapado a careta da alegria</h1>
                    <Carousel responsive={responsive} infinite={true} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} showDots={true} arrows={false}>
                        <div><iframe width="400" height="230" src="https://www.youtube.com/embed/QRH5JVI-ZPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe width="400" height="230" src="https://www.youtube.com/embed/JZQCY-x7Tbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe width="400" height="230" src="https://www.youtube.com/embed/x_dG56l2mH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe width="400" height="230" src="https://www.youtube.com/embed/a5W_UeOengY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Carousel>
                </div>

                <div className="sliderback my-5">
                    <h1>Fofao trenzinho da alegria</h1>
                    <Carousel responsive={responsive} infinite={true} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} showDots={true} arrows={false}>
                        <div><iframe width="400" height="200" src="https://www.youtube.com/embed/QRH5JVI-ZPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe width="400" height="200" src="https://www.youtube.com/embed/JZQCY-x7Tbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe width="400" height="200" src="https://www.youtube.com/embed/x_dG56l2mH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe width="400" height="200" src="https://www.youtube.com/embed/a5W_UeOengY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Carousel>
                </div>
            </div>

        )

    }
}
