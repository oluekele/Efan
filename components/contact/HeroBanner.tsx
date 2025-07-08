type HeroBannerProps = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function HeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <div
      className="h-64 md:h-80 bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-white space-y-2 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}
