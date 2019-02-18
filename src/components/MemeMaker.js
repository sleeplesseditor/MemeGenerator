import React, { Component } from 'react';

const photos = [
    { src: '../demo_images/vict-baby.png' },
    { src: '../demo_images/ned.jpeg' },
    { src: '../demo_images/devilgirl.jpg' },
    { src: '../demo_images/trump.jpg' },
    { src: '../demo_images/one-does-not.jpg' },
    { src: '../demo_images/dank.png' },
    { src: '../demo_images/boy.png' },
    { src: '../demo_images/sad.png' },
    { src: '../demo_images/wolf.png' },
    { src: '../demo_images/fry.jpg' },
    { src: '../demo_images/jobs.jpg' },
    { src: '../demo_images/phone.jpg' },
    { src: '../demo_images/oldie.png' },
    { src: '../demo_images/image.png' },
    { src: '../demo_images/doubt.png' },
    { src: '../demo_images/crying.png' },
    { src: '../demo_images/sponge.png' },
    { src: '../demo_images/dog.png' },
    { src: '../demo_images/frust.png' },
    { src: '../demo_images/web.png' },
    { src: '../demo_images/penguin.png' }
];

const initialState = {
    toptext: "", 
    bottomtext: "", 
    isTopDragging: false, 
    isBottomDragging: false, 
    topY: "10%",  
    topX: "50%",
    bottomX: "50%",
    bottomY: "90%"
}

class MemeMaker extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: 0,
            modalIsOpen: false,
            currentImagebase64: null,
            ...initialState
        };
    }

    getBase64Image(img) {
        // Convert image to data URI
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
    }

    openImage = (index) => {
        const image = photos[index];
        const base_image = new Image();
        base_image.src = image.src;
        const currentImagebase64 = this.getBase64Image(base_image);
        // Setting the currently selected image on the state.
        this.setState(prevState => ({
            currentImage: index,
            modalIsOpen: !prevState.modalIsOpen,
            currentImagebase64,
            ...initialState
        }));
    }

    render() {
        return (
            <div className="content">
                {photos.map((image, index) => (
                    <div className="image-holder" key={image.src}>
                        <span className="meme-top-caption">Top text</span>
                        <img 
                            style={{
                                width: "100%",
                                cursor: "pointer",
                                heght: "100%"
                            }}
                            alt={index}
                            src={image.src}
                            onClick={() => this.openImage(index)}
                            role="presentation"
                        />
                        <span className="meme-bottom-caption">Bottom text</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default MemeMaker;