'use client';

import { ChangeEvent, FC, useRef, useState } from 'react';
import Image from 'next/image';

interface ImagePickerProps {
    label: string,
    name: string
}

const ImagePicker: FC<ImagePickerProps> = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState<string | null>();
    const imageInput = useRef<HTMLInputElement | null>(null);

    function handlePickClick() {
        if (imageInput.current) {
            imageInput.current.click();//use useRef to access DOM elements
        }
    }

    function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files ? event.target.files[0] : null;

        if (!file) {
            setPickedImage(null);
            return;
        }

        // web works API ?
        const fileReader = new FileReader();

        fileReader.onload = () => {
            // Ensure the result is a string before setting the state
            setPickedImage(fileReader.result as string)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <input
                    className="hidden"
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}//add a ref attribute to an element to access it directly in the DOM.
                    onChange={handleImageChange}
                    required
                />
                <button
                    className="mt-4 cursor-pointer"
                    type="button"
                    onClick={handlePickClick}
                >
                    <div className="relative flex justify-center items-center w-48 h-36 border border-red-200">
                        {!pickedImage &&
                            <div>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3982" width="42" height="42"><path d="M512 0.006C229.233 0.006 0.006 229.233 0.006 512c0 282.766 229.228 511.993 511.994 511.993S1023.993 794.765 1023.993 512C1023.993 229.233 794.766 0.006 512 0.006z m319.607 831.601c-41.53 41.529-89.874 74.128-143.689 96.891-55.686 23.553-114.873 35.495-175.918 35.495s-120.233-11.942-175.918-35.495c-53.816-22.763-102.161-55.361-143.69-96.891-41.53-41.53-74.128-89.874-96.891-143.689C71.948 632.232 60.006 573.045 60.006 512s11.942-120.233 35.495-175.918c22.762-53.816 55.361-102.16 96.891-143.69s89.874-74.128 143.69-96.891C391.767 71.948 450.955 60.006 512 60.006s120.232 11.942 175.918 35.495c53.815 22.763 102.159 55.361 143.689 96.891 41.529 41.53 74.128 89.875 96.891 143.69 23.553 55.685 35.495 114.873 35.495 175.918s-11.942 120.232-35.495 175.918c-22.763 53.815-55.361 102.159-96.891 143.689z" p-id="3983" fill="#f3b9b9"></path><path d="M795.465 512c0 23.483-19.037 42.52-42.52 42.52h-481.89c-23.483 0-42.52-19.036-42.52-42.52 0-23.483 19.037-42.52 42.52-42.52h481.89c23.483 0 42.52 19.037 42.52 42.52z" p-id="3984" fill="#f3b9b9"></path><path d="M512 795.465c-23.483 0-42.52-19.037-42.52-42.52V271.054c0-23.482 19.036-42.52 42.519-42.52 23.483 0 42.52 19.037 42.52 42.52v481.891c0.001 23.483-19.036 42.52-42.519 42.52z" p-id="3985" fill="#f3b9b9"></path></svg>
                            </div>}
                        {pickedImage && (
                            <Image
                                className="object-cover"
                                src={pickedImage}
                                alt='The image selected by the user.'
                                fill
                            />)}
                    </div>
                </button>
            </div>
        </div>
    );
}
export default ImagePicker;