import React from "react";

const cardContent = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className="container">
            <div className="display-flex-col justify-content-center align-items-center w-100 h-100 p-4">
                <div className="card p-2 w-100">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-body">
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default cardContent;
