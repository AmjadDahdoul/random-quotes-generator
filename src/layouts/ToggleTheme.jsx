import { useEffect } from "react";
import { themeChange } from "theme-change";
const ToggleTheme = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "lofi",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    //"emerald",
    //"corporate",
    // "bumblebee",
    //"synthwave",
    //"retro",
    //"aqua",
    //"pastel",
    //"fantasy",
    //"wireframe",
    //"cmyk",
    //"autumn",
    //"acid",
    //"lemonade",
    //"coffee",
    //"winter",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost rounded-btn'>
        Themes
      </label>
      <ul
        tabIndex={0}
        className='menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4'
      >
        {themes.map((theme, index) => (
          <li data-set-theme={theme} key={index}>
            <a className='capitalize'>{theme}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleTheme;
