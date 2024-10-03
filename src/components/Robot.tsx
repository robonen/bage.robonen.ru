interface RobotProps {
  style?: Record<string, string | number>;
}

export function Robot(props: RobotProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" {...props}>
      <rect
        width="45"
        height="45"
        x="0.5"
        y="0.5"
        stroke="#fff"
        stroke-dasharray="1 1"
        stroke-linecap="square"
        rx="7.5"
      />
      <circle cx="12.5" cy="19.5" r="7" stroke="#fff" />
      <circle
        cx="14"
        cy="20"
        r="2.5"
        fill="#484848"
        stroke="#fff"
      />
      <circle
        cx="35"
        cy="20"
        r="2.5"
        fill="#494949"
        stroke="#fff"
      />
      <circle cx="33.5" cy="19.5" r="7" stroke="#fff" />
      <rect width="17" height="4" x="14.5" y="34.5" stroke="#fff" rx="1.5" />
      <circle cx="6" cy="6" r="2" fill="#F90" />
    </svg>
  );
}
