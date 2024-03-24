
import {

    createBrowserRouter,
} from "react-router-dom";
import MainComponents from './../Layouts/MainComponents';
import Home from './../assets/Pages/Home';
import Blogs from "../assets/Pages/Blogs";
import Bookmarks from "../assets/Pages/Bookmarks";
import CardDetails from "../components/CardDetails";
import Content from "../components/Content";
import Author from "../components/Author";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainComponents></MainComponents>,
        
        children: [
            {
                // path: "/",
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path: "/bookmarks",
                element: <Bookmarks></Bookmarks>,
            },
            {
                path: '/blog/:id',
                element: <CardDetails />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children:[
                    {
                        index : true,
                        element:<Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path:'author',
                        element:<Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                        
                    }

                ]
            }
        ]
    },

]);