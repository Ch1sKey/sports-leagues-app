# Sports Leagues Application

A modern single-page application (SPA) built with React and TypeScript that displays sports leagues from around the world with filtering and search capabilities.

## Features

### Core Functionality
- **Fetch & Display Leagues**: Retrieves sports leagues from The Sports DB API
- **League Information**: Shows league name, sport type, and alternate names
- **Search Functionality**: Filter leagues by name with real-time search
- **Sport Filter**: Dropdown to filter leagues by specific sport types
- **Season Badges**: Click on any league to view its season badge
- **Response Caching**: All API responses are cached to avoid repeat calls

### Technical Features
- **Component-Based Architecture**: Modular, reusable React components
- **TypeScript**: Full type safety throughout the application
- **TanStack Query**: Efficient data fetching and caching
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: Keyboard navigation and screen reader support
- **Modern UI**: Clean, modern interface with smooth animations

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: Custom CSS with modern design principles
- **API**: The Sports DB API (https://www.thesportsdb.com/)

## API Endpoints

- **All Leagues**: `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`
- **Season Badges**: `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>`

## Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd sports-leagues-app
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── SearchBar.tsx    # Search input component
│   ├── SportFilter.tsx  # Sport filter dropdown
│   ├── LeagueCard.tsx   # Individual league display
│   └── SeasonBadgeModal.tsx # Modal for season badges
├── hooks/               # Custom React hooks
│   └── useLeagues.ts    # League data fetching hook
├── types.ts            # TypeScript type definitions
├── api.ts              # API service functions
├── App.tsx             # Main application component
├── App.css             # Application styles
└── main.tsx            # Application entry point
```

## Component Overview

### `App.tsx`
Main application component that manages state and orchestrates all other components.

### `SearchBar`
Handles text input for filtering leagues by name or alternate name.

### `SportFilter`
Dropdown component for filtering leagues by sport type.

### `LeagueCard`
Displays individual league information with click handling for season badges.

### `SeasonBadgeModal`
Modal component that shows season badge images when a league is clicked.

### `useLeagues` Hook
Custom hook that uses TanStack Query to fetch and cache league data.

## Features in Detail

### Search & Filter
- **Real-time search**: Filter leagues as you type
- **Multiple field search**: Searches both league names and alternate names
- **Sport filtering**: Filter by specific sport types
- **Results counter**: Shows filtered vs total league count

### Season Badge Display
- **Click interaction**: Click any league card to view season badge
- **Modal display**: Season badges displayed in an elegant modal
- **Error handling**: Graceful handling when badges aren't available
- **Loading states**: Loading indicators during badge fetch

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Flexible grid**: Responsive grid layout for league cards
- **Touch-friendly**: Large touch targets for mobile interaction
- **Adaptive filters**: Filter layout adapts to screen size

## Data Caching

The application uses TanStack Query for intelligent caching:
- **Stale time**: 5 minutes (data considered fresh)
- **Cache time**: 10 minutes (data kept in memory)
- **Background updates**: Automatic refetching when data becomes stale
- **Request deduplication**: Multiple requests for same data are merged

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimizations

- **Memoized filtering**: Expensive filter operations are memoized
- **Efficient re-renders**: Components only re-render when necessary
- **Image lazy loading**: Season badge images load on demand
- **Request caching**: API responses cached to reduce network calls

## Future Enhancements

- **Favorites**: Save favorite leagues
- **League Details**: More detailed league information
- **Historical Data**: View multiple seasons
- **Dark Mode**: Toggle between light and dark themes
- **Advanced Filters**: Filter by country, year, etc.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [The Sports DB](https://www.thesportsdb.com/) for providing the sports data API
- [TanStack Query](https://tanstack.com/query) for excellent data fetching capabilities
- [Vite](https://vitejs.dev/) for fast development experience 