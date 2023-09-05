import Link from "next/link";

interface LogoProps {

}
export function Logo(props: LogoProps) {
  return (
    <div className='h-9 w-48 px-4 border-r border-black '>
      <Link href='/' className='h-9 w-40  inline-block bg-logo bg-bottom bg-cover'></Link>
    </div>
  )
}