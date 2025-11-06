import { twMerge } from "tailwind-merge";

function Icon({ name, className, ...props }) {
  return (
    <svg
      className={twMerge("fill-current flex-shrink-0", className)}
      {...props}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}

export default Icon;
