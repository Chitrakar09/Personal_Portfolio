import React from "react";
function Button({
  className = "",
  text = "View",
  background = "bg-primary-golden",
  text_Color = "text-background-dark",
  shadow = true,
  ring = false,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${className} ${background} ${text_Color} rounded-2xl ${
        shadow
          ? "shadow-[0px_2px_30px_-13px_var(--color-accent-amber,#FF8A00)]"
          : null
      } ${ring ? "ring-accent-amber ring-2" : null} font-bold `}
    >
      {text}
    </button>
  );
}

export default Button;
