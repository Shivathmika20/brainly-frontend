import { useState, useEffect } from 'react'
import axios from 'axios'

export interface ContentType {
    _id: string,
    title: string,
    link: string,
    type: string,
    tagofContent: string[],
    createdAt: string | Date,
}

export interface Tags {
    _id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
}

export const useContent = () => {
    const [data, setData] = useState<ContentType[]>([])
    const [len, setLen] = useState<number>(0)
    const [tags, setTags] = useState<Tags[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchContent = async (type: string = '') => {
        setLoading(true)
        try {
            const url = type ? `http://localhost:3000/api/content?type=${type}` : 'http://localhost:3000/api/content'
            const res = await axios.get(url, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            
            setData(res.data.contents)
            console.log(res.data)
            setLen(res.data.length)
            setTags(res.data.tagsofContent)
        } catch (error: any) {
            console.error('Error fetching content:', error)
            alert(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }
    
    

    return {
        data,
        len,
        tags,
        loading,
        fetchContent
    }
}
