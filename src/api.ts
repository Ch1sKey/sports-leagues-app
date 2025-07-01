import type { LeaguesResponse, SeasonsResponse } from './types'

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3'

export const fetchAllLeagues = async (): Promise<LeaguesResponse> => {
  const response = await fetch(`${BASE_URL}/all_leagues.php`)
  if (!response.ok) {
    throw new Error('Failed to fetch leagues')
  }
  return response.json()
}

export const fetchSeasonBadge = async (leagueId: string): Promise<SeasonsResponse> => {
  const response = await fetch(`${BASE_URL}/search_all_seasons.php?badge=1&id=${leagueId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch season badge')
  }
  return response.json()
} 