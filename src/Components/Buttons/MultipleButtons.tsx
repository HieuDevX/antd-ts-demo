import * as React from "react";
import { Button, Menu, Dropdown, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";

const MultipleButtons: React.FC = () => {
  const handleMenuClick = (e: ClickParam) => {
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={e => handleMenuClick(e)}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown overlay={menu}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
};

export default MultipleButtons;
