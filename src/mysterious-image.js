import React from "react";
import CatTheTeacher from "./img/cat-the-teacher.jpg";

const MysteriousImage = () => {
    return (
        <div>
            <h1>Hello there my student!</h1>
            <img
              src={CatTheTeacher}
              alt="Cat the teacher"
              height="200px"
            />
        </div>
    );
};

export default MysteriousImage;
