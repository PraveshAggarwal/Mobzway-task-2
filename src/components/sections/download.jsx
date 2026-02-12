import downloadImage from "../../assets/download.jpg";

export default function Download() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="overflow-hidden rounded-2xl ">
          <img
            src={downloadImage}
            alt="Download App"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
