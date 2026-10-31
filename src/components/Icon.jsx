// One stroke icon set: 24px grid, 1.6 stroke, square caps to match the square buttons.
const PATHS = {
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  arrowLeft: <path d="M19 12H5m5-5-5 5 5 5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 8h16M4 16h16" />,
  chat: (
    <>
      <path d="M4 19.5 5.3 15A8 8 0 1 1 9 18.7L4 19.5Z" />
      <path d="M9.2 9.3c.3 2.4 2.3 4.6 5.4 5.5l1.1-1.4-1.9-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-1.9-1.1 1.3Z" />
    </>
  ),
  mail: (
    <>
      <path d="M3.5 6h17v12h-17z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
}

export default function Icon({ name, className = 'icon', title }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  )
}
