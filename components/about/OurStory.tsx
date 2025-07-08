import Image from "next/image";

export default function OurStory() {
  return (
    <section className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-8 items-center">
      <Image
        src="/rice-.jpeg"
        alt="workers inspecting rice"
        width={500}
        height={300}
        className="rounded shadow"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">Our Story: Rooted in Tradition, Driven by Quality</h2>
        <p className="text-sm text-gray-700 mb-2">
          Efan Rice was founded to transform Nigerian rice production with modern, sustainable
          practices. We blend time-honored farming with advanced quality controls to deliver exceptional
          rice to our customers in Nigeria and around the world.
        </p>
        <p className="text-sm text-gray-700">
          From Delta State&apos;s fertile farmlands, we bring you rice that is fresh, nutritious, and
          cultivated with care for the environment and communities.
        </p>
      </div>
    </section>
  );
}
