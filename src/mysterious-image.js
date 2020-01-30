import React from 'react';
import CatTheTeacher from './img/cat-the-teacher.jpg'

const MysteriousImage = () => {
    return (
        <div>
            <h1>Oh, hello there my student!</h1>
            <img
                src={CatTheTeacher}
                alt="Cat the teacher"
            />
        </div>
    )
};

export default MysteriousImage;