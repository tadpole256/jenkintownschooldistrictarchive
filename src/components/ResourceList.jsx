import React from 'react'
import ResourceCard from './ResourceCard'

const ResourceList = ({ resources }) => {
    if (resources.length === 0) {
        return (
            <div className="empty-state">
                <p>No documents found matching your criteria.</p>
            </div>
        )
    }

    return (
        <div className="resource-grid">
            {resources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
            ))}
        </div>
    )
}

export default ResourceList
