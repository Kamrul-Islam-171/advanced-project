import { useLoaderData, useNavigation } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import Loading from "../Loading";
import Loading2 from "../Loading2";

const Content = () => {
    const blog = useLoaderData();

    const { cover_image, reading_time_minutes, body_html, tags, id, title, published_timestamp, description, comments_count, public_reactions_count, path, url, readable_publish_date } = blog;
    const navigation = useNavigation();
    if(navigation.state === 'loading') return <Loading2></Loading2>
    return (
        <div className="mt-5">
            <div className="w-full group hover:no-underline focus:no-underline 
         border-2 border-gray-300 p-2 rounded-lg
        ">
                <img role="presentation" className="object-cover w-full rounded  bg-gray-500" src={cover_image} />
                <div className="flex flex-wrap py-6 gap-2">
                    {
                        tags.map(tag => <a key={id} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  text-gray-900">#{tag}</a>)
                    }
                </div>
                <div className="p-2 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <div className="">
                        <Markdown  rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Content;