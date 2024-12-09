import { PropsWithChildren } from "react";

/**
 * Компонент "Widget"
 */

function Widget({ children, title }: PropsWithChildren<{ title: string }>) {
    return (
        <div className="widget">
            <h4 className="widget__title">{title}</h4>
            {children}
        </div>
    );
}

export default Widget;