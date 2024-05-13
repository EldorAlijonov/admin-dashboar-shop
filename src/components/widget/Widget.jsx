import "./widget.scss";

const Widget = (props) => {
    const { title, count } = props
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">
                    {count} 
                </span>
                <span className="link">data</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <div />
                    {60} %
                </div>
                <span>icon</span>
            </div>
        </div>
    )
};

export default Widget;
