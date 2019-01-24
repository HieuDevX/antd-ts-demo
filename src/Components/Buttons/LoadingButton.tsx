import * as React from "react";
import { useState } from "react";
import { Button } from "antd";

const LoadingButton: React.FC = () => {
  const [loading, changeLoadingState] = useState(false);
  const [iconLoading, changeIconLoadingState] = useState(false);

  const handleEnterLoading = () => {
    changeLoadingState(true);
  };

  const handleEnterIconLoading = () => {
    changeIconLoadingState(true);
  };

  return (
    <span>
      <Button type="primary" loading>
        Loading
      </Button>
      <Button type="primary" size="small" loading>
        Loading
      </Button>
      <br />
      <Button type="primary" loading={loading} onClick={handleEnterLoading}>
        Click me!
      </Button>
      <Button
        type="primary"
        icon="poweroff"
        loading={iconLoading}
        onClick={handleEnterIconLoading}
      >
        Click me!
      </Button>
      <br />
      <Button shape="circle" loading />
      <Button type="primary" shape="circle" loading />
    </span>
  );
};

export default LoadingButton;
