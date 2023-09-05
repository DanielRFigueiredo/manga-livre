import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
interface LinkNavProps extends LinkProps {
  children: ReactNode
}
export function LinkNav({ children, ...rest }: LinkNavProps) {
  return (
    <Link
      className='flex-1 flex justify-center items-start h-full hover:border-b-2 border-[#e5d5a7]'
      {...rest}>
      <h1 className='h-[50px] leading-[60px]  text-primary'>
        {children}
      </h1>
    </Link>
  )
}