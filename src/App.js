import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/tailwind.output.css';
import Statistic from "./components/Statistic";

function App() {
    return (
        <div className="App">
            <Statistic
                icon_path={"/icons/briefcase.svg"}
                stat_name={"Appointment"}
                stat_number={"213"}
            />

            <Statistic
                icon_path={"/icons/briefcase.svg"}
                stat_name={"Patient"}
                stat_number={"104"}
            />
        </div>
    );
}

export default App;
