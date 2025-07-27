import TideAi from "./side-gigs/tide-ai"
import InnerGlow from "./side-gigs/inner-glow"
import BalanceGuru from "./side-gigs/balance-guru"
import ClarifyTools from "./side-gigs/clarify-tools"

export default function SideGigs() {
  return (
    <div id="side-gigs">
      <TideAi />
      <ClarifyTools />
      <InnerGlow />
      <BalanceGuru />
    </div>
  )
}
