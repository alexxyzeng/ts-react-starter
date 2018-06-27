import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
  children?: any;
}

export const Hello = (props: HelloProps) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}
    </h1>
    {props.children}
  </div>
);
