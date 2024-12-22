import React from 'react';

interface MenuItem {
    name: string
}

interface MenuBarProps {
    list: string[];
}


const MenuBar: React.FC<MenuBarProps> = ({ menuList }) => {

    const menuItems: MenuItem[] = [ {list[0] },
      { id: '2', label: 'About', content: 'Learn more About Us here.' },
      { id: '3', label: 'Services', content: 'Here are the Services we offer.' },
      { id: '4', label: 'Contact', content: 'Reach out to us on our Contact Page.' },
    ];
  
    const [activeItem, setActiveItem] = useState<string | null>(null);
  
    const handleClick = (id: string) => {
      setActiveItem(activeItem === id ? null : id); // Toggle active state
    };
  
    return (
      <div className="menu-bar">
        <nav>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <div className="content-area">
          {menuItems.map(
            (item) =>
              activeItem === item.id && (
                <div key={item.id} className="content-block">
                  {item.content}
                </div>
              )
          )}
        </div>
      </div>
    );
  };