import "../scss/_mainView.scss";

function MainView(props) {
    return (
        <>
           <div className="{props.clName}">
               <img src={props.mainImg} alt="MainImg"/>

               <div className="mainView-text">
                   <h1>{props.title}</h1>
                   <p>{props.text}</p>
                   <a href={props.url} className={props.btnMainView}>{props.btnText}</a>
               </div>
           </div>
        </>
    )
}


export default MainView;
