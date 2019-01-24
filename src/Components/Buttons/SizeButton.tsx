import * as React from "react";
import { useState } from "react";
import { Button, Radio, Icon } from "antd";
// import * as antd from "antd";
import { ButtonSize } from "antd/lib/button";
import { RadioChangeEvent } from "antd/lib/radio/interface";

const SizeButton: React.FC = () => {
  const initialSize: ButtonSize = "large" as ButtonSize;
  const [size, setSize] = useState(initialSize);

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value as ButtonSize);
  };

  return (
    <div>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type="primary" size={size}>
        Primary
      </Button>
      <Button size={size}>Normal</Button>
      <Button type="dashed" size={size}>
        Dashed
      </Button>
      <Button type="danger" size={size}>
        Danger
      </Button>
      <br />
      <Button type="primary" shape="circle" icon="download" size={size} />
      <Button type="primary" icon="download" size={size}>
        Download
      </Button>
      <br />
      <Button.Group size={size}>
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
  );
};

export default SizeButton;
