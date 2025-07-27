import TideProject from "./projects/tide-project"
import HotjarProject from "./projects/hotjar-project"
import InsurifyProject from "./projects/insurify-project"
import SalesDeskProject from "./projects/salesdesk-project"

export default function SelectedProjects() {
  return (
    <div id="selected-projects">
      <TideProject />
      <HotjarProject />
      <InsurifyProject />
      <SalesDeskProject />
    </div>
  )
}
