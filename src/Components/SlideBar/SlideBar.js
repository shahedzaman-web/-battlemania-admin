import React from "react";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
const SlideBar = () => {
  return (
    <div style={{ width: 250, minHeight: "100vh" }}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              User Group
            </Nav.Item>
            <Dropdown eventKey="3" title="Games" icon={<Icon icon="gamepad" />}>
              <Dropdown.Item eventKey="3-1" icon={<Icon icon="gamepad" />}>
                All Games
              </Dropdown.Item>
              <Dropdown.Item eventKey="3-2" icon={<Icon icon="gamepad" />}>
                Matches
              </Dropdown.Item>
              <Dropdown.Item eventKey="3-3" icon={<Icon icon="image" />}>
                Images
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              eventKey="4"
              title="Shop"
              icon={<Icon icon="shopping-cart" />}
            >
              <Dropdown.Item eventKey="3-3" icon={<Icon icon="product-hunt" />}>
                Product
              </Dropdown.Item>
              <Dropdown.Item eventKey="3-3" icon={<Icon icon="first-order" />}>
                Order
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="3-3"
                icon={<Icon icon="shopping-basket" />}
              >
                Courier
              </Dropdown.Item>
            </Dropdown>
            <Nav.Item eventKey="4-1" icon={<Icon icon="globe" />}>
              Country
            </Nav.Item>
            <Nav.Item eventKey="4-2" icon={<Icon icon="credit-card" />}>
              Money Orders
            </Nav.Item>
            <Nav.Item eventKey="4-3" icon={<Icon icon="money" />}>
              Withdraw Requests
            </Nav.Item>

            <Dropdown
              eventKey="5"
              title="Reports"
              icon={<Icon icon="file-text-o" />}
            >
              <Dropdown.Item eventKey="5-1" icon={<Icon icon="trophy" />}>
                Top Players
              </Dropdown.Item>
              <Dropdown.Item eventKey="5-2" icon={<Icon icon="mortar-board" />}>
                Leader-Board
              </Dropdown.Item>
            </Dropdown>
            <Nav.Item eventKey="4-5-1" icon={<Icon icon="bullhorn" />}>
              Announcements
            </Nav.Item>
            <Nav.Item eventKey="4-5-2" icon={<Icon icon="thumbs-o-up" />}>
              Lottery
            </Nav.Item>
            <Dropdown
              eventKey="8"
              title="Website Settings"
              icon={<Icon icon="image" />}
            >
              <Dropdown.Item eventKey="6-1" icon={<Icon icon="file-text" />}>
                Pages
              </Dropdown.Item>
              
              <Dropdown
                eventKey="7"
                title="Home Page Settings"
                icon={<Icon icon="image" />}
              >
                <Dropdown.Item eventKey="7-1" icon={<Icon icon="home" />}>
                  Main Banner
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-3" icon={<Icon icon="download" />}>
                  App Screenshots
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-4" icon={<Icon icon="download" />}>
                  Feature Tab
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-5" icon={<Icon icon="download" />}>
                  {" "}
                  Features
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-6" icon={<Icon icon="download" />}>
                  How To Play
                </Dropdown.Item>
              </Dropdown>
           
              
              <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                How To Install
              </Dropdown.Item>
            </Dropdown>
            
              <Dropdown
                eventKey="4-5"
                title="App Setting"
                icon={<Icon icon="cogs" />}
              >
                  <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                App Setting
              </Dropdown.Item> 
              <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                Currency Settings
                </Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                Withdraw Method
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                Payment Method 
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                App Tutorial
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                Slider
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2" icon={<Icon icon="download" />}>
                Banner
              </Dropdown.Item>
              </Dropdown>
          
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              License
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SlideBar;
