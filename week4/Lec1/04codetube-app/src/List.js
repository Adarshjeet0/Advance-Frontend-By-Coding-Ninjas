import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";
//Import the Container here from the resuable.styled.js file.


class List extends Component {

  render() {
    const { isCourseinBag, handleAdd, handleRemove } = this.props;
    return (
      //Refactor the div to use the container styled component with value as props using the flex value
      // eg. <Container flex='3'/>
      <div className="list">
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={handleAdd}
            onRemove={handleRemove}
            isInBag={isCourseinBag(v.id)}
          />
        ))}
      </div>
    );
  }
}

export default List;
