import React from "react";

const Banner: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="tagline-body">
      <div className="tagline-container">
        <h1 className="tagline">
          <div className="main-text">
            <span className="t-wrapper">
              <span className="word-not">Not</span>
              <span className="caret">^</span>
              <span className="word-s">-</span>
            </span>
            <span className="word-the">The</span>
            <span className="word-boring"> boring</span>
            <span className="word-crm"> CRM</span>
          </div>
        </h1>
      </div>

      {/* Scroll Down Arrow - Made more prominent */}
      <div className="scroll-down-container">
        <div className="scroll-arrow" onClick={scrollToNext}>
          <div className="arrow-icon">
            <span>↓</span>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </div>

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
          color: #3498db;
          font-size: 0.6em;
          animation: glow 2s ease-in-out infinite alternate;
          z-index: 10;
          white-space: nowrap;
        }

        .caret {
          position: absolute;
          bottom: -0.65em;
          left: 0.1em;
          transform: translateX(-50%);
          color: #3498db;
          font-size: 0.8em;
          font-weight: 900;
          animation: bounce 1.5s ease-in-out infinite;
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
          text-decoration-color: #3498db;
          text-decoration-thickness: 4px;
          color: #95a5a6;
          animation: strikethrough 3s ease-in-out infinite 0.5s;
        }

        .word-crm {
          background: linear-gradient(45deg, #2980b9 0%, #3498db 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          position: relative;
          animation: shine 3s ease-in-out infinite;
        }

        /* Scroll Down Container - Fixed positioning */
        .scroll-down-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 4rem;
          z-index: 100;
        }

        /* Scroll Arrow Styles - More visible */
        .scroll-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 1rem;
        }

        .scroll-arrow:hover {
          transform: translateY(-5px);
        }

        .arrow-icon {
          width: 60px;
          height: 60px;
          border: 3px solid #3498db;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.8rem;
          transition: all 0.3s ease;
          animation: pulse 2s ease-in-out infinite;
          background: rgba(52, 152, 219, 0.1);
        }

        .arrow-icon span {
          font-size: 2rem;
          color: #3498db;
          font-weight: bold;
          animation: bounce-arrow 1.5s ease-in-out infinite;
        }

        .scroll-text {
          font-size: 1rem;
          color: #7f8c8d;
          font-weight: 600;
          opacity: 0.9;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .scroll-arrow:hover .arrow-icon {
          background: #3498db;
          transform: scale(1.1);
          border-color: #2980b9;
        }

        .scroll-arrow:hover .arrow-icon span {
          color: white;
        }

        .scroll-arrow:hover .scroll-text {
          opacity: 1;
          color: #3498db;
          transform: translateY(-2px);
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 10px #3498db, 0 0 20px #3498db;
          }
          100% {
            text-shadow: 0 0 20px #3498db, 0 0 30px #3498db, 0 0 40px #3498db;
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
            text-decoration-color: #3498db;
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

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(52, 152, 219, 0);
          }
        }

        @keyframes bounce-arrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
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

          .arrow-icon {
            width: 50px;
            height: 50px;
            border-width: 2px;
          }

          .arrow-icon span {
            font-size: 1.5rem;
          }

          .scroll-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
export {};
