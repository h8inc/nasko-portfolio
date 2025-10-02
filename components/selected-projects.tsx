import TideProject from "./projects/tide-project"
import HotjarProject from "./projects/hotjar-project"
import InsurifyProject from "./projects/insurify-project"
import SalesDeskProject from "./projects/salesdesk-project"
import CaliperProject from "./projects/caliper-project"

export default function SelectedProjects() {
  return (
    <div id="selected-projects">
      <TideProject />
      <HotjarProject />
      <InsurifyProject />
      <SalesDeskProject />
      <CaliperProject />
    </div>
  )
}
