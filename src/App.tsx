import { useState, useMemo } from 'react'
import { useLeagues } from './hooks/useLeagues'
import { SearchBar } from './components/SearchBar'
import { SportFilter } from './components/SportFilter'
import { LeagueCard } from './components/LeagueCard'
import { SeasonBadgeModal } from './components/SeasonBadgeModal'
import type { League } from './types'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSport, setSelectedSport] = useState('')
  const [selectedLeague, setSelectedLeague] = useState<League | null>(null)

  const { data, isLoading, error } = useLeagues()

  const leagues = data?.leagues || []

  // Get unique sports for the filter dropdown
  const uniqueSports = useMemo(() => {
    const sports = leagues.map(league => league.strSport)
    return Array.from(new Set(sports)).sort()
  }, [leagues])

  // Filter leagues based on search term and selected sport
  const filteredLeagues = useMemo(() => {
    return leagues.filter(league => {
      const matchesSearch = league.strLeague.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (league.strLeagueAlternate?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
      const matchesSport = selectedSport === '' || league.strSport === selectedSport
      return matchesSearch && matchesSport
    })
  }, [leagues, searchTerm, selectedSport])

  const handleLeagueClick = (leagueId: string) => {
    const league = leagues.find(l => l.idLeague === leagueId)
    if (league) {
      setSelectedLeague(league)
    }
  }

  const handleModalClose = () => {
    setSelectedLeague(null)
  }

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">Loading sports leagues...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">Error loading sports leagues. Please try again later.</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sports Leagues</h1>
        <p>Discover sports leagues from around the world</p>
      </header>

      <div className="filters">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search leagues..."
        />
        <SportFilter
          value={selectedSport}
          onChange={setSelectedSport}
          sports={uniqueSports}
        />
      </div>

      <div className="results-info">
        <p>Showing {filteredLeagues.length} of {leagues.length} leagues</p>
      </div>

      <div className="leagues-grid">
        {filteredLeagues.map(league => (
          <LeagueCard
            key={league.idLeague}
            league={league}
            onClick={handleLeagueClick}
          />
        ))}
      </div>

      {filteredLeagues.length === 0 && (
        <div className="no-results">
          <p>No leagues found matching your criteria.</p>
        </div>
      )}

      <SeasonBadgeModal
        league={selectedLeague}
        onClose={handleModalClose}
      />
    </div>
  )
}

export default App
