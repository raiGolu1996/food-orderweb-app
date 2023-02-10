
import React from "react";
import { MenuList } from '../data/data'
import MenuItem from "../component/MenuItem";
import "../styling/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;




// import React from "react";
// import { MenuList } from "../data/data";
// import MenuItem from "../component/MenuItem";
// import "../styling/menu.css";

// const Menu = () => {
//   return (
//     <div className="menu">
//       <div className="menuTitle">
//         <div className="menuList">
//           {MenuList.map((menuItem, key) => (
//             <MenuItem
//               key={key}
//               image={menuItem.image}
//               name={menuItem.name}
//               price={menuItem.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;












