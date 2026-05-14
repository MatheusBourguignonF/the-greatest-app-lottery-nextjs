import { SVGProps } from "react";

interface IArrowRight extends SVGProps<SVGSVGElement> {}

export const ArrowRight = (props: IArrowRight) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M32 16.009c0-.267-.11-.522-.293-.714l-9.899-9.999c-.391-.395-1.024-.394-1.414 0-.391.394-.391 1.034 0 1.428l8.193 8.275H1c-.552 0-1 .452-1 1.01s.448 1.01 1 1.01h27.586l-8.192 8.275c-.391.394-.39 1.034 0 1.428.391.394 1.024.394 1.414 0l9.899-9.999c.187-.188.29-.448.293-.713z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}   