import { PropsWithChildren } from "react";

/**
* Компонент "News" 
*/

function News({ children }: PropsWithChildren) {
    return <div className="news">{children}</div>;
}

export default News;