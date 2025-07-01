interface SportFilterProps {
  value: string
  onChange: (value: string) => void
  sports: string[]
}

export const SportFilter = ({ value, onChange, sports }: SportFilterProps) => {
  return (
    <div className="sport-filter">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sport-select"
      >
        <option value="">All Sports</option>
        {sports.map((sport) => (
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>
    </div>
  )
} 