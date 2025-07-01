import { useQuery } from '@tanstack/react-query'
import { fetchAllLeagues } from '../api'

export const useLeagues = () => {
  return useQuery({
    queryKey: ['leagues'],
    queryFn: fetchAllLeagues,
  })
} 