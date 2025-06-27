import { FC, HTMLAttributes, ReactNode, useCallback, useRef, useState } from "react";
import { useClickOutside } from "@/customHooks/useClickOutside";
import styles from "./page.module.css";
import Image from "next/image";

export type HorizontalPosition = "left" | "center" | "right";
export type VerticalPosition = "top" | "center" | "bottom";

export type LunaraItem = {
  item: ReactNode;
  callback?: () => void;
  disabled?: boolean;
};

export interface LunaraProps {
  size?: "xs" | "sm" | "lg" | "none";
  variant?: "primary" | "secondary" | "light";
  labelVariant?:
    | "bold"
    | "italic"
    | "underlined"
    | "bold-italic"
    | "bold-underlined"
    | "italic-underlined"
    | "bold-italic-underlined"
    | "normal";
  closingLabel?: string;
  btnRadius?: "round" | "base" | "full" | "none";
  outline?: boolean;
  position?: Exclude<
    `${VerticalPosition}-${HorizontalPosition}`,
    "center-center" | "top-center" | "bottom-center"
  >;
  options?: LunaraItem[];
  containerProps?: HTMLAttributes<HTMLDivElement>;
  labelContainerProps?: HTMLAttributes<HTMLDivElement>;
  labelProps?: HTMLAttributes<HTMLDivElement>;
  buttonProps?: HTMLAttributes<HTMLLIElement>;
}

export const Lunara: FC<LunaraProps> = (props) => {
  const {
    options,
  } = props;

  const labelRef = useRef<HTMLDivElement>(null!);
  const listRef = useRef<HTMLUListElement | null>(null);
  const rootRef = useRef<HTMLDivElement>(null!);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);


  const handleListExpansion = useCallback(() => {
      setIsExpanded(!isExpanded);
    
  }, [isExpanded]);


  

  return (
    <div
     className={styles.LunaraContainer}
      ref={rootRef}
    >
      <div
        className={styles.labelParent}
        role="button"
        tabIndex={0}
        onClick={handleListExpansion}
      >
        <div
          ref={labelRef}
          role="none"
        >
           {!isExpanded?<Image src="/Astutrise_downward_arrow.png" alt="astutrise_downward_arrow" width={20} height={20}/>
           :<Image src="/Astutrise_closing_sign.png" alt="astutrise_closing_sign" width={20} height={20}/>}
        </div>
      </div>

      {isExpanded && (
        <ul
          id="lunara-list"
          className= {`${isExpanded ? `${styles.activeUlist} ${styles.visible}` : `${styles.uList}`}`}
          ref={listRef}
        >
          {options?.map((item, i) => (
            <li
              key={i}
              role="menuitem"
              className={styles.labelParent}
              tabIndex={0}
              aria-disabled={item.disabled ?? false}
            >
              {item.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
