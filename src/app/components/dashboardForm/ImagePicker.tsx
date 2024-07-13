'use client';

import { FC, useRef, useState } from 'react';
import Image from 'next/image';

interface ImagePickerProps {
    label: string,
    name: string
}

const ImagePicker: FC<ImagePickerProps> = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();//use useRef to access DOM elements
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        // web works API ?
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <div className="bg-orange-600 relative w-48 h-36">
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            className="object-contain"
                            src={pickedImage}
                            alt='The image selected by the user.'
                            fill
                        />)}
                </div>
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}//add a ref attribute to an element to access it directly in the DOM.
                    onChange={handleImageChange}
                    required
                />
                <button
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
export default ImagePicker;