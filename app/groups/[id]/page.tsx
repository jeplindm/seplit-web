import GroupClient from '@/components/group/group-client'
import { GroupProvider } from '@/app/context/group-context'

export default async function GroupDashboard({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative">
      <GroupProvider groupId={id}>
        <GroupClient />
      </GroupProvider>
    </div>
  )
}
