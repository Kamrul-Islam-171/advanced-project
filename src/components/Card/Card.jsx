import { Link } from "react-router-dom";


const Card = ({ blog, deletable, handleDlete }) => {
    const { cover_image, id, title, published_timestamp, description } = blog;
   
    return (
        <div className="max-w-lg mx-auto group hover:no-underline focus:no-underline relative bg-gray-900
        hover:scale-105 transition border-2 border-primary hover:border-secondary rounded-lg border-opacity-30
        ">
            <Link to={`/blog/${id}`} >
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_timestamp).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && <div onClick={()=>handleDlete(id)} className="text-white p-6 bg-red-400 absolute rounded-full -top-10 -right-10 cursor-pointer">delete</div> }
        </div>
    );
};

export default Card;