import React from 'react'

const FilterBar = ({ categories, activeFilter, setFilter, searchTerm, setSearchTerm }) => {
    return (
        <div className="filter-bar">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="category-filters">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterBar
