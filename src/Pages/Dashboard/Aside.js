import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import Avatar from '@material-ui/core/Avatar';
import { FaTachometerAlt, FaGem, FaRegLaughWink } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';


const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  

    return (
        <ProSidebar
            image={false}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '10px 20px',
                        marginTop: '5px',
                        overflow: 'auto',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                    }}
                >
                    <Avatar style={{ backgroundColor: '#1C1335' }}>BN</Avatar>
                    <div style={{ fontSize: '12px', marginLeft: '5px' }}>
                        <h5 style={{ color: '#1B003B' }}>Clayvant Inc</h5>
                        <p style={{ marginTop: '-10px' }}>Manage account</p>
                    </div>
                    <Button
                        style={{ backgroundColor: '#F4F8FB', color: '#B1BECA', marginLeft: '5px', fontSize: '12px', minWidth: '15px', height: '35px', padding: '5px' }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    // onClick={prevStep}
                    >
                        <KeyboardArrowDownIcon />
                    </Button>

                    <Popper className="user-dropdown" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal 
                            
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose} style={{color: '#1C1335'}}>Clayvant Inc</MenuItem>
                                            <MenuItem onClick={handleClose}>Business name 2</MenuItem>
                                            <MenuItem onClick={handleClose}>Business name 3 <p> Add a business</p></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>

                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        active
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">New</span>}
                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}> Invoice</MenuItem>
                    <MenuItem icon={<FaGem />}> Management</MenuItem>
                    <MenuItem icon={<FaGem />}> Security</MenuItem>
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title={'Support'}
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>{'submenu'} 1</MenuItem>
                        <MenuItem>{'submenu'} 2</MenuItem>
                        <MenuItem>{'submenu'} 3</MenuItem>
                    </SubMenu>

                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'left', padding: '1.2em', fontWeight: 'bolder' }}>
                <h4>prospa</h4>
            </SidebarFooter>
        </ProSidebar>
  );
};

export default Aside;