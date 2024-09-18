const Hero = ({
  title='李孜孜是小豬豬',
  subtitle= '會在這裡分享一些小豬豬的心得與技術',
}) => {
  return (
    <div>
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-emerald-300 sm:text-5xl md:text-6xl">
            { title }
          </h1>
          <p className="my-4 text-xl text-white">
            { subtitle }
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
