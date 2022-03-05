export const Slide: React.FC = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col justify-between overflow-x-hidden bg-green text-white lg:flex-row lg:items-center xl:px-24">
      <div className="flex flex-col gap-4 p-8 md:gap-12 md:p-24 md:py-4 lg:w-2/4 ">
        <div className="">
          <img src="download.svg" className="w-xs" />
        </div>
        <h2 className="text-lg font-bold md:text-5xl">Pobierz aplikację</h2>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </p>
        <div>
          <button className="rounded-sm bg-blue py-2 px-3">
            Pobierz aplikację
          </button>
        </div>
      </div>

      <div className="bg-green lg:relative lg:w-2/4">
        <img
          src="app.svg"
          className="m-auto w-sm md:w-lg lg:absolute lg:top-80 lg:bottom-0 lg:left-0 lg:right-0 lg:mx-auto"
        />
      </div>
    </div>
  )
}
