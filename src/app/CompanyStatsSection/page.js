const logos = [
  {
    src: "https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-brand3.png",
    alt: "Tech Land",
  },
  {
    src: "	https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-brand1.png",
    alt: "Logotype 2",
  },
  {
    src: "https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-brand5.png",
    alt: "Logotype 1",
  },
  {
    src: "https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-brand1.png",
    alt: "Logotype 3",
  },
  {
    src: "https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-brand3-1.png",
    alt: "Startup",
  },
];

export default function CompanyStatsSection() {
  return (
    <>
      <section className="bg-[#1A1D22] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-gray-400 mb-2">Company Statistics</p>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              We've achieved many world <br /> wide awards
            </h2>
            <p className="text-gray-400 max-w-md">
              There are many variations of passages of Lorem Ipsum but their
              majority have suffered their majority have suffered
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 border border-gray-700 rounded-xl p-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "1.5k", label: "Happy Clients" },
              { value: "479+", label: "Projects Done" },
              { value: "49+", label: "Awards Won" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center border border-gray-700 p-6 rounded-lg"
              >
                <span className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A1D22] text-white py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-medium">
            We Take Care Of More Than 1.5k Trusted Allies
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto opacity-50">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="mx-auto h-10"
            />
          ))}
        </div>
      </section>
    </>
  );
}
