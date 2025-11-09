"use client";

function Button({ children, style, click }) {
  return (
    <button className={style} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
