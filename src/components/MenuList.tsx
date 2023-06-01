import { navLinks } from '../constants'

type MenuListProps = {
  active: string
  setActive: (active: string) => void
  toggle: boolean
  setToggle: (toggle: boolean) => void
  isDesktop: boolean
}

export const MenuList = ({
  active,
  setActive,
  toggle,
  setToggle,
  isDesktop = true,
}: MenuListProps) => {
  return isDesktop ? (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : 'text-secondary'
          } 
              hover:text-white text-[18px] 
              font-medium cursor-pointer
              `}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="list-none flex justify-end items-start flex-col gap-4">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : 'text-secondary'
          } 
              font-poppins font-medium cursor-pointer text-[16px]
              `}
          onClick={() => {
            setToggle(!toggle)
            setActive(link.title)
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  )
}
