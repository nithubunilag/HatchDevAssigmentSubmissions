const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          Select Option
        </button>
        {isOpen && (
          <ul className="dropdown-menu" style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ padding: '10px', cursor: 'pointer' }}>Option 1</li>
            <li style={{ padding: '10px', cursor: 'pointer' }}>Option 2</li>
            <li style={{ padding: '10px', cursor: 'pointer' }}>Option 3</li>
          </ul>
        )}
      </div>
    );
  };
  
  export default DropDown;