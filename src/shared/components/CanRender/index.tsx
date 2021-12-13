import React from "react";

interface CanRenderProps {
  isRenderable?: boolean;
}

const CanRender: React.FC<CanRenderProps> = ({
  isRenderable = true,
  children,
}) => {
  return isRenderable ? <>{children}</> : null;
};

export default CanRender;
