import { FC } from "react";

type Props = {
  classNames?: string;
};

const ArrowBack: FC<Props> = ({ classNames }: Props) => {
  return (
    <svg
      className={classNames ?? "w-6 h-6"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="24"
        y="24"
        width="24"
        height="24"
        rx="2"
        transform="rotate(180 24 24)"
      />
      <path
        d="M14 8L10 12L14 16"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowBack;