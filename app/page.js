import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

// export default function Home() {
//   return (
//     <main className="bg-purple-100">
//       <section className="grid grid-cols-2 h-[50vh]">
//         <div className="flex flex-col gap-4 items-center justify-center">
//           <p className={`text-3xl font-bold ${poppins.className}`}> 
//             The best URL shortener in the Market
//           </p>
//           <p className="px-56 text-center">
//             We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
//           </p>
//           <div className='flex gap-3 justify-start'>
//           <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
//           <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
//         </div>
//         </div>
//         <div className=" flex justify-start relative">
//           <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
//         </div>

//       </section>
//     </main>
//   );
// }
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-fuchsia-100">
      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 Fast • Secure • Free
          </span>

          <h1
            className={`text-6xl leading-tight mt-6 font-bold text-gray-900 ${poppins.className}`}
          >
            Shorten Your
            <span className="text-purple-600"> Long URLs</span>
            <br />
            In Seconds
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Create clean, memorable links instantly. No login required. No
            annoying tracking. Just paste your URL and get a short link you can
            share anywhere.
          </p>

          <div className="flex gap-5 mt-10">
            <Link href="/shorten">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 transition rounded-xl text-white font-semibold shadow-xl hover:scale-105">
                Try Now →
              </button>
            </Link>

            <Link href="/github">
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition">
                GitHub
              </button>
            </Link>
          </div>

          <div className="flex gap-10 mt-12 text-gray-600">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">100K+</h2>
              <p>URLs Shortened</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">99.9%</h2>
              <p>Uptime</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">Free</h2>
              <p>Forever</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">

          <div className="absolute w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white">
            <Image
              src="/vector.jpg"
              alt="URL Shortener Illustration"
              width={520}
              height={520}
              className="rounded-2xl drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </section>
    </main>
  );
}