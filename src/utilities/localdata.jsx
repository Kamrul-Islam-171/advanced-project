
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';
export const getLocalData = () => {

    const data = localStorage.getItem('bookmark');
    if(data) {
        return JSON.parse(data);
    }
    return [];
}

export const bookMarksData = blog => {
    const data = getLocalData();
    const exist = data.find(item => item.id === blog.id);
    if(!exist) {
        data.push(blog);
        localStorage.setItem('bookmark', JSON.stringify(data));
        toast.success('Successfully Bookmarked!')

    }
    else {
         toast.error('Already Bookmarked!');
    }
}

export const DeleteBookmark = (id) => {
    const data = getLocalData();
    const remaining = data.filter(item => item.id !== id);
    localStorage.setItem('bookmark', JSON.stringify(remaining));
    toast.success('Successfully Bookmark deleted!')
}
