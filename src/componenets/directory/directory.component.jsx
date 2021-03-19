import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          id: 1,
          title: "ادبیات",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616159972/novel_ukiboe.jpg",
        },
        {
          id: 2,
          title: "فلسفه و روانشناسی",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616160074/philosophy_jcyzzl.jpg",
        },
        {
          id: 3,
          title: "رمان و داستان",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616159899/literacy_lmefay.jpg",
        },
        {
          id: 4,
          title: "هنر",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616159506/art_fgpbs6.jpg",
        },
        {
          id: 5,
          title: "جغرافیا و تاریخ",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616160362/history_welous.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        <ul>
          {this.state.categories.map(({ id, title, imageUrl }) => {
            return <MenuItem key={id} title={title} imageUrl={imageUrl} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Directory;
