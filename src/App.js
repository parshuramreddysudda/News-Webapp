import React, { useEffect, useState } from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/news.components";
import { render } from 'react-dom';
import { HuePicker } from 'react-color';
const App = () => {

  const API_KEY = ""; //place your key here

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('in');
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [news3, setNews3] = useState([]);
  const [news4, setNews4] = useState([]);
  const [news5, setNews5] = useState([]);
  const [news6, setNews6] = useState([]);
  const [theme, setTheme] = useState('standard');
  useEffect(() => {
    getNews();
  }, [search]);
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=
  const getNews = async(e) => {

    let country = search;
    const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=business&apiKey=${API_KEY}`);
    const response= await api_call.json();
    setNews(response.articles);
    
    const api_call1 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=entertainment&apiKey=${API_KEY}`);
    const response1= await api_call1.json();
    setNews1(response1.articles);
    
    const api_call2 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=general&apiKey=${API_KEY}`);
    const response2= await api_call2.json();
    setNews2(response2.articles);
    
    const api_call3 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=health&apiKey=${API_KEY}`);
    const response3= await api_call3.json();
    setNews3(response3.articles);
    
    const api_call4 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=science&apiKey=${API_KEY}`);
    const response4= await api_call4.json();
    setNews4(response4.articles);
    
    const api_call5 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=sports&apiKey=${API_KEY}`);
    const response5= await api_call5.json();
    setNews5(response5.articles);

    const api_call6 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=technology&apiKey=${API_KEY}`);
    const response6= await api_call6.json();
    setNews6(response6.articles);

    
    // const city_api_call = await fetch(`http://country.io/capital.json`);
    // const city_response= await city_api_call.json();
    // console.log(city_response);
    }
  
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getTheme = e => {
    setTheme(e.target.value);
    console.log(theme);
  };

  // const settTheme = (themes) =>{
  //   if( themes == 'standard' ) {
  //     return true;
  //   }
  //   else if( theme == 'dark') {

  //   }
  //   else if( theme == 'green') {

  //   }
  //   else if( theme == 'grey') {

  //   }
  //   else if( theme == 'red') {

  //   }
  //   else if( theme == 'purple') {

  //   }
  //   else if( theme == 'indigo') {

  //   }
  //   else {

  //   }


  // };

  const [x,setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-1600) : setX(x + 100);
  };

  const goRight = () => {
    x === -1600 ? setX(0) : setX(x - 100); 
  };

  const [x1,setX1] = useState(0)
  const goLeft1 = () => {
    x1 === 0 ? setX1(-1600) : setX1(x1 + 100);
  };

  const goRight1 = () => {
    x1 === -1600 ? setX1(0) : setX1(x1 - 100); 
  };

  const [x2,setX2] = useState(0)
  const goLeft2 = () => {
    x2 === 0 ? setX2(-1600) : setX2(x2 + 100);
  };

  const goRight2 = () => {
    x2 === -1600 ? setX2(0) : setX2(x2 - 100); 
  };

  const [x3,setX3] = useState(0)
  const goLeft3 = () => {
    x3 === 0 ? setX3(-1600) : setX3(x + 100);
  };

  const goRight3 = () => {
    x3 === -1600 ? setX3(0) : setX3(x - 100); 
  };

  const [x4,setX4] = useState(0)
  const goLeft4 = () => {
    x4 === 0 ? setX4(-1600) : setX4(x4 + 100);
  };

  const goRight4 = () => {
    x4 === -1600 ? setX4(0) : setX4(x4 - 100); 
  };

  const [x5,setX5] = useState(0)
  const goLeft5 = () => {
    x5 === 0 ? setX5(-1600) : setX5(x5 + 100);
  };

  const goRight5 = () => {
    x5 === -1600 ? setX5(0) : setX5(x - 100); 
  };

  const [x6,setX6] = useState(0);
  const goLeft6 = () => {
    x6 === 0 ? setX6(-1600) : setX6(x6 + 100);
  };

  const goRight6 = () => {
    x6 === -1600 ? setX6(0) : setX6(x6 - 100); 
  };
  const [bg,setBG] = useState('#fff');
  const onChangeComplete = (color, event) => {
    setBG(color.hex);
  }

  return (

  <div className={`${theme}` === 'standard' ? `App` : `${theme}` === 'dark' ? `dark-App` : `${theme}` === 'green' ? `green-App` : `${theme}` === 'grey' ? `grey-App` : `${theme}` === 'red' ? `red-App` : `${theme}` === 'purple' ? `purple-App` : `${theme}` === 'indigo' ? `indigo-App` : `App`}>
      <nav className={`${theme}` === 'standard' ? `navcolor` : `${theme}` === 'dark' ? `dark-navcolor` : `${theme}` === 'green' ? `green-navcolor` : `${theme}` === 'grey' ? `grey-navcolor` : `${theme}` === 'red' ? `red-navcolor` : `${theme}` === 'purple' ? `purple-navcolor` : `${theme}` === 'indigo' ? `indigo-navcolor` : `navcolor`}> 
        <div className="nav-wrapper" id="busi">
          <a href="#!" className="brand-logo left"><b>NEWS POOL</b></a>
          <select className="browser-default right" value={search} onChange={updateSearch}>
            <option>country</option>
            <option value="ar">Argentina</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgium</option>
            <option value="br">Brazil</option>
            <option value="bg">Bulgaria</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czechia</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="in">India</option>
            <option value="id">Indonesia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="kr">Korea</option>
            <option value="lv">Latvia</option>
            <option value="lt">Lithuania</option>
            <option value="my">Malaysia</option>
            <option value="mx">Mexico</option>
            <option value="ma">Morocco</option>
            <option value="nl">Netherlands</option>
            <option value="nz">Newzealand</option>
            <option value="ng">Nigeria</option>
            <option value="no">Norway</option>
            <option value="ph">Philippines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="rs">Serbia</option>
            <option value="sg">Singapore</option>
            <option value="sk">Slovakia</option>
            <option value="si">Slovenia</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="ua">Ukraine</option>
            <option value="ae">United Arab Emirates</option>
            <option value="gb">United Kingdom</option>
            <option value="us">USA</option>
            <option value="ve">Venezuela</option>
            <option value="za">South Africa</option>
          </select>
          <select className="browser-default right" value={theme} onChange={getTheme}>
                <option value="standard">Standard Theme</option>
                <option value="dark">Dark Theme</option>
                <option value="green">Green Theme</option>
                <option value="grey">Grey Theme</option>
                <option value="red">Red Theme</option>
                <option value="purple">purple Theme</option>
                <option value="indigo">Indigo theme</option>
              </select>
        </div>
      </nav>
      <div className="jumbotron">
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="business"><i class="large material-icons">business</i> BUSINESS <b className="linethru">News</b></p> 
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x}%)`}}>
              <News 
              key={index}
              title={source.title}
              image={source.urlToImage}
              description={source.description}
              url={source.url}
              content={source.content}
              author={source.author}
              time={source.publishedAt}
              name={source.source.name}
              winWidth={window.innerWidth}
              theme={theme}
              />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="entertainment"><i class="large material-icons">movie</i> ENTERTAINMENT <b className="linethru">News</b></p>
      <a name = "news1"></a>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news1.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x1}%)`}}>
          <News 
          key={index}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          name={source.source.name}
          theme={theme}
          />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft1}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight1}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="general"><i class="large material-icons">people </i> GENERAL <b className="linethru">News</b></p>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news2.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x2}%)`}}>
          <News 
          key={index}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          name={source.source.name}
          theme={theme}
          />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft2}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight2}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="health"> <i class="large material-icons" style={{color: `red`}}>local_hospital</i> HEALTH <b className="linethru">News</b></p>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news3.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x3}%)`}}>
          <News 
          key={index}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          name={source.source.name}
          theme={theme}
          />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft3}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight3}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="science"> <i class="large material-icons" style={{color: `yellow`}}>lightbulb_outline</i> SCIENCE <b className="linethru">News</b></p>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news4.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x4}%)`}}>
          <News 
          key={index}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          name={source.source.name}
          theme={theme}
          />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft4}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight4}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="sports"><i class="large material-icons">directions_run </i> SPORTS <b className="linethru">News</b></p>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news5.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x5}%)`}}>
          <News 
          key={index}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          name={source.source.name}
          theme={theme}
          />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft5}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight5}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="technology"><i class="large material-icons">phonelink </i> TECHNOLOGY <b className="linethru">News</b></p>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news6.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x6}%)`}}>
          <News 
          key={index}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          name={source.source.name}
          theme={theme}
          />
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={goLeft6}>
          <i class="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={goRight6}>
          <i class="large material-icons">chevron_right</i>
        </button>
      </div>
          <footer class={`${theme}` === 'standard' ? `navcolor` : `${theme}` === 'dark' ? `dark-navcolor` : `${theme}` === 'green' ? `green-navcolor` : `${theme}` === 'grey' ? `grey-navcolor` : `${theme}` === 'red' ? `red-navcolor` : `${theme}` === 'purple' ? `purple-navcolor` : `${theme}` === 'indigo' ? `indigo-navcolor` : `navcolor`} >
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">NEWS POOL</h5>
                <p class="grey-text text-lighten-4">Special Thanks to <b>PLUS</b></p>
              </div>
              <div class="col l4 offset-l2 s12 center">
                <div class="row">
                <ul class="col s6">
                  <li><a class="grey-text text-lighten-3 slow" href="#business">Business</a></li>
                  <li><a class="grey-text text-lighten-3 slow" href="#entertainment">Entertainment</a></li>
                  <li><a class="grey-text text-lighten-3 slow" href="#general">General</a></li>
                  <li><a class="grey-text text-lighten-3 slow" href="#health">Health</a></li>
                </ul>
                <ul class="col s6">
                  <li><a class="grey-text text-lighten-3 slow" href="#science">Science</a></li>
                  <li><a class="grey-text text-lighten-3 slow" href="#sports">Sports</a></li>
                  <li><a class="grey-text text-lighten-3 slow" href="#technology">Technology</a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyrights
            <a class="grey-text text-lighten-4 right" href="https://newsapi.org">Thanks to NEWS-API</a>
            </div>
          </div>
        </footer>
    </div>
    );


};
export default App;


{/* <div className="column">
          {/* <div class="form-group">
            <div class="col-sm-6 col-md-4 self-align-center">
              <select className="form-control" value={query} onChange={getSearch}>
                <option>category</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
           </div>
          </div>
        </div>  */}