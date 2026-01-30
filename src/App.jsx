import { useState } from 'react'
import Layout from './components/Layout'
import ResourceList from './components/ResourceList'
import FilterBar from './components/FilterBar'
import resourcesData from './data/resources.json'

function App() {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', ...new Set(resourcesData.map(r => r.category))]

  const filteredResources = resourcesData.filter(resource => {
    const matchesCategory = filter === 'All' || resource.category === filter
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Layout>
      <div className="container">
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Jenkintown School District Archive
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)' }}>
            An unofficial, community-led archive of important documents, policies, and communications.
            Use the filters below to find what you need.
          </p>
        </div>

        <FilterBar 
          categories={categories} 
          activeFilter={filter} 
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ResourceList resources={filteredResources} />
      </div>
    </Layout>
  )
}

export default App
