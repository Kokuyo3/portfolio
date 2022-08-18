import React from 'react';

const AboutCommand = () => {
  return (
    <div className="term-text">
      <p className="indent-8">
        {"Hello there, my name is Cheryl Tang! I'm a Software Engineer with a degree in " +
          'Biomedical Engineering and concentration in Bioinformatics. In other words, my ' +
          'parents wanted a doctor but got a developer. Oops!'}
      </p>
      <br />
      <p className="indent-8">
        {'A Bioinformatics concentration required quite a few CS courses and with each one I ' +
          'increasingly realized software engineering was my true calling even though an additional ' +
          "year of college to change my major wasn't financially feasible - I loved computers from " +
          'a young age and was basically raised by the internet, with an interest in learning ' +
          "Java sparked by the possibility of fishing on RuneScape while I sleep. If you're " +
          'curious to know more about my experiences (throwbacks included) from growing up on the ' +
          "early 2000's net, run `"}
        <span className="text-term-blue-command">{'skid'}</span>
        {'`!'}
      </p>
    </div>
  );
};

export default AboutCommand;
