export const Filter = ({filter, setFilter }) => {
  return (
    <div className="filter">
        <h2>Filtar:</h2>
        <div className="filter=options">
        <p>Status:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="incomplete">Incompletas</option>
        </select>
        </div>
        <div>
            <p>Ordem alfabética:</p>
            <button>Asc</button>
            <button>Desc</button>

        </div>
    </div>
  )
}
