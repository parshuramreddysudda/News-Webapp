import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import "./components/weather-icons.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import News from "./components/news.components";
import Weather from "./components/weather.components";


export default function App() {
  const [theme, setTheme] = useState('standard');
  const getTheme = e => {
    setTheme(e.target.value);
    console.log(theme);
  };
  return (
    <div className={`${theme}` === 'standard' ? `App` : `${theme}` === 'dark' ? `dark-App` : `${theme}` === 'green' ? `green-App` : `${theme}` === 'grey' ? `grey-App` : `${theme}` === 'red' ? `red-App` : `${theme}` === 'purple' ? `purple-App` : `${theme}` === 'indigo' ? `indigo-App` : `App`}>

      <nav className={`${theme}` === 'standard' ? `navcolor` : `${theme}` === 'dark' ? `dark-navcolor` : `${theme}` === 'green' ? `green-navcolor` : `${theme}` === 'grey' ? `grey-navcolor` : `${theme}` === 'red' ? `red-navcolor` : `${theme}` === 'purple' ? `purple-navcolor` : `${theme}` === 'indigo' ? `indigo-navcolor` : `navcolor`}>
        <div className="nav-wrapper" id="busi">
          <a href="#!" className="brand-logo left"><b>NEWS POOL</b></a>

          <select className="browser-default theme-tag right" value={theme} onChange={getTheme}>
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
      <Router>
        <div className={`${theme}` === 'standard' ? `App` : `${theme}` === 'dark' ? `dark-App` : `${theme}` === 'green' ? `green-App` : `${theme}` === 'grey' ? `grey-App` : `${theme}` === 'red' ? `red-App` : `${theme}` === 'purple' ? `purple-App` : `${theme}` === 'indigo' ? `indigo-App` : `App`}>
          <div className="row">
            <div className="col m4 center">
              <div className="card">
                <div className={`${theme}` === 'standard' ? `stan-indexcard` : `${theme}` === 'dark' ? `dark-indexcard` : `${theme}` === 'green' ? `green-indexcard` : `${theme}` === 'grey' ? `grey-indexcard` : `${theme}` === 'red' ? `red-indexcard` : `${theme}` === 'purple' ? `purple-indexcard` : `${theme}` === 'indigo' ? `indigo-indexcard` : `stan-indexcard`}>
                  <div className="card-content white-text">
                    <span className="card-title"><i className="large material-icons">home</i><p className="white-text"><b>Current News</b><br /> (search with specific country).</p></span>
                  </div>
                  <div className="card-action">
                    <li>
                      <Link to="/">
                        Current News
                    </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="col m4 center">
              <div className="card">
                <div className={`${theme}` === 'standard' ? `stan-indexcard` : `${theme}` === 'dark' ? `dark-indexcard` : `${theme}` === 'green' ? `green-indexcard` : `${theme}` === 'grey' ? `grey-indexcard` : `${theme}` === 'red' ? `red-indexcard` : `${theme}` === 'purple' ? `purple-indexcard` : `${theme}` === 'indigo' ? `indigo-indexcard` : `stan-indexcard`}>
                  <div className="card-content white-text">
                    <span className="card-title"><i className="large material-icons">search</i><p className="white-text"><b>News Search</b><br /> (search with specific keyword)</p></span>
                  </div>
                  <div className="card-action">
                    <li>
                      <Link to="/about">News Search</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col m4 center">
              <div className="card">
                <div className={`${theme}` === 'standard' ? `stan-indexcard` : `${theme}` === 'dark' ? `dark-indexcard` : `${theme}` === 'green' ? `green-indexcard` : `${theme}` === 'grey' ? `grey-indexcard` : `${theme}` === 'red' ? `red-indexcard` : `${theme}` === 'purple' ? `purple-indexcard` : `${theme}` === 'indigo' ? `indigo-indexcard` : `stan-indexcard`}>
                  <div className="card-content white-text">
                    <span className="card-title"><i className="large material-icons">cloud</i><p className="white-text"><b>Weather News</b><br />(get the weather of specific City).</p></span>
                  </div>
                  <div className="card-action">
                    <li>
                      <Link to="/dashboard">Weather News</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home
              theme={theme}
            />
          </Route>
          <Route path="/about">
            <About
              theme={theme}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              theme={theme}
            />
          </Route>
        </Switch>
      </Router>
      <footer id="footer" className={`${theme}` === 'standard' ? `navcolor` : `${theme}` === 'dark' ? `dark-navcolor` : `${theme}` === 'green' ? `green-navcolor` : `${theme}` === 'grey' ? `grey-navcolor` : `${theme}` === 'red' ? `red-navcolor` : `${theme}` === 'purple' ? `purple-navcolor` : `${theme}` === 'indigo' ? `indigo-navcolor` : `navcolor`} >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">NEWS POOL</h5>
              <p className="grey-text text-lighten-4">Special Thanks to <b>PLUS</b></p>
            </div>
            <div className="col l4 offset-l2 s12 center">
              <div className="row">
                <ul className="col s6">
                  <li><a className="grey-text text-lighten-3 slow" href="#business">Business</a></li>
                  <li><a className="grey-text text-lighten-3 slow" href="#entertainment">Entertainment</a></li>
                  <li><a className="grey-text text-lighten-3 slow" href="#general">General</a></li>
                  <li><a className="grey-text text-lighten-3 slow" href="#health">Health</a></li>
                </ul>
                <ul className="col s6">
                  <li><a className="grey-text text-lighten-3 slow" href="#science">Science</a></li>
                  <li><a className="grey-text text-lighten-3 slow" href="#sports">Sports</a></li>
                  <li><a className="grey-text text-lighten-3 slow" href="#technology">Technology</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyrights
            <a className="grey-text text-lighten-4 right" href="https://newsapi.org">Thanks to NEWS-API</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Home = ({ theme }) => {

  let newsno = 1;
  const API_KEY = "66d4965851db4b4b9300f15d13443cfe"; //place your key here
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('in');
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [news3, setNews3] = useState([]);
  const [news4, setNews4] = useState([]);
  const [news5, setNews5] = useState([]);
  const [news6, setNews6] = useState([]);
  const [cap, setCap] = useState('delhi');
  const [results, setResults] = useState();
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  const [display6, setDisplay6] = useState(false);
  const [x, setX] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0)
  const [x3, setX3] = useState(0)
  const [x4, setX4] = useState(0)
  const [x5, setX5] = useState(0)
  const [x6, setX6] = useState(0);

  useEffect(() => {
    getNews();
  }, [search]);
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=
  const getNews = async (e) => {

    if (search) {
      const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=80&category=business&apiKey=${API_KEY}`);
      const response = await api_call.json();
      setNews(response.articles);

      // const api_call1 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=80&category=entertainment&apiKey=${API_KEY}`);
      // const response1= await api_call1.json();
      // setNews1(response1.articles);

      // const api_call2 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=40&category=general&apiKey=${API_KEY}`);
      // const response2= await api_call2.json();
      // setNews2(response2.articles);

      // const api_call3 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=80&category=health&apiKey=${API_KEY}`);
      // const response3= await api_call3.json();
      // setNews3(response3.articles);

      // const api_call4 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=80&category=science&apiKey=${API_KEY}`);
      // const response4= await api_call4.json();
      // setNews4(response4.articles);

      // const api_call5 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=80&category=sports&apiKey=${API_KEY}`);
      // const response5= await api_call5.json();
      // setNews5(response5.articles);

      // const api_call6 = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&pageSize=80&category=technology&apiKey=${API_KEY}`);
      // const response6= await api_call6.json();
      // setNews6(response6.articles);
    }
    // const city_api_call = await fetch(`http://country.io/capital.json`);
    // const city_response= await city_api_call.json();
    // console.log(city_response);
  }



  const updateSearch = e => {
    setSearch(e.target.value);
    setCap(e.target.name);
    console.log(cap);
  };

  const [newsItem, setNewsitem] = useState();
  const [name, setName] = useState();
  const [imgurl, setImgurl] = useState();
  const [description, setDescription] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const [srcurl, setsrcUrl] = useState();
  const [fulldate, setFulldate] = useState();
  const [contTime, setcontTime] = useState();

  const containerData = (source) => {
    setName(source.title);
    setImgurl(source.urlToImage);
    setDescription(source.description);
    setContent(source.content);
    setAuthor(source.author);
    setsrcUrl(source.url);
  }

  const setPubdate = (time) => {
    let newText = time.split('T');
    let newText2 = newText[0].split('-');
    return newText2[2];
  }

  const setPubyear = (time) => {
    let newText = time.split('T');
    let newText2 = newText[0].split('-');
    return newText2[0];
  }

  const setPubmonth = (time) => {
    let newText = time.split('T');
    let newText2 = newText[0].split('-');
    switch (newText2[1]) {
      case '01':
        newText2[1] = "Jan";
        break;
      case '02':
        newText2[1] = "Feb";
        break;
      case '03':
        newText2[1] = "Mar";
        break;
      case '04':
        newText2[1] = "Apr";
        break;
      case '05':
        newText2[1] = "May";
        break;
      case '06':
        newText2[1] = "Jun";
        break;
      case '07':
        newText2[1] = "Jul";
        break;
      case '08':
        newText2[1] = "Aug";
        break;
      case '09':
        newText2[1] = "Sep";
        break;
      case '10':
        newText2[1] = "Oct";
        break;
      case '11':
        newText2[1] = "Nov";
        break;
      case '12':
        newText2[1] = "Dec";
        break;
    }
    return newText2[1];
  }

  const setPubtime = (time) => {
    let newText = time.split('T');
    let newText1 = newText[1].split('Z')
    let newText2 = newText1[0].split(':');
    if (newText2[0] > 12) {
      newText2[0] = parseInt(newText2[0]) - 12;
      return (newText2[0] + ":" + newText2[1] + " PM");
    }
    else {
      return (newText2[0] + ":" + newText2[1] + " AM");
    }
  }


  const getfulldate = (time) => {
    let newText = time.split('T');
    let newText1 = newText[1].split('Z')
    let newText2 = newText[0].split('-');
    let newText3 = newText1[0].split(':');
    if (newText3[0] > 12) {
      newText3[0] = parseInt(newText3[0]) - 12;
      setcontTime(newText3[0] + ":" + newText3[1] + " PM.");
    }
    else {
      setcontTime(newText3[0] + ":" + newText3[1] + " AM.");
    }

    switch (newText2[1]) {
      case '01':
        newText2[1] = "Jan";
        break;
      case '02':
        newText2[1] = "Feb";
        break;
      case '03':
        newText2[1] = "Mar";
        break;
      case '04':
        newText2[1] = "Apr";
        break;
      case '05':
        newText2[1] = "May";
        break;
      case '06':
        newText2[1] = "Jun";
        break;
      case '07':
        newText2[1] = "Jul";
        break;
      case '08':
        newText2[1] = "Aug";
        break;
      case '09':
        newText2[1] = "Sep";
        break;
      case '10':
        newText2[1] = "Oct";
        break;
      case '11':
        newText2[1] = "Nov";
        break;
      case '12':
        newText2[1] = "Dec";
        break;
    }
    setFulldate(newText2[1] + " " + newText2[2] + "," + newText2[0]);
  }


  return (


    <div className={`${theme}` === 'standard' ? `App` : `${theme}` === 'dark' ? `dark-App` : `${theme}` === 'green' ? `green-App` : `${theme}` === 'grey' ? `grey-App` : `${theme}` === 'red' ? `red-App` : `${theme}` === 'purple' ? `purple-App` : `${theme}` === 'indigo' ? `indigo-App` : `App`}>
      <div className={window.innerWidth > 790 ? `sidenav` : `sidenav`} id="Sidenav">
        <a href="#" id="about">About</a>
        <a href="#" id="blog">Blog</a>
        <a href="#" id="projects">Projects</a>
        <a href="#" id="contact">Contact</a>
      </div>
      <div className="row">
        <div className="col s6">

        </div>
        <div className="col s6">

          <select className="browser-default country-tag right" value={search} onChange={updateSearch}>
            <option >country</option>
            <option value="ar" name="Buenos Aires">Argentina</option>
            <option value="au" name="Canberra">Australia</option>
            <option value="at" name="Vienna">Austria</option>
            <option value="be" name="Brussels">Belgium</option>
            <option value="br" name="Brasilia">Brazil</option>
            <option value="bg" name="Sofia">Bulgaria</option>
            <option value="ca" name="Ottawa">Canada</option>
            <option value="cn" name="Beijing">China</option>
            <option value="co" name="Bogotá">Colombia</option>
            <option value="cu" name="Havana">Cuba</option>
            <option value="cz" name="Prague">Czechia</option>
            <option value="eg" name="Cairo">Egypt</option>
            <option value="fr" name="Paris">France</option>
            <option value="de" name="Berlin">Germany</option>
            <option value="gr" name="Athens">Greece</option>
            <option value="hk" name="Kowloon">Hong Kong</option>
            <option value="hu" name="Budapest">Hungary</option>
            <option value="in" name="Delhi">India</option>
            <option value="id" name="Jakarta">Indonesia</option>
            <option value="ie" name="Dublin">Ireland</option>
            <option value="il" name="Jerusalem">Israel</option>
            <option value="it" name="Rome">Italy</option>
            <option value="jp" name="Tokyo">Japan</option>
            <option value="kr" name="Seoul">Korea</option>
            <option value="lv" name="Riga">Latvia</option>
            <option value="lt" name="Vilnius">Lithuania</option>
            <option value="my" name="Kuala Lumpur">Malaysia</option>
            <option value="mx" name="Mexico City">Mexico</option>
            <option value="ma" name="Rabat">Morocco</option>
            <option value="nl" name="Amsterdam">Netherlands</option>
            <option value="nz" name="Wellington">Newzealand</option>
            <option value="ng" name="Abuja">Nigeria</option>
            <option value="no" name="Oslo">Norway</option>
            <option value="ph" name="Manila">Philippines</option>
            <option value="pl" name="Warsaw">Poland</option>
            <option value="pt" name="Lisbon">Portugal</option>
            <option value="ro" name="Bucharest">Romania</option>
            <option value="ru" name="Moscow">Russia</option>
            <option value="sa" name="Riyadh">Saudi Arabia</option>
            <option value="rs" name="Belgrade">Serbia</option>
            <option value="sg" name="Singapore">Singapore</option>
            <option value="sk" name="Bratislava">Slovakia</option>
            <option value="si" name="Ljubljana">Slovenia</option>
            <option value="se" name="Stockholm">Sweden</option>
            <option value="ch" name="Bern">Switzerland</option>
            <option value="tw" name="Taipei">Taiwan</option>
            <option value="th" name="Bangkok">Thailand</option>
            <option value="tr" name="Ankara">Turkey</option>
            <option value="ua" name="Kyiv">Ukraine</option>
            <option value="ae" name="Abu Dhabi">United Arab Emirates</option>
            <option value="gb" name="London">United Kingdom</option>
            <option value="us" name="Newyork">USA</option>
            <option value="ve" name="caracas">Venezuela</option>
            <option value="za" name="pretoria">South Africa</option>
          </select>
        </div>
      </div>

      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="business" ><i className="large material-icons">business</i> BUSINESS <b className="linethru">News</b></p>
      <div className={display ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
        <span onClick={() => { setDisplay(false); }} className="close">&times;</span>
        <div className="con-content" style={{ backgroundImage: `url(${imgurl}`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
          <section className="lp__grid">
            <div className="lp__gridItem lp__gridItem__text">
              <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
              <h2 className="lp__gridItemText-lg">{description}</h2>
              <p className="lp__gridItemText-md">{content}</p>
              {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong><i className="medium material-icons">account_circle</i> {author}</strong> on {fulldate} {contTime}</p> : null}
            </div>
          </section>
        </div>
      </div>
      <div className={window.innerWidth > 790 ? `slider` : `row`} >
        {news.map((source, index) => (
          <div className="slide" key={index} style={{ transform: `translateX(${x}%)` }}>
            <div className="button button2" >
              <div className="polaroid"
                onClick={() => {
                  setDisplay(true);
                  setDisplay1(false);
                  setDisplay2(false);
                  setDisplay3(false);
                  setDisplay4(false);
                  setDisplay5(false);
                  setDisplay6(false);
                  getfulldate(source.publishedAt);
                  containerData(source);
                }}>
                <div className="card" id={`${theme}` === 'standard' ? `card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                  <div style={{ backgroundImage: `url(${source.urlToImage}`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100%" }}>
                    <div className="top-right">{index + 1}/{news.length}</div>
                    <div className="top-left date">
                      <span className="day">{setPubdate(source.publishedAt)}</span>
                      <span className="month">{setPubmonth(source.publishedAt)}</span>
                      <span className="year">{setPubyear(source.publishedAt)}</span>
                      <span className="year">{setPubtime(source.publishedAt)}</span>
                    </div>
                    <div className="bottom-right">{source.source.name} </div>
                  </div>

                  <div className="pol-container">
                    {source.title ? <p className="overflow-ellipsis">{source.title}</p> : null}<br />
                  </div>
                  <div className="descontent">
                    <p>{source.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => { x === 0 ? setX(-100 * (news.length - 4)) : setX(x + 300); }}>
          <i className="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => { x === -100 * (news.length - 4) ? setX(0) : setX(x - 300); }}>
          <i className="large material-icons">chevron_right</i>
        </button>
      </div>


      {/* <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="entertainment"><i className="large material-icons">movie</i> ENTERTAINMENT <b className="linethru">News</b></p>
        <div className={display1 ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
          <span onClick={() => {setDisplay1(false);}} className="close">&times;</span>
          <div className="con-content" style={{backgroundImage: `url(${imgurl}`,backgroundSize: "cover",backgroundPosition: "center center",backgroundRepeat: "no-repeat",height: "90%"}}>
            <section className="lp__grid">
              <div className="lp__gridItem lp__gridItem__text">
                <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
                <h2 className="lp__gridItemText-lg">{description}</h2>
                <p className="lp__gridItemText-md">{content}</p>
                {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong>{author}</strong> on {fulldate}</p> : null }
              </div>
            </section>
          </div>
        </div>
        <div className={window.innerWidth > 790 ? `slider` : `row`}>
          {news1.map((source,index) =>  (
            <div className="slide" key={index} style={{transform: `translateX(${x1}%)`}}>
              <div className="button button2" >
                <div className="polaroid" 
                        onClick={() => {
                          setDisplay(false);
                          setDisplay1(true);
                          setDisplay2(false);
                          setDisplay3(false);
                          setDisplay4(false);
                          setDisplay5(false);
                          setDisplay6(false);
                          getfulldate(source.publishedAt);
                          containerData(source);
                        }}>
                  <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                    <div style={{backgroundImage: `url(${source.urlToImage}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%"}}>
                      <div className="top-right">{index + 1}/{news1.length}</div>
                        <div className="top-left date">
                          <span className="day">{setPubdate(source.publishedAt)}</span>
                          <span className="month">{setPubmonth(source.publishedAt)}</span>
                          <span className="year">{setPubyear(source.publishedAt)}</span>
                        </div>
                        <div className="bottom-right">{source.source.name} </div>
                      </div>
                      <div className="pol-container">
                        {source.title? <p className="overflow-ellipsis">{source.title}</p> : null}<br/>
                      </div>
                      <div className="descontent">
                        <p>{source.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        ))}
             <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => {x1 === 0 ? setX1(-100*(news.length-4)) : setX1(x1 + 300);}}>
              <i className="large material-icons">chevron_left</i>
            </button>
            <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => {x1 === -100*(news.length-4) ? setX1(0) : setX1(x1 - 300);}}>
              <i className="large material-icons">chevron_right</i>
            </button>
          </div>

      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="general"><i className="large material-icons">people </i> GENERAL <b className="linethru">News</b></p>
      <div className={display2 ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
      <span onClick={() => {setDisplay2(false);}} className="close">&times;</span>
        <div className="con-content" style={{backgroundImage: `url(${imgurl}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "90%"}}>
          <section className="lp__grid">
            <div className="lp__gridItem lp__gridItem__text">
              <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
              <h2 className="lp__gridItemText-lg">{description}</h2>
              <p className="lp__gridItemText-md">{content}</p>
              {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong>{author}</strong> on {fulldate}</p> : null }
            </div>
          </section>
        </div>
      </div>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news2.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x2}%)`}}>
          <div className="button button2" >
                      <div className="polaroid" 
                        onClick={() => {
                          setDisplay(false);
                          setDisplay1(false);
                          setDisplay2(true);
                          setDisplay3(false);
                          setDisplay4(false);
                          setDisplay5(false);
                          setDisplay6(false);
                          getfulldate(source.publishedAt);
                          containerData(source);
                        }}>
                        <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                        <div style={{backgroundImage: `url(${source.urlToImage}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%"}}>
                            <div className="top-right">{index + 1}/{news2.length}</div>
                            <div className="top-left date">
                                <span className="day">{setPubdate(source.publishedAt)}</span>
                                <span className="month">{setPubmonth(source.publishedAt)}</span>
                                <span className="year">{setPubyear(source.publishedAt)}</span>
                            </div>
                            <div className="bottom-right">{source.source.name} </div>
                            
                        </div>
                        <div className="pol-container">
                                {source.title? <p className="overflow-ellipsis">{source.title}</p> : null}<br/>
                            </div>
                        <div className="descontent">
                            <p>{source.description}</p>
                        </div>
                        </div>
                        
                      </div>
                      </div>
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => {x2 === 0 ? setX2(-100*(news.length-4)) : setX2(x2 + 300);}}>
          <i className="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => {x2 === -100*(news.length-4) ? setX2(0) : setX2(x2 - 300);}}>
          <i className="large material-icons">chevron_right</i>
        </button>
      </div>


      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="health"> <i className="large material-icons" style={{color: `red`}}>local_hospital</i> HEALTH <b className="linethru">News</b></p>
      <div className={display3 ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
      <span onClick={() => {setDisplay3(false);}} className="close">&times;</span>
        <div className="con-content" style={{backgroundImage: `url(${imgurl}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "90%"}}>
          <section className="lp__grid">
            <div className="lp__gridItem lp__gridItem__text">
              <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
              <h2 className="lp__gridItemText-lg">{description}</h2>
              <p className="lp__gridItemText-md">{content}</p>
              {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong>{author}</strong> on {fulldate}</p> : null }
            </div>
          </section>
        </div>
      </div>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news3.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x3}%)`}}>
              <div className="button button2" >
                        <div className="polaroid" 
                        onClick={() => {
                          setDisplay(false);
                          setDisplay1(false);
                          setDisplay2(false);
                          setDisplay3(true);
                          setDisplay4(false);
                          setDisplay5(false);
                          setDisplay6(false);
                          getfulldate(source.publishedAt);
                          containerData(source);
                        }}>
                        <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                        <div style={{backgroundImage: `url(${source.urlToImage}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%"}}>
                            <div className="top-right">{index + 1}/{news3.length}</div>
                            <div className="top-left date">
                                <span className="day">{setPubdate(source.publishedAt)}</span>
                                <span className="month">{setPubmonth(source.publishedAt)}</span>
                                <span className="year">{setPubyear(source.publishedAt)}</span>
                            </div>
                            <div className="bottom-right">{source.source.name} </div>
                            
                        </div>
                        <div className="pol-container">
                                {source.title? <p className="overflow-ellipsis">{source.title}</p> : null}<br/>
                            </div>
                        <div className="descontent">
                            <p>{source.description}</p>
                        </div>
                        </div>
                        
                      </div>
                      </div>
              </div>

        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => {x3 === 0 ? setX3(-100*(news.length-4)) : setX3(x3 + 300);}}>
          <i className="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => {x3 === -100*(news.length-4) ? setX3(0) : setX3(x3 - 300);}}>
          <i className="large material-icons">chevron_right</i>
        </button>
      </div>


      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="science"> <i className="large material-icons" style={{color: `yellow`}}>lightbulb_outline</i> SCIENCE <b className="linethru">News</b></p>
      <div className={display4 ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
      <span onClick={() => {setDisplay(false);}} className="close">&times;</span>
        <div className="con-content" style={{backgroundImage: `url(${imgurl}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "90%"}}>
          <section className="lp__grid">
            <div className="lp__gridItem lp__gridItem__text">
              <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
              <h2 className="lp__gridItemText-lg">{description}</h2>
              <p className="lp__gridItemText-md">{content}</p>
              {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong>{author}</strong> on {fulldate}</p> : null }
            </div>
          </section>
        </div>
      </div>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news4.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x4}%)`}}>
          <div className="button button2" >
                        <div className="polaroid" 
                        onClick={() => {
                          setDisplay(false);
                          setDisplay1(false);
                          setDisplay2(false);
                          setDisplay3(false);
                          setDisplay4(true);
                          setDisplay5(false);
                          setDisplay6(false);
                          getfulldate(source.publishedAt);
                          containerData(source);
                        }}>
                        <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                        <div style={{backgroundImage: `url(${source.urlToImage}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%"}}>
                            <div className="top-right">{index + 1}/{news4.length}</div>
                            <div className="top-left date">
                                <span className="day">{setPubdate(source.publishedAt)}</span>
                                <span className="month">{setPubmonth(source.publishedAt)}</span>
                                <span className="year">{setPubyear(source.publishedAt)}</span>
                            </div>
                            <div className="bottom-right">{source.source.name} </div>
                            
                        </div>
                        <div className="pol-container">
                                {source.title? <p className="overflow-ellipsis">{source.title}</p> : null}<br/>
                            </div>
                        <div className="descontent">
                            <p>{source.description}</p>
                        </div>
                        </div>
                        
                      </div>
                      </div>
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => {x4 >= 0 ? setX4(-100*(news4.length-4)) : setX4(x4 + 300);}}>
          <i className="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => {x4 <= -100*(news4.length-4) ? setX4(0) : setX4(x4 - 300);}}>
          <i className="large material-icons">chevron_right</i>
        </button>
      </div>


      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="sports"><i className="large material-icons">directions_run </i> SPORTS <b className="linethru">News</b></p>
      <div className={display5 ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
      <span onClick={() => {setDisplay5(false);}} className="close">&times;</span>
        <div className="con-content" style={{backgroundImage: `url(${imgurl}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "90%"}}>
          <section className="lp__grid">
            <div className="lp__gridItem lp__gridItem__text">
              <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
              <h2 className="lp__gridItemText-lg">{description}</h2>
              <p className="lp__gridItemText-md">{content}</p>
              {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong>{author}</strong> on {fulldate}</p> : null }
            </div>
          </section>
        </div>
      </div>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news5.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x5}%)`}}>
          <div className="button button2" >
                        <div className="polaroid" 
                        onClick={() => {
                          setDisplay(false);
                          setDisplay1(false);
                          setDisplay2(false);
                          setDisplay3(false);
                          setDisplay4(false);
                          setDisplay5(true);
                          setDisplay6(false);
                          getfulldate(source.publishedAt);
                          containerData(source);
                        }}>
                        <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                        <div style={{backgroundImage: `url(${source.urlToImage}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%"}}>
                            <div className="top-right">{index + 1}/{news5.length}</div>
                            <div className="top-left date">
                                <span className="day">{setPubdate(source.publishedAt)}</span>
                                <span className="month">{setPubmonth(source.publishedAt)}</span>
                                <span className="year">{setPubyear(source.publishedAt)}</span>
                            </div>
                            <div className="bottom-right">{source.source.name} </div>
                            
                        </div>
                        <div className="pol-container">
                                {source.title? <p className="overflow-ellipsis">{source.title}</p> : null}<br/>
                            </div>
                        <div className="descontent">
                            <p>{source.description}</p>
                        </div>
                        </div>
                        
                      </div>
                      </div>
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => {x5 >= 0 ? setX5(-100*(news.length-4)) : setX5(x5 + 300);}}>
          <i className="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => {x5 <= -100*(news.length-4) ? setX5(0) : setX5(x5 - 300);}}>
          <i className="large material-icons">chevron_right</i>
        </button>
      </div>


      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="technology"><i className="large material-icons">phonelink </i> TECHNOLOGY <b className="linethru">News</b></p>
      <div className={display6 ? `${window.innerWidth}` > 790 ? `lar-container` : `search-container` : `no-container`}>
      <span onClick={() => {setDisplay6(false);}} className="close">&times;</span>
        <div className="con-content" style={{backgroundImage: `url(${imgurl}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "90%"}}>
          <section className="lp__grid">
            <div className="lp__gridItem lp__gridItem__text">
              <a href={srcurl} className="lp__gridItemText-sm">{name}</a>
              <h2 className="lp__gridItemText-lg">{description}</h2>
              <p className="lp__gridItemText-md">{content}</p>
              {author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong>{author}</strong> on {fulldate}</p> : null }
            </div>
          </section>
        </div>
      </div>
      <div className={window.innerWidth > 790 ? `slider` : `row`}>
        {news6.map((source,index) =>  (
          <div className="slide" key={index} style={{transform: `translateX(${x6}%)`}}>
          <div className="button button2" >
                        <div className="polaroid" 
                        onClick={() => {
                          setDisplay(false);
                          setDisplay1(false);
                          setDisplay2(false);
                          setDisplay3(false);
                          setDisplay4(false);
                          setDisplay5(false);
                          setDisplay6(true);
                          getfulldate(source.publishedAt);
                          containerData(source);
                        }}>
                        <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                        <div style={{backgroundImage: `url(${source.urlToImage}`,backgroundPosition: "center center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%"}}>
                            <div className="top-right">{index + 1}/{news6.length}</div>
                            <div className="top-left date">
                                <span className="day">{setPubdate(source.publishedAt)}</span>
                                <span className="month">{setPubmonth(source.publishedAt)}</span>
                                <span className="year">{setPubyear(source.publishedAt)}</span>
                            </div>
                            <div className="bottom-right">{source.source.name} </div>
                            
                        </div>
                        <div className="pol-container">
                                {source.title? <p className="overflow-ellipsis">{source.title}</p> : null}<br/>
                            </div>
                        <div className="descontent">
                            <p>{source.description}</p>
                        </div>
                        </div>
                        
                      </div>
                      </div>
          </div>
        ))}
        <button id="goLeft" className="hoverable hide-on-med-and-down" onClick={() => {x6 >= 0 ? setX6(-100*(news.length-4)) : setX6(x6 + 300);}}>
          <i className="large material-icons">chevron_left</i>
        </button>
        <button id="goRight" className="hoverable hide-on-med-and-down" onClick={() => {x6 <= -100*(news.length-4) ? setX6(0) : setX6(x6 - 300);}}>
          <i className="large material-icons">chevron_right</i>
        </button>
      </div> */}

    </div>
  );


};

const About = ({ theme }) => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState('apple');
  const [selectdate, setselectDate] = useState(new Date());
  const [strdate, setstrdate] = useState([]);
  const [numdate, setnumdate] = useState();
  const [pagenum, setPagenum] = useState();
  const [display, setDisplay] = useState(false);
  const [filter, setFilter] = useState('popularity');
  // const [pageX,setPageX] = useState(1);
  // var pagearr = [];
  useEffect(() => {
    getNews();
  }, [query, numdate, filter]);

  const getNews = async (e) => {
    const api_call = await fetch(`http://newsapi.org/v2/everything?q=${query}&from=${numdate}&to=${numdate}&sortBy=${filter}&page=1&pageSize=100&apiKey=`);
    const response = await api_call.json();
    setNews(response.articles);
    setPagenum(response.totalResults);
    let maxPage = parseInt((pagenum / 100) + 1);
    // for (let i = 1; i <= maxPage; i++){
    //   pagearr.push(i);
    // }
  }

  // const previousPage = () => {
  //     pageX === 1? setPageX(1) : setPageX(pageX - 1); 
  //     console.log(pageX);
  //   }

  //   const NextPage = (maxPage) => {

  //     pageX === maxPage? setPageX(maxPage) : setPageX(pageX + 1); 
  //     console.log(pageX);
  //   }

  const getFilter = e => {
    setFilter(e.target.value);
  }

  const onChange = selectdate => {
    setselectDate(selectdate);
    setstrdate(selectdate.toString().split(" "));
    // setnumdate(strdate.substring(7, 13));
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    switch (strdate[1]) {
      case 'Jan':
        strdate[1] = "01";
        break;
      case 'Feb':
        strdate[1] = "02";
        break;
      case 'Mar':
        strdate[1] = "03";
        break;
      case 'Apr':
        strdate[1] = "04";
        break;
      case 'May':
        strdate[1] = "05";
        break;
      case 'Jun':
        strdate[1] = "06";
        break;
      case 'Jul':
        strdate[1] = "07";
        break;
      case 'Aug':
        strdate[1] = "08";
        break;
      case 'Sep':
        strdate[1] = "09";
        break;
      case 'Oct':
        strdate[1] = "10";
        break;
      case 'Nov':
        strdate[1] = "11";
        break;
      case 'Dec':
        strdate[1] = "12";
        break;
    }
    setnumdate(strdate[3] + "-" + strdate[1] + "-" + strdate[2]);
  }

  const [xm, setXM] = useState();
  const [xmm, setXMM] = useState();

  const setPubdate = (time) => {
    let newText = time.split('T');
    let newText2 = newText[0].split('-');
    return newText2[2];
  }

  const setPubyear = (time) => {
    let newText = time.split('T');
    let newText2 = newText[0].split('-');
    return newText2[0];
  }

  const setPubmonth = (time) => {
    let newText = time.split('T');
    let newText2 = newText[0].split('-');
    switch (newText2[1]) {
      case '01':
        newText2[1] = "Jan";
        break;
      case '02':
        newText2[1] = "Feb";
        break;
      case '03':
        newText2[1] = "Mar";
        break;
      case '04':
        newText2[1] = "Apr";
        break;
      case '05':
        newText2[1] = "May";
        break;
      case '06':
        newText2[1] = "Jun";
        break;
      case '07':
        newText2[1] = "Jul";
        break;
      case '08':
        newText2[1] = "Aug";
        break;
      case '09':
        newText2[1] = "Sep";
        break;
      case '10':
        newText2[1] = "Oct";
        break;
      case '11':
        newText2[1] = "Nov";
        break;
      case '12':
        newText2[1] = "Dec";
        break;
    }
    return newText2[1];
  }

  const setPubtime = (time) => {
    let newText = time.split('T');
    let newText1 = newText[1].split('Z')
    let newText2 = newText1[0].split(':');
    if (newText2[0] > 12) {
      newText2[0] = parseInt(newText2[0]) - 12;
      return (newText2[0] + ":" + newText2[1] + " PM");
    }
    else {
      return (newText2[0] + ":" + newText2[1] + " AM");
    }
  }


  const getfulldate = (time) => {
    let newText = time.split('T');
    let newText1 = newText[1].split('Z')
    let newText2 = newText[0].split('-');
    let newText3 = newText1[0].split(':');
    switch (newText2[1]) {
      case '01':
        newText2[1] = "Jan";
        break;
      case '02':
        newText2[1] = "Feb";
        break;
      case '03':
        newText2[1] = "Mar";
        break;
      case '04':
        newText2[1] = "Apr";
        break;
      case '05':
        newText2[1] = "May";
        break;
      case '06':
        newText2[1] = "Jun";
        break;
      case '07':
        newText2[1] = "Jul";
        break;
      case '08':
        newText2[1] = "Aug";
        break;
      case '09':
        newText2[1] = "Sep";
        break;
      case '10':
        newText2[1] = "Oct";
        break;
      case '11':
        newText2[1] = "Nov";
        break;
      case '12':
        newText2[1] = "Dec";
        break;
    }
    if (newText3[0] > 12) {
      newText3[0] = parseInt(newText3[0]) - 12;
      return (newText2[1] + " " + newText2[2] + "," + newText2[0] + " " + newText3[0] + ":" + newText3[1] + " PM.");
    }
    else {
      return (newText2[1] + " " + newText2[2] + "," + newText2[0] + " " + newText3[0] + ":" + newText3[1] + " AM.");
    }
  }


  // const [x,setX] = useState(0)
  // const goLeft = () => {
  //   x === 0 ? setX(-1600) : setX(x + 100);
  // };

  // const goRight = () => {
  //   x === -1600 ? setX(0) : setX(x - 100); 
  // }; 
  return (
    <div className={`${theme}` === 'standard' ? `App` : `${theme}` === 'dark' ? `dark-App` : `${theme}` === 'green' ? `green-App` : `${theme}` === 'grey' ? `grey-App` : `${theme}` === 'red' ? `red-App` : `${theme}` === 'purple' ? `purple-App` : `${theme}` === 'indigo' ? `indigo-App` : `App`}>
      <div className="row">
        <div className="col s12">
          <form onSubmit={getSearch}>
            <div className="search">
              <input type="text" className="searchTerm" placeholder="What are you looking for?" value={search} onChange={updateSearch} />
              <div className="datepicker">
                <DatePicker
                  format="y-MM-dd"
                  onChange={onChange}
                  value={selectdate}
                  clearIcon={null}
                  clearAriaLabel={null}
                  dayPlaceholder="dd"
                  monthPlaceholder="MM"
                  yearPlaceholder="yyyy"
                />
              </div>
              <button type="submit" className="searchButton">
                <i className="tiny material-icons">search</i>
              </button>
              <select className="browser-default filter-tag right " value={filter} onChange={getFilter}>
                <option>sortby</option>
                <option value="popularity">Popularity</option>
                <option value="relevancy">Relevant</option>
                <option value="publishedAt">PublishedAt</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <p className={`${theme}` === 'standard' ? `headers` : `${theme}` === 'dark' ? `dark-headers` : `${theme}` === 'green' ? `green-headers` : `${theme}` === 'grey' ? `grey-headers` : `${theme}` === 'red' ? `red-headers` : `${theme}` === 'purple' ? `purple-headers` : `${theme}` === 'indigo' ? `indigo-headers` : `headers`} id="business"><i className="large material-icons">date_range</i> {query}  <b className="linethru">News</b></p>
      <div className={display ? `search-container` : `no-container`}>
        <div className="modSlider" >
          {news.map((source, index) => {
            return (
              <div className="modSlide" key={index} style={{ transform: `translateX(${xm}%)` }}>
                <div className="con-content" style={{ backgroundImage: `url(${source.urlToImage})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "90%" }}>
                  <span onClick={() => { setDisplay(false); }} className="close">&times;</span>
                  <div className="top-left1">{index + 1}/{news.length}</div>
                  <section className="lp__grid">
                    <div className="lp__gridItem lp__gridItem__text">
                      <a href={source.url} className="lp__gridItemText-sm">{source.title}</a>
                      <h2 className="lp__gridItemText-lg">{source.description}</h2>
                      <p className="lp__gridItemText-md">{source.content}</p>
                      {source.author ? <p className="lp__gridItemText-md lp__gridItemText-sm-bw"><strong><i className="medium material-icons">account_circle</i> {source.author}</strong> on {getfulldate(source.publishedAt)}</p> : null}
                    </div>
                  </section>
                </div>
              </div>
            )
          })
          }
          <button id="mod-goLeft" className="hoverable" onClick={() => { xm === 0 ? setXM(-100 * (news.length - 1)) : setXM(xm + 100); console.log(xm); }}>
            <i className="large material-icons">chevron_left</i>
          </button>
          <button id="mod-goRight" className="hoverable" onClick={() => { xm === -100 * (news.length - 1) ? setXM(0) : setXM(xm - 100); }}>
            <i className="large material-icons">chevron_right</i>
          </button>
        </div>
      </div>

      <div className="row">
        {news.map((source, index) => (
          <div className="slide" key={index} >
            <div className="button button2" onMouseEnter={() => {
              setXMM(parseInt(index) * -100);
            }}>
              <div className="polaroid"
                onClick={() => {
                  setDisplay(true);
                  getfulldate(source.publishedAt);
                  setXM(xmm);
                }}>

                <div className="card" id={`${theme}` === 'standard' ? `stan-card` : `${theme}` === 'dark' ? `dark-card` : `${theme}` === 'green' ? `green-card` : `${theme}` === 'grey' ? `grey-card` : `${theme}` === 'red' ? `red-card` : `${theme}` === 'purple' ? `purple-card` : `${theme}` === 'indigo' ? `indigo-card` : `card`}>
                  <div style={{ backgroundImage: `url(${source.urlToImage}`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100%" }}>
                    <div className="top-right">{index + 1}/{news.length}</div>
                    <div className="top-left date">
                      <span className="day">{setPubdate(source.publishedAt)}</span>
                      <span className="month">{setPubmonth(source.publishedAt)}</span>
                      <span className="year">{setPubyear(source.publishedAt)}</span>
                      <span className="year">{setPubtime(source.publishedAt)}</span>
                    </div>
                    <div className="bottom-right">{source.source.name} </div>

                  </div>
                  <div className="pol-container white-text">
                    {source.title ? <p className="overflow-ellipsis">{source.title}</p> : null}<br />
                  </div>
                  <div className="descontent white-text">
                    <p>{source.description}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row">
          <button className="goPrevious left" onClick={previousPage}><i className="material-icons left">chevron_left</i>Previous</button>
          <button className="goNext right" onClick={NextPage}><i className="material-icons right">chevron_right</i>Next</button>
      </div> */}
    </div>
  );
};

const Dashboard = ({ theme }) => {

  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [temp, setTemp] = useState();
  const [tempMin, setTempmin] = useState();
  const [tempMax, setTempmax] = useState();
  const [descript, setDescript] = useState();
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(false);

  const get_WeatherIcon = (rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        setIcon('wi-thunderstorm');
        break;
      case rangeId >= 300 && rangeId <= 321:
        setIcon('wi-sleet');
        break;
      case rangeId >= 500 && rangeId <= 531:
        setIcon('wi-storm-showers');
        break;
      case rangeId >= 600 && rangeId <= 622:
        setIcon('wi-snow');
        break;
      case rangeId >= 701 && rangeId <= 781:
        setIcon('wi-fog');
        break;
      case rangeId === 800:
        setIcon('wi-day-sunny');
        break;
      case rangeId >= 801 && rangeId <= 804:
        setIcon('wi-day-fog');
        break;
      default:
        setIcon('wi-day-fog');

    }
  }

  const calCelsius = (temp) => {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }

  const showError = () => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        please enter values correctly
      </div>
    );
  };

  const getWeather = async (e) => {
    e.preventDefault();
    const city1 = e.target.elements.city.value;
    const country1 = e.target.elements.country.value;
    if (city1 && country1) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city1},${country1}&appid=`);
      const response = await api_call.json();
      console.log(response);
      setCity(response.name);
      setCountry(response.sys.country);
      setLat(response.coord.lat);
      setLong(response.coord.lon);
      setTemp(calCelsius(response.main.temp));
      setTempmin(calCelsius(response.main.temp_min));
      setTempmax(calCelsius(response.main.temp_max));
      setDescript(response.weather[0].description);
      get_WeatherIcon(response.weather[0].id);
      setError(false);

    }
    else {
      setError(true);
    }
  }


  return (
    <div className={`${theme}` === 'standard' ? `App` : `${theme}` === 'dark' ? `dark-App` : `${theme}` === 'green' ? `green-App` : `${theme}` === 'grey' ? `grey-App` : `${theme}` === 'red' ? `red-App` : `${theme}` === 'purple' ? `purple-App` : `${theme}` === 'indigo' ? `indigo-App` : `App`}>
      <div className="container">
        <div>{error ? showError() : null}</div>
        <form onSubmit={getWeather}>
          <div className="row">
            <div className="col m3">
              <input
                type="text"
                className="form-control"
                name="city"
                autoComplete="off"
                placeholder="city"
              />
            </div>
            <div className="col m3">
              <input
                type="text"
                className="form-control"
                name="country"
                autoComplete="off"
                placeholder="country"
              />
            </div>
            <div className="col m3 left">
              <button className="btn btn-light " type="submit">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col s6">
          <Weather
            city={city}
            country={country}
            lat={lat}
            long={long}
            temp_celsius={temp}
            temp_min={tempMin}
            temp_max={tempMax}
            description={descript}
            weatherIcon={icon}
          />
        </div>
        <div className="col s6">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="400" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${city}&t=&z=8&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
              {/* <a href="https://www.embedgooglemap.net">embedgooglemap.net</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//api_Key=AIzaSyB61Teb_BSil8QskHTDsHB0y_MAh7MNr4k

{/* <div className="column">
          {/* <div className="form-group">
            <div className="col-sm-6 col-md-4 self-align-center">
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