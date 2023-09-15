import React from 'react';
import Portrait from "../assets/AE628F2F-580C-4593-84D2-AA171685504A.png";
import Wood from "../assets/vecteezy_empty-old-wood-table-on-isolate-on-transparent-background_21014813_60.png";

function AboutMe() {
  return (
    <div className="relative">
      <img
        src={Portrait}
        alt="logopic"
        className="w-100px mx-auto my-20"
      />

<img
  src={Wood}
  alt="logopic"
  className="w-1 md:w-2/3 mx-auto my-10"
/>
    </div>
  );
}

export default AboutMe;
