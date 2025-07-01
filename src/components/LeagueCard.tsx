import type { League } from '../types'

interface LeagueCardProps {
  league: League
  onClick: (leagueId: string) => void
}

export const LeagueCard = ({ league, onClick }: LeagueCardProps) => {
  return (
    <div 
      className="league-card"
      onClick={() => onClick(league.idLeague)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(league.idLeague)
        }
      }}
    >
      <div className="league-info">
        <h3 className="league-name">{league.strLeague}</h3>
        <p className="league-sport">{league.strSport}</p>
        {league.strLeagueAlternate && (
          <p className="league-alternate">{league.strLeagueAlternate}</p>
        )}
      </div>
    </div>
  )
} 