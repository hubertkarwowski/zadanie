import { useState } from 'react'

export const SlideTest: React.FC = () => {
  let [index, setIndex] = useState(0)
  return (
    <div
      className={` relative flex h-screen w-screen  justify-between overflow-x-hidden text-white transition-all duration-500 lg:flex-row lg:items-center xl:px-24
        ${
          index === 0
            ? 'flex-col bg-green'
            : index === 1
            ? 'flex-col-reverse bg-blue'
            : 'flex-col bg-rose text-grey'
        }`}
    >
      <div className="flex flex-col gap-4 p-8 md:gap-12 md:p-24 md:py-4 lg:w-2/4 ">
        <div className="">
          <img
            src={
              index === 0
                ? 'download.svg'
                : index === 1
                ? 'icon-phone.svg'
                : 'icon-pill.svg'
            }
            className="w-xs"
          />
        </div>
        <h2 className={`text-lg font-bold md:text-5xl`}>
          {index === 0
            ? 'Pobierz aplikację'
            : index === 1
            ? 'Porozmawiaj z lekarzem'
            : 'Otrzymaj receptę'}
        </h2>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </p>
        <div>
          <button
            className={`rounded-sm py-2 px-3 ${index === 2 && 'text-white'} ${
              index === 1 ? 'bg-green' : 'bg-blue'
            }`}
          >
            Pobierz aplikację
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 top-32 z-10 m-auto flex w-full place-content-between px-5 lg:px-4 xl:left-0 xl:px-24">
        <img
          src="arrow.svg"
          className="w-xs3 cursor-pointer md:w-xs2"
          onClick={() => (index !== 0 ? setIndex(index - 1) : setIndex(2))}
        />
        <img
          src="arrow.svg"
          className="w-xs3 rotate-180 cursor-pointer bg-sm md:w-xs2"
          onClick={() => (index !== 2 ? setIndex(index + 1) : setIndex(0))}
        />
      </div>
      <div
        className={`transition-all duration-500 lg:relative lg:w-2/4 ${
          index === 0
            ? 'bg-green'
            : index === 1
            ? 'bg-blue'
            : 'bg-rose text-grey'
        }`}
      >
        <img
          src={index === 0 ? 'app.svg' : index === 1 ? 'talk.svg' : 'qr.svg'}
          className={`m-auto w-sm md:w-lg lg:absolute lg:mx-auto ${
            index === 0
              ? 'lg:top-80 lg:bottom-0 lg:left-0 lg:right-0 lg:w-xl2 '
              : index === 1
              ? 'lg:bottom-56 lg:top-0 lg:w-xl2'
              : 'lg:top-80 lg:bottom-0 lg:left-0 lg:right-0 lg:w-xl2'
          }`}
        />
      </div>
    </div>
  )
}
