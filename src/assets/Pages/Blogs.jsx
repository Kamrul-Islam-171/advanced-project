import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Card from "../../components/Card/Card";
import imgNotfound from '../../assets/404.jpg'
import Loading from "../../Loading";

const Blogs = () => {

    const blogs = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading') return <Loading></Loading>
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link to={`/blog/${blogs[0].id}`} rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
                        <img src={blogs[0].cover_image || imgNotfound} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs text-gray-400">{new Date(blogs[0].published_timestamp).toLocaleDateString()}</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.slice(1,19).map(blog => <Card key={blog.id} blog = {blog}></Card>)
                        }
                        
                    </div>
                  
                </div>
            </section>
        </div>
    );
};

export default Blogs;