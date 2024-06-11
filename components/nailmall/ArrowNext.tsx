import { FC } from "react";

type Props = {
  classNames?: string;
};

const ArrowNext: FC<Props> = ({ classNames }: Props) => {
  return (
    <svg
      className={classNames ?? "w-6 h-6"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="2" />
      <path
        d="M10 16L14 12L10 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowNext;