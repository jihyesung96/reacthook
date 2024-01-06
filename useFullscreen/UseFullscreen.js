import React, { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (element.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (element.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (element.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return {
    element,
    triggerFull,
    exitFull,
  };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div
      style={{
        height: "1000vh",
      }}
    >
      <div ref={element}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX///8AAAD//v78///+s2PZ2dmlpaX9jgDy8vL5+fnBwcH8jwD9jAD8/Pyurq6ysrJ3d3fq6upYWFjQ0NBdXV2Dg4Pj4+MsLCz95s47OzvMzMwjIyNcXFxra2tSUlK6urr9pj/97tn9r1j99uj85MWenp4aGhqVlZV9fX2KiooNDQ1vb29DQ0MzMzP8+vH7q078ozj+um3927T+vnn9lgD9y5T9nCP8w4T8z538y5X83br9mxL8v3UXFxe8nzkXAAAD1klEQVR4nO3X6VLqShQF4N60mQcSMkCIEEYZBARE9Kjn/V/r7g5Y51pl1fkjN5i7vrLSAdK6V3oICgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9Eg38aVRdxIZIJ4fFBelXXchmbweBhI+RwO9jVNOLeddyJlI+G44yrruUyRs67s5Obw3bnPsmqi7mEsfO2OR42e/d56B7rmFA+uY/y2d0PjKHcGpOqy7kAeeRoQ+PoDIR84bD122smxkA2GseDs5c8YQ+bquv5bg2xc19kQ/wyDhtegw/uvuqKvt3mcBhzwldjqzaZvftQt72Gl94ND6S8cYyOUHlr90iUA1dtn7wAnUf1kuds1SV9s6FzVHvLi/v+Vi7EibOV9fr+/Vx+jeEH4Xjn7lW2o9up1Ur03pyhVCM5khOj3GR+8SOx6qq+kXx1RyrPs/vKT35nyO+Mjbc6PRLlyHnqdDqT42HS6by7j3zeORp7UZ+VOHYcx3X5vybHcA2jPPL5Q42+uXVGN18Y1Wma/g80zk4n5zeqLuqSrB+2AousK0S6Cv56YbJKy+tbeTtIP39k9eMrTq3T0hQarb746HPVMWl8XFCp+/lCyr2vulwHneiWE/aFN43jqSWShd2LbTO5nYdC2L3WrBmEosttSyWMiHQzTOjOEt371lxl9uNYv2sLi7vrnigCO7jn91ozq+pkHzgh6Sn1vZUam5WXl2OkjpnwTwOWNk8t55lTojrNe+f3uiIo2/ape1yOca5T3ub7diV06hH51NKpFYZ98jNqWgtqp2GbtDsqzIKT5edWiD7Zp24WkW36lGmUa+aMMp8Cz+pRNKN+asZUiKZeba4/dJo1aUm39xQJ0aUgI56AaqTuObcahxbZPIfP67BHvuoU2Tb1uF0tZzRTcbOA8jz/TdMZhxN8N6gfVRrrXzgh1023c1WaT0lG5kfCgieqEBl1aV22mrp6bZar0VZ7k5X/5rETIqQsocD39ak2KwdZ0+fEv+c66LTgSvmWE02nRNG6TDhXCbU+xc2Y1+G55YTWmu4CviELsaJes089nq0Jz+x1RO3C575lwph8rU3p3//4f2LK1fKgZOWWQ7pYlgmDclbyWuRNhNJwXbZq5wxb6jLuEmZqKprCVq+XdOreFImaCpo6T6pO9iGM+KkgUr7hoW3zxNI0T1gRv0wjS3jdIjS1cxud9v+0sE/zLypUZGFyt1T76B5G6kOrW1zLCAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxU/wC1HkEpP4SVagAAAABJRU5ErkJggg==" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
