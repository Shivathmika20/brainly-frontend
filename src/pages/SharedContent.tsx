import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from "../../config"

interface ContentItem {
    _id: string
    title: string
    link: string
    type: string
    tagofContent: string[]
}

const SharedContent = () => {
    const { sharedLink } = useParams<{ sharedLink: string }>()
    const [content, setContent] = useState<ContentItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
       
        
        const fetchContent = async () => {
            if (!sharedLink) {
                console.log('No sharedLink found, returning')
                return
            }
            
            
            try {
                setLoading(true)
                const response = await axios.get(`${BACKEND_URL}/api/share/${sharedLink}`)
                console.log('API Response:', response.data)
                setContent(response.data.content || [])
            } catch (err: any) {
                console.error('API Error:', err)
                setError(err.response?.data?.error || 'Failed to load content')
            } finally {
                setLoading(false)
            }
        }

        fetchContent()
    }, [sharedLink])

    // Conditional rendering based on different states
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <div className="text-xl text-gray-700">Loading shared content...</div>
                    <div className="text-sm text-gray-500 mt-2">Please wait while we fetch the content</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="text-6xl mb-4">❌</div>
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Content</h1>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    if (!sharedLink) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-yellow-50">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔗</div>
                    <h1 className="text-2xl font-bold text-yellow-600 mb-4">Invalid Share Link</h1>
                    <p className="text-gray-600">The share link appears to be invalid or malformed.</p>
                </div>
            </div>
        )
    }

    if (content.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="text-6xl mb-4">📭</div>
                    <h1 className="text-2xl font-bold text-gray-600 mb-4">No Content Found</h1>
                    <p className="text-gray-600 mb-4">This shared link doesn't contain any content yet.</p>
                    <div className="text-sm text-gray-500">
                        <p>Content length: {content.length}</p>
                        <p>Share link: {sharedLink}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Shared Brain</h1>
                    <p className="text-gray-600">A collection of notes, tweets, and videos</p>
                    <p className="text-sm text-gray-500 mt-2">Found {content.length} items</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.map((item) => (
                        <div key={item._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            {/* Conditional title rendering */}
                            {item.title ? (
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {item.title}
                                </h3>
                            ) : (
                                <h3 className="text-lg font-semibold text-gray-500 mb-2 italic">
                                     {item.type}
                                </h3>
                            )}
                            
                            {/* Conditional link display */}
                            {item.link && (
                                <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                                    {item.link}
                                </p>
                            )}
                            
                            
                            
                            {/* Conditional action button */}
                            {item.link ? (
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                                >
                                    {item.type === 'video' ? 'Watch Video' : 
                                     item.type === 'twitter' ? 'View Tweet' : 
                                     item.type === 'note' ? 'Read Note' : 'Visit Link'}
                                </a>
                            ) : (
                                <span className="inline-block bg-gray-300 text-gray-500 px-4 py-2 rounded-md cursor-not-allowed">
                                    No Link Available
                                </span>
                            )}
                            
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SharedContent