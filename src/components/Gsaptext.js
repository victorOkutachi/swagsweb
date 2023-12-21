import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import SplitTextJS from 'split-text-js';

const Gsaptext = () => {
  const titles = useRef([]);
  const t1 = useRef(gsap.timeline({ repeat: -1 }));

  useEffect(() => {
    titles.current = gsap.utils.toArray('h4');

    titles.current.forEach((title) => {
      const splitTitle = new SplitTextJS(title, { type: 'words, chars' });

      t1.current
        .from(splitTitle.words, {
          opacity: 0,
          y: 80,
          stagger: 0.02,
        })
        .to(
          splitTitle.words,
          {
            opacity: 0,
            y: -80,
            stagger: 0.02,
          },
          '<1'
        );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Ensure this effect runs only once

  return (
    <div className='container'>
      <div className='text-wrapper m-auto'>
        <h4 className='font-Dancing text-[30px] md:text-[40px]'>Come On!</h4>
        <h4 className='font-Dancing text-[30px] md:text-[40px]'>Dive In and</h4>
      </div>
    </div>
  );
};

export default Gsaptext;