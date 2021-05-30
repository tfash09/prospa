import React, {useState} from 'react';
import Aside from './Aside';
import Main from './Main';


const Dashboard = () =>{
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleToggleSidebar = (value) => {
        console.log("value", value);
        setToggled(value);
    };

    return(
        <div className={`app rtl ${toggled ? 'toggled' : ''}`}>
            <Aside
                // image={image}
                collapsed={collapsed}
                // rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <Main
                // image={image}
                toggled={toggled}
                collapsed={collapsed}
                // rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                // handleRtlChange={handleRtlChange}
                // handleImageChange={handleImageChange}
            />
      </div>
    )
}

export default Dashboard