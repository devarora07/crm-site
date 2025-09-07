import React, { useEffect, useState } from "react";

const Banner: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="tagline-body">
      <div className="tagline-container">
        <h1 className="tagline">
          <div className="main-text">
            <span className="word-the">The</span>
            
            <span className="t-wrapper">
              <span className="word-not text-purple-700">not so</span>
              <span className="caret text-purple-700">^</span>
              <span className="word-s">-</span>
            </span>
            <span className="word-boring"> boring</span>
            <span className="word-crm bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white rounded-xl"> CRM</span>
          </div>
        </h1>
      </div>


  {showArrow && (
        <div className="scroll-down-container">
          <div className="scroll-arrow" onClick={scrollToNext}>
            <span>↓</span>
          </div>
        </div>
      )}

      {/* Simple Scroll Down Arrow */}
      {/* <div className="scroll-down-container">
        <div className="scroll-arrow" onClick={scrollToNext}>
          <span>↓</span>
        </div>
      </div> */}

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .tagline-body {
          font-family: 'Inter', sans-serif;
          background: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          position: relative;
        }

        .tagline-container {
          text-align: center;
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tagline {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          color: #2c3e50;
          line-height: 1.2;
          position: relative;
          display: inline-block;
          letter-spacing: -0.02em;
        }

        .main-text {
          position: relative;
          display: inline-block;
        }

        .t-wrapper {
          position: relative;
          display: inline;
        }

        .word-not {
          position: absolute;
          top: -1.2em;
          left: 0;
          transform: translateX(-25%);
          // color:rgb(0, 0, 0);
          font-size: 0.6em;
          animation: glow 2s ease-in-out infinite alternate;
          z-index: 10;
          white-space: nowrap;
          font-weight: 400;  
        }

        .caret {
          position: absolute;
          bottom: -0.65em;
          left: 0.1em;
          transform: translateX(-50%);
          // color: #4B0082;
          font-size: 0.8em;
          font-weight: 900;
          animation: bounce 1.5s ease-in-out infinite;
          font-weight: 400;  
        }

        .word-the {
          color: #7f8c8d;
        }

        .word-s {
          color: #ffffff;
        }

        .word-boring {
          position: relative;
          text-decoration: line-through;
          text-decoration-color: #4B0082;
          text-decoration-thickness: 4px;
          color: #95a5a6;
          animation: strikethrough 3s ease-in-out infinite 0.5s;
        }

        .word-crm {
          // background: linear-gradient(45deg, #4B0082 0%, #6f00ff 50%, #8A2BE2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          position: relative;
          animation: shine 3s ease-in-out infinite;
        }

        /* Scroll Down Container */
        .scroll-down-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 4rem;
          z-index: 100;
        }

        /* Simple Scroll Arrow - Indigo and Purple theme */
        .scroll-arrow {
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 1rem;
        }

        .scroll-arrow:hover {
          transform: translateY(-5px);
        }

        .scroll-arrow span {
          font-size: 3rem;
          // color: #4B0082;
          color: #8A2BE2;
          font-weight: bold;
          animation: bounce-arrow 1.5s ease-in-out infinite;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .scroll-arrow:hover span {
          // color: #8A2BE2;
          color: #6A1FBF;
          transform: scale(1.2);
        }

        // @keyframes glow {
        //   0% {
        //     text-shadow: 0 0 10px #4B0082, 0 0 20px #4B0082;
        //   }
        //   100% {
        //     text-shadow: 0 0 20px #4B0082, 0 0 30px #4B0082, 0 0 40px #8A2BE2;
        //   }
        // }

      // @keyframes glow {
      //   0% {
      //     text-shadow: 0 0 10px rgb(126 34 206), 0 0 20px rgb(126 34 206); /* purple-700 */
      //   }
      //   100% {
      //     text-shadow: 
      //       0 0 10px rgb(126 34 206), 
      //       0 0 20px rgb(147 51 234),  /* purple-600 */
      //       0 0 30px rgb(109 40 217);  /* purple-800 */
      //   }
      // }

      @keyframes glow {
        0% {
          text-shadow: 0 0 4px rgba(31, 31, 31, 0.25), 0 0 6px rgba(31, 31, 31, 0.2);
        }
        100% {
          text-shadow: 
            0 0 6px rgba(31, 31, 31, 0.3), 
            0 0 10px rgba(55, 65, 81, 0.25),  /* gray-700 */
            0 0 12px rgba(17, 24, 39, 0.35);  /* gray-900 */
        }
      }



        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

      @keyframes strikethrough {
        0% {
          text-decoration-color: transparent;
        }
        50% {
          text-decoration-color: rgb(126 34 206); /* Tailwind purple-700 */
        }
        100% {
          text-decoration-color: transparent;
        }
      }

        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes bounce-arrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tagline-body {
            padding: 1rem;
          }

          .tagline {
            font-size: clamp(2rem, 10vw, 4rem);
          }

          .word-not {
            font-size: 0.7em;
            top: -1.1em;
          }

          .caret {
            font-size: 0.9em;
          }

          .scroll-down-container {
            margin-top: 2rem;
          }

          .scroll-arrow span {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
export {};
