import React from "react";
import "./news.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const News = ({title,image,description,url,content,author,time,name,winWidth,city,theme}) => {
    let newText = time.split('T');
    let newText1 = newText[1].split('Z');
    return(
        <div className="row">
                <div className="col s3">
                    <a href={url} class="button button2">
                    <div className="polaroid card">
                    <div className={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>  
                            {image? <img src={image} class="img-fluid" alt="Responsive" /> : <div className="pic center-align"><i class="large material-icons">image</i></div>}
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col s1">
                                    <div className="container">
                                        <i class="small material-icons">account_circle</i>  
                                    </div>
                                    <div className="container">
                                        <h6><small>{name}</small></h6>
                                    </div>
                                </div>
                                <div className="col s11">
                                    {title? <p class="overflow-ellipsis">{title}</p> : null}<br/>
                                    {author ? <h6 class="overflow-ellipsis">-{author}</h6> : <h6>-unknown author</h6>}
                                </div>
                            </div>
                            {time? <h6 class="time"><small><i class="tiny material-icons">date_range</i>{newText[0]} . <i class="tiny material-icons">access_time</i>{newText1[0]}</small></h6> : null}
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            );
}


export default News;
 


{/* <div className="container">
                <div className="row">
                    <div className="column">
                    {author? <h6><b>Author: {author}</b><br/> </h6> : null}<br/>
                    {time? <h6><small><b>Date: </b>{newText[0]}, <b>Time: </b>{newText1[0]}</small></h6> : null}
                    </div>
                    <div className="column">
                            
                    </div>
                </div>
            </div> */}

{/* <a href={url} class="button button2">
            <p><b>{description}</b></p> 
            </a>
                {content? <p name="content" alt="Sorry, no content">{content}</p> : null} */}

                // {title? <b>{title}</b> : null}


                // <div className="row">
                //     <div className="col s1">
                //         <div className="container">
                //         <div className="row">
                //             <div className="col s6">
                //                 <div className="container">
                //                     <i class="small material-icons">account_circle</i>
                //                 </div>
                //                 <div className="col s6 center-align">
                //                     <div className="container">
                //                         <h6><small>{name}</small></h6>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="col s11">
                //         {title? <b>{title}</b> : null}
                //         <h6><br/>{author}</h6>
                //         {time? <h6><small><b>Date: </b>{newText[0]}, <b>Time: </b>{newText1[0]}</small></h6> : null}
                //     </div>
                // </div>