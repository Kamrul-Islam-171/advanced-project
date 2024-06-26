import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { DeleteBookmark, getLocalData } from "../../utilities/localdata";
import Empty from "./Empty";



const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        const data = getLocalData();
        setBlogs(data);
    },[blogs])

    const handleDlete = (id) => {
        DeleteBookmark(id);
    }

    if(blogs.length == 0) {
        return <Empty msg = {'No bookmarks added!'} address={`blogs`}></Empty>
    }
    return (
        <div>
            <div>
                <div className="grid px-4 mt-10 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map(blog => <Card handleDlete = {handleDlete} deletable = {true} key={blog.id} blog={blog}></Card>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Bookmarks;