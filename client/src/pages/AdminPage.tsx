import { useEffect, useState } from 'react'
import { Eye, Calendar, Globe, Monitor } from 'lucide-react'

type Visitor = {
  _id: string
  ip: string
  userAgent: string
  path: string
  createdAt: string
  uniqueKey: string
}

const API = import.meta.env.VITE_API_URL || 'http://localhost:80'

export function AdminPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ totalEvents: 0, uniqueVisitors: 0 })

  useEffect(() => {
    fetchVisitorDetails()
    fetchStats()
  }, [])

  const fetchVisitorDetails = async () => {
    try {
      const response = await fetch(`${API}/api/visitors/details?limit=100`)
      const data = await response.json()
      if (data.ok) {
        setVisitors(data.visitors)
      }
    } catch (error) {
      console.error('Failed to fetch visitor details:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API}/api/visitors/stats`)
      const data = await response.json()
      if (data.ok) {
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }

  const getBrowserInfo = (userAgent: string) => {
    if (userAgent.includes('Chrome')) return 'Chrome'
    if (userAgent.includes('Firefox')) return 'Firefox'
    if (userAgent.includes('Safari')) return 'Safari'
    if (userAgent.includes('Edge')) return 'Edge'
    return 'Unknown'
  }

  const getDeviceInfo = (userAgent: string) => {
    if (userAgent.includes('Mobile')) return 'Mobile'
    if (userAgent.includes('Tablet')) return 'Tablet'
    return 'Desktop'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[--color-netflix-dark] flex items-center justify-center">
        <div className="text-white text-xl">Loading visitor data...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[--color-netflix-dark] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Visitor Analytics</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Eye className="text-[--color-netflix-red]" size={24} />
                <div>
                  <div className="text-2xl font-bold text-white">{stats.uniqueVisitors.toLocaleString()}</div>
                  <div className="text-gray-400">Unique Visitors</div>
                </div>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Globe className="text-[--color-netflix-red]" size={24} />
                <div>
                  <div className="text-2xl font-bold text-white">{stats.totalEvents.toLocaleString()}</div>
                  <div className="text-gray-400">Total Page Views</div>
                </div>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Monitor className="text-[--color-netflix-red]" size={24} />
                <div>
                  <div className="text-2xl font-bold text-white">{visitors.length}</div>
                  <div className="text-gray-400">Recent Visits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Visitors</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4">IP Address</th>
                  <th className="text-left py-3 px-4">Browser</th>
                  <th className="text-left py-3 px-4">Device</th>
                  <th className="text-left py-3 px-4">Page</th>
                  <th className="text-left py-3 px-4">Visit Time</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor) => (
                  <tr key={visitor._id} className="border-b border-gray-800 hover:bg-white/5">
                    <td className="py-3 px-4 font-mono text-sm">{visitor.ip}</td>
                    <td className="py-3 px-4">{getBrowserInfo(visitor.userAgent)}</td>
                    <td className="py-3 px-4">{getDeviceInfo(visitor.userAgent)}</td>
                    <td className="py-3 px-4">{visitor.path || '/'}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        {new Date(visitor.createdAt).toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
