import {useRouter} from "next/router";

const Post = () =>{
    const router = useRouter();

    const { id } = router.query;

    return (
        <div>
            <h1>Post</h1>
            <p>Id : {id}</p>
        </div>
    )
}

export default Post;