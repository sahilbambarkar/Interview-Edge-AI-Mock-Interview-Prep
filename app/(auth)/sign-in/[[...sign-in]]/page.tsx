import { SignIn } from "@clerk/nextjs";
import Image from 'next/image'; 

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src="/bg2.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            fill
            style={{ objectFit: 'cover', opacity: 0.8 }} 
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <Image src="/Logo.png" width={200} height={200} alt="Logo" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Interview Edge-AI
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Improve your career with well-crafted resumes and insightful
              practice interviews. Utilize our cutting-edge AI technology to
              revolutionize your job hunt and make an impression on potential
              employers.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-black">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image
                   src="/logo1.png"
                  alt="my responsive logo"
                  width={85}
                  height={85}

                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Interview Edge AI
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 mb-10 text-justify">
                Elevate your career with intelligent mock interviews and
                personalized resume building. Transform your job search and
                stand out to employers with our advanced AI technology.
              </p>
            </div>

            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary: {
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    ":hover": {
                      backgroundColor: "#16a34a",
                    },
                  },
                },
              }}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
