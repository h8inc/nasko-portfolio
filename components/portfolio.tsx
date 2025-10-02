import TideProject from "./projects/tide"
import HotjarProject from "./projects/hotjar"
import InsurifyProject from "./projects/insurify"
import CaliperProject from "./projects/caliper-project"

export default function Portfolio() {
  return (
    <div className="space-y-16">
      <h2 className="text-base font-normal text-gray-600 mb-8 font-aeonik-regular">Some of my work</h2>
      <TideProject />
      <HotjarProject />
      <InsurifyProject />
      <CaliperProject />
    </div>
  )
}
