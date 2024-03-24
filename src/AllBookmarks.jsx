

const AllBookmarks = () => {
    return (
        <div>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.slice(1, 19).map(blog => <Card key={blog.id} blog={blog}></Card>)
                }
                
            </div>
        </div>
    );
};

export default AllBookmarks;