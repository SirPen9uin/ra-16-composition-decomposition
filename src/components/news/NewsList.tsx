import News from "./News.tsx";

/**
 * Компонент "NewsList"
 */

function NewsList() {
    return (
        <div className="news-list">
            <News>News 1</News>
            <News>News 2</News>
            <News>News 3</News>
        </div>
    );
}

export default NewsList;