import { TCustomOption } from "components/select";
import React from "react";

export interface ICustomOptionProps {
    option: TCustomOption;
    onClick: (value: TCustomOption["value"]) => void;
}

export default function CustomOption({ option: {value, title}, onClick }: ICustomOptionProps) {
    const handleClick =
        (
            clickedValue: TCustomOption["value"]
        ): React.MouseEventHandler<HTMLLIElement> =>
        () => {
            onClick(clickedValue);
        };

    return (
        <li className="option" value={value} onClick={handleClick(value)} tabIndex={0}>
            {title}
        </li>
    );
}
