import { useState } from "react";
import "./App.css";

const menu = [
  {
    id: 1,
    item: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    item: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    item: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    item: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    item: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    item: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    item: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    item: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    stock: 20,
  },
];

function App() {
  const [menuItem, setMeunItem] = useState(menu);
  const [addItemId, setAddItemId] = useState(null);
  const handleDelStock = (menuId) => {
    const newMenuItem = menuItem.map((menu) =>
      menu.id === menuId
        ? { ...menu, stock: Math.max(menu.stock - 1, 0) }
        : menu
    );
    setMeunItem(newMenuItem);
  };
  const handleAddStock = (menuId) => {
    const newMenuItem = menuItem.map((menu) =>
      menu.id === menuId ? { ...menu, stock: menu.stock + 1 } : menu
    );
    setMeunItem(newMenuItem);
  };
  const handleChangeItem = (menuId, newName) => {
    const newMenuItem = menuItem.map((menu) =>
      menu.id === menuId ? { ...menu, item: newName } : menu
    );
    setMeunItem(newMenuItem);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>
          {menuItem.map((menu) => (
            <tr key={menu.id}>
              <td>
                {menu.id === addItemId ? (
                  <input
                    type="text"
                    value={menu.item}
                    onChange={(e) => handleChangeItem(menu.id, e.target.value)}
                    onBlur={() => setAddItemId(null)}
                  />
                ) : (
                  <span onClick={() => setAddItemId(menu.id)}>{menu.item}</span>
                )}
              </td>
              <td>
                <small>{menu.description}</small>
              </td>
              <td>{menu.price}</td>
              <td>
                <button onClick={() => handleDelStock(menu.id)}>-</button>
                {menu.stock}
                <button onClick={() => handleAddStock(menu.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
