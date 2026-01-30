import React from 'react'

const ResourceCard = ({ resource }) => {
    const getIcon = (type) => {
        // Simple logic to return an emoji or icon based on source/category
        if (resource.source === 'Google Drive') return '📂';
        if (resource.source === 'Official Site') return '🏛️';
        if (resource.source === 'BoardDocs') return '📝';
        return '📄';
    }

    return (
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="card-icon">{getIcon(resource.source)}</div>
            <div className="card-content">
                <span className="card-category">{resource.category}</span>
                <h3 className="card-title">{resource.title}</h3>
                <div className="card-meta">
                    {resource.date && <span className="card-date">{resource.date}</span>}
                    <span className="card-source">{resource.source}</span>
                </div>
            </div>
        </a>
    )
}

export default ResourceCard
