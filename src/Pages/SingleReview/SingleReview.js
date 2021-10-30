import React from 'react';

const SingleReview = (props) => {
    // console.log(props.review)
    const { name, image, review } = props.r || {};

    return (


        <div class="bg-white rounded-lg p-6">
            <div class="flex items-center space-x-6 mb-4">
                <img class="h-28 w-28 object-cover object-center rounded-full"
                    src={image} alt="photo" />
                <div>
                    <p class="text-xl text-gray-700 font-normal mb-1">{name}</p>
                    {/* <p class="text-base text-blue-600 font-normal">Software Engineer</p> */}
                </div>
            </div>
            <div>
                <p class="text-gray-400 leading-loose font-normal text-base">{review}</p>
            </div>
        </div>


    );
};

export default SingleReview;