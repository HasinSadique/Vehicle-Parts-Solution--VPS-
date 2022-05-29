import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="flex justify-around p-10 border-2">
        <img
          className="w-40 rounded-full"
          src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-1/123073024_3203654116399913_8041669527268423252_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE1cGbJeYiBWbaSsvBrwwGlETMfS7XYs-sRMx9Ltdiz6_cZNjx6_8Cu31Y0J-Jn4bJp8Zzx4WTW_13ddLD6orCu&_nc_ohc=eAYsyzGInlEAX_eoZjf&_nc_ht=scontent.fdac13-1.fna&oh=00_AT8_C8JTT33HBbzMTbQbbAMooLQG4rU0ktwL4gENaeUqjg&oe=62B8B35D"
          alt=""
        />
        <div className="w-full bg-gray-100 text-left pl-20 my-auto">
          <h1>Mohammad Hasin Bin Sadique</h1>
          <h1>hasinsadique7@gmail.com</h1>
          <h1>01766620839</h1>
          <h1>01857130439</h1>
        </div>
      </div>
      <div className="text-left p-10 border-2">
        <h1 className="text-center mb-10 bg-black text-white text-2xl font-semibold">
          Education
        </h1>
        <div className="my-5 text-center">
          <h1 className="text-xl font-bold text-black">Undergraduation</h1>
          <h1 className="text-black">
            BSc. in Computer Science from Brac University
          </h1>
        </div>
        <h1 className="text-center mb-10 bg-black text-white text-2xl font-semibold">
          Skills
        </h1>
        <div>
          <h1>
            <div className="flex justify-evenly">
              <div className="text-black w-full">
                <h1 className="mb-4 font-bold text-xl">
                  Web Development (MERN Stack Development)
                </h1>

                <h1>HTML5</h1>
                <h1>CSS3</h1>
                <h1>Bootstrap</h1>
                <h1>Tailwind CSS</h1>
                <h1>Daisy UI</h1>
                <h1>Frontend Frameworks: React.JS</h1>
                <h1>Backend Frameworks: Node.JS</h1>
                <h1>Database: MongoDB, PostgreSQL, MSQL</h1>
                <h1>Others: Firebase, AWS RDS, Heroku, Git</h1>
              </div>
              <div className="w-full text-black">
                <h1 className="mb-4 font-bold text-xl">
                  Mobile Application Development
                </h1>
                <h1>Native Android App Development</h1>
                <h1>Flutter App Development</h1>
                <h1>JAVA</h1>
                <h1>Kotlin</h1>
                <h1>Dart</h1>
              </div>
            </div>
            <div>
              <h1 className="text-center mb-10 bg-black text-white text-2xl font-semibold my-10">
                Projects
              </h1>
              <div className="flex justify-evenly">
                <a className="text-red-500 font-semibold text-2xl" href="">
                  Project 1
                </a>
                <a className="text-red-500 font-semibold text-2xl" href="">
                  Project 2
                </a>
                <a className="text-red-500 font-semibold text-2xl" href="">
                  Project 3
                </a>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
