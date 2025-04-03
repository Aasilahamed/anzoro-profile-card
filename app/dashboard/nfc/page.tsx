import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { NfcManager } from "@/components/nfc-manager"

export default function NfcPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="NFC Management" text="Generate and manage NFC links for your profile cards." />
      <NfcManager />
    </DashboardShell>
  )
}

