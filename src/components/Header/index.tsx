import { LinkNav } from './LinkNav'
import { Logo } from './Logo'
import { ImSearch } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import { useRef, useState } from 'react'


interface HeaderProps {

}
export function Header(props: HeaderProps) {
  const [search, setSearch] = useState(true)
  const [saida, setSaida] = useState(false)
  const refInput = useRef<HTMLDivElement>(null)

  function handleActiveSearch() {
    setSearch(true)
  }

  function handleDesativeSearch() {

    setSaida(true)
    setTimeout(() => {
      setSearch(false)
      setSaida(false)
    }, 460)
  }



  return (
    <header className={`bg-topnav-bg h-[60px] px-4 `}  >
      <div className="max-w-[1170px] h-[60px] m-auto flex items-center">
        <Logo />
        <nav className=' flex-1 text-white flex items-start self-start h-full  '>
          {!search ? (
            <div className='flex-1 flex h-[60px]'>
              <LinkNav href='#'>Mangás</LinkNav>
              <LinkNav href='#'>Categorias</LinkNav>
              <LinkNav href='#'>Grupos</LinkNav>
            </div>
          ) : (
            <div className='flex-1  h-[60px] flex items-center pr-2 relative'>
              <div className={`bg-topnav-bg h-full w-0 animate-entrada ${saida && 'animate-saida'} absolute`} ref={refInput}></div>
              <div className='bg-black  p-2 flex items-center gap-1 ml-2
              rounded-tl-xl rounded-br-lg
              '>
                <span className='tracking-tighter text-primary'>Mangá sortido!</span>
                <img src="/sortida.webp" alt="icon random" />
              </div>
              <div className='flex-1 bg-white flex ml-1 overflow-hidden rounded-t-lg border-t-4 border-boxshadow-color'>
                <input type="text"
                  className='w-full h-[35px] text-black px-2 outline-none'

                />
                <button className='p-1' onClick={handleDesativeSearch}>
                  <ImSearch size={'1rem'} color={'black'} />

                </button>
              </div>

            </div>
          )
          }

          {!search && (<div className=' self-center p-1 mr-4'>
            <button onClick={handleActiveSearch}>
              <ImSearch />
            </button>
          </div>)}
          <div className='
          self-end h-[52px] flex items-center overflow-hidden bg-[#5A574F]
          rounded-tl-md rounded-tr-2xl
          '>
            <button className='flex items-center h-[60px] self-end px-2 gap-2' >
              <BsPersonCircle size={'1.5rem'} />
              <span className='tracking-tighter'>Login</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}