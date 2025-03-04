
import NavDropdown from 'react-bootstrap/NavDropdown';

function ThemeModeMenu(){

    const toggleThemeMode = (themeMode) => {

        // Get all non-nav body elements
        const htmlElem = document.querySelector("html");
        htmlElem.setAttribute("data-bs-theme", themeMode);
    }

    const themeModeMenu = (
        <NavDropdown align="end" title={
                <>
                    <i className="fa-sharp-duotone fa-regular fa-circle-half-stroke me-2"></i>
                    <span className="d-lg-none">Theme</span>
                </>
            } 
            id="basic-nav-dropdown">
            <NavDropdown.Item href="#" onClick={() => toggleThemeMode("light")}>
                <span className="d-inline-block" style={{width: "20px"}}>
                    <i className="fa-sharp-duotone fa-regular fa-sun"></i>
                </span>
                Light
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => toggleThemeMode("dark")}>
                <span className="d-inline-block" style={{width: "20px"}}>
                    <i className="fa-sharp-duotone fa-regular fa-moon"></i>
                </span>
                Dark                
            </NavDropdown.Item>
        </NavDropdown>
    );

    return themeModeMenu;
}

export default ThemeModeMenu