import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';


function ThemeMenu() {

    const [themes, setThemes] = useState([]);

    const load = (data) => {    
        setThemes(data.themes);
    };

    fetch('https://bootswatch.com/api/5.json')
        .then(response => response.json())
        .then(data => load(data));

    const toggleTheme = (css) => {
        const themeStyleSheet = document.querySelector("#ThemeStyleSheet");
        themeStyleSheet.setAttribute("href", css);
    };

    const themeMenu = (
        <NavDropdown title="BS Themes" id="ThemeMenuDropdown">
        {
            themes.map(theme => (
                <NavDropdown.Item key={theme.name} href="#" onClick={() => toggleTheme(theme.css)}>
                    {theme.name}
                </NavDropdown.Item>
            ))
        }
        </NavDropdown>
    );

    return themeMenu;
}

export default ThemeMenu