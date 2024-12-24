import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],   // State to store fetched photos
      loading: false   // State to manage loading status
    };
  }

  // Use the required lifecycle methods here
  // Make an API call to fetch images and update state accordingly
  // Ensure that loading is set to true before the API request and false after data is fetched
  static getDerivedStateFromProps(){
    return null;
  }

  componentDidMount() {
    this.setState({ loading: true });  // Set loading to true before fetching data
    // Fetch photos from an API (replace with actual API URL)
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos') 
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          photos: data,  // Update state with the fetched photos
          loading: false  // Set loading to false after data is fetched
        });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        this.setState({ loading: false }); // Set loading to false in case of an error
      });
  }

  render() {
    // const {photos} = this.state;
    // Display loading status here
    // If loading is true, display the message "Loading..."
    return (
      <div className="App">
        {this.state.loading ? (
          <p>Loading...</p>  // Display loading message while fetching
        ) : (
          this.state.photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })
        )}
      </div>
    );
  }
}


// import "./styles.css";
// import React from "react";
// import Image from "./components/Image";

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       photos: [],
//       loading: true
//     };
//   }

//   // Use the required lifecycle methods here
//   static getDerivedStateFromProps(){
//     return null;
//   }
//   componentDidMount(){
//        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//             .then(response => response.json())
//             .then(photo => this.setState({photos: photo, loading: false}))
//             .catch((err) => {
//               console.log(err)
//               this.setState({loading: false})
//             })
//   }
//   render() {
//     // Display loading status here
//     const {photos, loading} = this.state;
//     return (
//       <div className="App">
//         {loading?
//         (<p>Loading...</p>)
//       :
//       (photos.map((photo) => {
//         return <Image key={photo.id} photo={photo} />;
//       }))
//       }
//       </div>
//     );
//   }
// }