import React from 'react';

const ItemComponent = ({
                           id,
                           title,
                           description,
                           category,
                           imageSrc
                       }) => {
    return (
        <>
            <div className="max-w-md bg-gray-400 mx-auto rounded-xl my-5 shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageSrc}
                             alt="Man looking at item at a store"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{category}</div>
                        <p href="#"
                           className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</p>
                        <p className="mt-2 text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemComponent;
