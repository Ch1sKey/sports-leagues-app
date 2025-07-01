import { useQuery } from '@tanstack/react-query'
import { fetchSeasonBadge } from '../api'
import type { League } from '../types'

interface SeasonBadgeModalProps {
  league: League | null
  onClose: () => void
}

export const SeasonBadgeModal = ({ league, onClose }: SeasonBadgeModalProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['seasonBadge', league?.idLeague],
    queryFn: () => fetchSeasonBadge(league!.idLeague),
    enabled: !!league,
  })

  if (!league) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const season = data?.seasons?.[0]

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{league.strLeague}</h2>
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          {isLoading && <p>Loading season badge...</p>}
          {error && <p>Error loading season badge</p>}
          {season?.strBadge && (
            <div className="season-badge">
              <img 
                src={season.strBadge} 
                alt={`${league.strLeague} season badge`}
                className="badge-image"
              />
              <p className="season-name">{season.strSeason}</p>
            </div>
          )}
          {data && !season?.strBadge && (
            <p>No season badge available for this league.</p>
          )}
        </div>
      </div>
    </div>
  )
} 