import Container from "components/container";
import React from "react";
import "./style.scss";
import { ReactComponent as ArrowDown } from "app/assets/arrow-down.svg";
import CustomOption from "components/option";
import { CardTypes } from "cards/model";

/**
 * Виновник данного компонента: https://habr.com/ru/articles/735224/
 * все вопросы к ниму
 */

export type TCustomOption = { title: string; value: CardTypes };

export interface ISelectProps {
  selected: TCustomOption | null;
  options: TCustomOption[];
  placeholder?: string;
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  onChange?: (selected: TCustomOption["value"]) => void;
  onClose?: () => void;
}

export default function CustomSelect({
  selected,
  status,
  mode,
  onClose,
  options,
  placeholder,
  onChange,
  ...props
}: ISelectProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !selectRef.current?.contains(target)) {
        isOpen ?? onClose?.();
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleOptionClick = (value: TCustomOption["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: React.MouseEventHandler<
    HTMLDivElement
  > = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container className="container__card-select">
      <div
        className="select"
        ref={selectRef}
        data-is-open={isOpen}
        data-mod={mode}
      >
        <div
          className={"placeholder"}
          data-status={status}
          data-selected={!!selected?.value}
          onClick={handlePlaceHolderClick}
          role="button"
          tabIndex={0}
        >
          {selected?.title || placeholder}
          <div className="arrow-down"><ArrowDown /></div>
        </div>
        {isOpen && (
          <ul className="options">
            {options.map((e) => (
              <CustomOption
                key={e.value}
                onClick={handleOptionClick}
                option={e}
              />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}
