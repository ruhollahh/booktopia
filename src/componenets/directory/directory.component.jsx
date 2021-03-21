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
          linkUrl: "hats",
        },
        {
          id: 2,
          title: "فلسفه و روانشناسی",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616160074/philosophy_jcyzzl.jpg",
          linkUrl: "",
        },
        {
          id: 3,
          title: "رمان و داستان",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616159899/literacy_lmefay.jpg",
          linkUrl: "",
        },
        {
          id: 4,
          title: "هنر",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616159506/art_fgpbs6.jpg",
          linkUrl: "",
        },
        {
          id: 5,
          title: "جغرافیا و تاریخ",
          imageUrl:
            "https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1400/v1616160362/history_welous.jpg",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        <ul>
          {this.state.categories.map(({ id, ...otherThings }) => {
            return <MenuItem key={id} {...otherThings} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Directory;
