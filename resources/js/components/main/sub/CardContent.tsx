import React from "react";

const cardContent = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className="container">
            <div className="display-flex-col justify-content-center align-items-center w-100 h-100 p-4">
                <div className="card w-100">
                    <div className="card-header">
                        <h2 className="p-4 card-title fw-bold text-decoration-underline">{props.title}</h2>
                    </div>
                    <div className="card-body">
                        {/*<h2 className="p-4 card-title fw-bold text-decoration-underline">{props.subtitle}</h2>*/}
                        <h4 className="px-4 card-text">
                            {props.content}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardContent;
