import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600">Hi, I am Valdir Junior</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-700">
          I am an IT Professional with extensive experience and solid knowledge in implementing and configuring servers
          and their services.
        </p>
        <Link href="#about" className="hero-btn">
          Read More
        </Link>
      </div>
    </section>
  )
}
