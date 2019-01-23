import * as React from "react";
import { Button } from "antd";

const TypeButton: React.FC = () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
};

export default TypeButton;
