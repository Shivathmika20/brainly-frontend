import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import axios from 'axios'
import {icons} from '../data/sidebarItems'
import { Share2,Trash2, ExternalLink, FileText, Play, Image as ImageIcon } from 'lucide-react'
import { useContent, type ContentType, type Tags} from '../hooks/useContent'
import { useEffect, useState } from "react"


// import { useNavigate } from 'react-router-dom'


export interface Icons{
    icon:React.ReactNode;
    type:string;
}

// Utility functions for content detection
const detectContentType = (url: string) => {
    if (url.includes('twitter.com') || url.includes('x.com')) {
        return 'tweet';
    } else if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')) {
        return 'video';
    } else if (url.includes('.pdf') || url.includes('.doc') || url.includes('.docx') || url.includes('.txt')) {
        return 'document';
    } else if (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png') || url.includes('.gif') || url.includes('.webp')) {
        return 'image';
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        return 'webpage';
    }
    return 'link';
};

const extractYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
};

const extractVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
};

// Link preview component for web pages
const LinkPreviewComponent = ({ url }: { url: string }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPreview = async () => {
            try {
                // Simulate loading time
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (error) {
                console.error('Error fetching preview:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPreview();
    }, [url]);

    if (loading) {
        return (
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Loading preview...</span>
                </div>
                <div className="border rounded-lg h-32 bg-gray-50 animate-pulse flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20 mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <ExternalLink className="w-4 h-4" />
                <span>Web Page</span>
            </div>
            <div className="border rounded-lg h-32 bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <ExternalLink className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Web Page</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                        Visit Page →
                    </a>
                </div>
            </div>
        </div>
    );
};


// Integrated preview components
const ContentPreview = ({ url }: { url: string }) => {
    if (!url || url.trim() === '') {
        return (
            <div className="text-sm text-gray-500 italic">
                No preview available
            </div>
        );
    }

    const contentType = detectContentType(url);

    switch (contentType) {
        case 'tweet':
            return (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            X
                        </div>
                        <span>Twitter Post</span>
                    </div>
                    <div className="border rounded-lg h-32 bg-gray-50 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                                X
                            </div>
                            <p className="text-sm text-gray-600">Twitter Post</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                View Tweet →
                            </a>
                        </div>
                    </div>
                </div>
            );

        case 'video':
            const youtubeId = extractYouTubeVideoId(url);
            const vimeoId = extractVimeoId(url);
            
            if (youtubeId) {
                return (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-red-600 mb-2">
                            <Play className="w-4 h-4" />
                            <span>YouTube Video</span>
                        </div>
                        <div className="border rounded-lg h-32 bg-red-50 relative overflow-hidden">
                            <img
                                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                                alt="YouTube Video Thumbnail"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                                }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                <div className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors">
                                    <Play className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                                <a 
                                    href={url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded hover:bg-opacity-80 transition-colors"
                                >
                                    Watch on YouTube →
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
            
            if (vimeoId) {
                return (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-red-600 mb-2">
                            <Play className="w-4 h-4" />
                            <span>Vimeo Video</span>
                        </div>
                        <div className="border rounded-lg h-32 bg-red-50 flex items-center justify-center">
                            <div className="text-center">
                                <Play className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Vimeo Video</p>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                    Watch Video →
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
            
            // Fallback for other video URLs
            return (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-red-600 mb-2">
                        <Play className="w-4 h-4" />
                        <span>Video</span>
                    </div>
                    <div className="border rounded-lg h-32 bg-red-50 flex items-center justify-center">
                        <div className="text-center">
                            <Play className="w-8 h-8 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Video</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                Watch Video →
                            </a>
                        </div>
                    </div>
                </div>
            );

        case 'document':
            const isPdf = url.includes('.pdf');
            const isText = url.includes('.txt');
            const isDoc = url.includes('.doc') || url.includes('.docx');
            
            if (isPdf) {
                return (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-red-600 mb-2">
                            <FileText className="w-4 h-4" />
                            <span>PDF Document</span>
                        </div>
                        <div className="border rounded-lg h-32 bg-red-50 flex items-center justify-center">
                            <div className="text-center">
                                <FileText className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">PDF Document</p>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                    View PDF →
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
            
            if (isText) {
                return (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                            <FileText className="w-4 h-4" />
                            <span>Text Document</span>
                        </div>
                        <div className="border rounded-lg h-32 bg-blue-50 flex items-center justify-center">
                            <div className="text-center">
                                <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Text Document</p>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                    View Text →
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
            
            if (isDoc) {
                return (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                            <FileText className="w-4 h-4" />
                            <span>Word Document</span>
                        </div>
                        <div className="border rounded-lg h-32 bg-blue-50 flex items-center justify-center">
                            <div className="text-center">
                                <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Word Document</p>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                    Download →
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
            
            // Fallback for other document types
            return (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <FileText className="w-4 h-4" />
                        <span>Document</span>
                    </div>
                    <div className="border rounded-lg h-32 bg-gray-50 flex items-center justify-center">
                        <div className="text-center">
                            <FileText className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Document</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                Download →
                            </a>
                        </div>
                    </div>
                </div>
            );

        case 'image':
            return (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                        <ImageIcon className="w-4 h-4" />
                        <span>Image</span>
                    </div>
                    <div className="border rounded-lg h-32 bg-green-50 flex items-center justify-center">
                        <div className="text-center">
                            <ImageIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Image</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                View Image →
                            </a>
                        </div>
                    </div>
                </div>
            );

        case 'webpage':
            return <LinkPreviewComponent url={url} />;

        default:
            return (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>External Link</span>
                    </div>
                    <div className="border rounded-lg h-32 bg-gray-50 flex items-center justify-center">
                        <div className="text-center">
                            <ExternalLink className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">External Link</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                Visit Link →
                            </a>
                        </div>
                    </div>
                </div>
            );
    }
};



const Content = ({type}:{type?:string}) => {
    const { data, len, tags, loading, fetchContent } = useContent()

    useEffect(() => {
        fetchContent(type  || ""); // fetch content for the selected type
      }, [type || ""]);
    
    const handleDelete = async (id: string) => {
        console.log(id)
        try{
            await axios.delete(`http://localhost:3000/api/content/${id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
        } catch (error: any) {
            console.error('Error deleting content:', error)
            alert(error.response.data.error)
        }
    }

    
    const getIconForType = (type: string) => {
        const iconObj = icons.find((i: Icons) => i.type === type);
        return iconObj?.icon || null
      };
  
    return (
        <div className="p-4">
            {loading ? (
                <div>Loading...</div>
            ) : len > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {data.map((item: ContentType, index: number) => (
                        <Card key={index} className="w-full">
                            <CardHeader>
                            <div className="flex items-center gap-2">
                            {getIconForType(item.type)}
                            <span className="truncate">{item.title}</span>
                            </div>
                                <CardAction>
                                    <div className='flex items-center gap-2'>
                                        <a href={item.link} target="_blank">
                                        <Share2 strokeWidth={1.5} size={20} className="cursor-pointer text-purple-600" />

                                        </a>
                                        <Trash2 strokeWidth={1.5} size={20} className="cursor-pointer text-purple-600" onClick={() => handleDelete(item._id)} />
                                    </div>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <ContentPreview url={item.link} />
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {item.tagofContent.map((tagId: string, tagIndex: number) => {
                                        const tag = tags.find((t: Tags) => t._id === tagId);
                                        return tag ? (
                                            <span 
                                                key={tagIndex}
                                                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                                            >
                                                {tag.title}
                                            </span>
                                        ) : null;
                                    })}
                                    
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-8">No content found</div>
            )}
        </div>
    )
}

export default Content;