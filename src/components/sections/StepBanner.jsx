import stepBannerImg from "../../assets/stepbanner.png";

export default function StepBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-[min(1180px,92%)] pt-5">
        <div className="h-11.5 rounded-lg bg-[#3a3a3a]" />
      </div>
      <div className="mx-auto w-[min(1180px,92%)] pt-5">
        <img src={stepBannerImg} alt="Step Banner" className="w-full h-auto" />
      </div>
    </section>
  );
}
