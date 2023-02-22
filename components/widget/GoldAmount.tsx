import GoldIcon from "./GoldIcon";

type Props = {
    amount: string,
    iconClassName?: string,
    textClassName?: string,
    className?: string,
}
export default function GoldAmount({ amount, iconClassName, textClassName, className }: Props) {
    return (
        <span className={className ? className : "inline-flex flex-row items-center space-x-1 p-0 m-0"}>
          <GoldIcon className={iconClassName} />
          <span className={textClassName}>
            {amount ?? "0"}
          </span>
        </span>
    );
}