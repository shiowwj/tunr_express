var React = require("react");

class Head extends React.Component{
    render(){
        return(
            <head>
                <meta charSet="utf-8"/>
                <title>TUNR EXPRESS</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
        )
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                    <a method="GET" href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a>
                    </li>
                    <li class="nav-item">
                        <a method="GET" href="/new"><span class=" glyphicon glyphicon-plus" aria-hidden="true"></span>Add New Artist to List</a>
                    </li>
                    <li class="nav-item">
                        <a method="GET" href="/playlist"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>View Playlist</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Home extends React.Component {
  render() {

    let data = this.props.data
    // console.log('in the home JSX........:');
    // console.log(data);
    let outList = data.map(item=>{
        return  <div class="card-item">
                    <div class= "rows">
                        <img src={item.photo_url}/>
                        <a class="card-body" href={`/artist/${item.id}`}>
                            <h4>{item.id}. {item.name}</h4>
                            <h5>{item.nationality}</h5>
                        </a>
                    </div>
                    <div class="rows">
                        <a href={`/artist/${item.id}/Songs`}>View All Artist Songs</a><br></br>
                        <a href={`/artist/${item.id}/edit`}>Edit</a><br></br>
                        <a href={`/artist/${item.id}/songs/new`}>Add Songs</a><br></br>
                        <a href={`/artist/${item.id}/delete`}>Delete</a><br></br>
                    </div>
                </div>

    })
    return (
      <html>
        <Head/>
        <body>
            <Navigation/>
          <h1>Mildly Comparable Audiophalse</h1>
          <div class="content">
            {outList}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;