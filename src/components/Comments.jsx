const Comments = ({ coms }) => {
    return (
        <div className="mx-14 mt-8">
            <div className="font-french font-bold">
                COMMENTS ({coms.length})
            </div>

            {
                coms.map((comment) => {
                    return (
                        <div className="border-primary border-b-2 my-2 py-2 hover:scale-105 transition-all duration-100" key={comment._id}>
                            <div className="font-bold">
                                {comment.creator_name}
                            </div>
                            <div className="  ">
                                {comment.body}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments;