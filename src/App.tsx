import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


function App() {
    const [themeColor, setThemeColor] = useState<string>('light');

    return (
        <div
            className={`min-h-screen ${themeColor === 'dark' ? 'bg-gray-800 text-white' : 'bg-teal-100 text-gray-800'}`}>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue) => {
                    setThemeColor(themeValue);
                }
            }}>
                <div className="flex flex-col md:flex-row justify-between items-center p-6 gap-6">
                    <LeftBranch/>
                    <RightBranch/>
                </div>
            </MyContext.Provider>
        </div>
    );
}

export default App
