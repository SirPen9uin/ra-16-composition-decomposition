import Widget from "./Widget.tsx";

/**
 * Компонент "Widgets"
 */

function Widgets() {
    return (
        <div className="widgets">
            <Widget title="Название виджета 1">
                <div>Текст виджета 1</div>
            </Widget>
            <Widget title="Название виджета 2">
                <div>Текст виджета 2</div>
            </Widget>
            <Widget title="Название виджета 3">
                <div>Текст виджета 3</div>
            </Widget>
        </div>
    );
}

export default Widgets;