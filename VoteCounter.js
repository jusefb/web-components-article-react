import React from "react";

export class VoteCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0
    };
    this.like = this.like.bind(this);
    this.disLike = this.disLike.bind(this);
    this.webComponentAttributeChanged = this.webComponentAttributeChanged.bind(
      this
    );
  }

  componentDidMount() {
    // Regular React lifecycle method
    console.log(this.props.header);
    console.log(this.props.subheader);
  }

  webComponentConnected(ev) {
    console.log(ev);
    console.log(this);
  }

  webComponentAttributeChanged(attrName, oldVal, newVal) {
    console.log(attrName);
    if (attrName == "header") {
      this.props.header = newVal;
    }

    if (attrName == "subheader") {
      this.props.subheader = newVal;
    }
  }

  like() {
    this.state.totalCount++;
    this.setState({
      totalCount: this.state.totalCount
    });
  }

  disLike() {
    this.state.totalCount--;
    this.setState({
      totalCount: this.state.totalCount
    });
  }

  render() {
    return (
      <div className="rsvp-counter-cntr card" style={divStyle}>
        <h1 style={h1}>{this.props.header}</h1>
        <h2 style={h2}>{this.props.subheader}</h2>
        {this.props.children}
        <br />
        <button
          style={btnStyle}
          type="button"
          className="button"
          onClick={this.disLike}
        >
          Dislike
        </button>
        <span className="vc-total">{this.state.totalCount}</span>
        <button
          style={btnStyle}
          type="button"
          className="button"
          onClick={this.like}
        >
          Like
        </button>
        <br />
        <sub>Powerd by React</sub>
      </div>
    );
  }
}

// We define the styles in the component to allow us to use this react component as a web component
const h1 = {
  color: "#00e1c6"
};

const h2 = {
  color: "#184769"
};

const divStyle = {
  textAlign: "center",
  border: "1px solid black",
  fontFamily: "Arial",
  position: "relative",
  WebkitBoxOrient: "vertical",
  WebkitBoxDirection: "normal",
  MsFlexDirection: "column",
  flexDirection: "column",
  minWidth: "0",
  wordWrap: "break-word",
  backgroundColor: "#f7f7f9",
  backgroundClip: "border-box",
  border: "1px solid rgba(0, 0, 0, 0.125)",
  borderRadius: "0.25rem",
  marginBottom: "1rem"
};

const btnStyle = {
  color: "#fff",
  backgroundColor: "#0069d9",
  borderColor: "#0062cc",
  display: "inline-block",
  fontWeight: "400",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  MsUserSelect: "none",
  userSelect: "none",
  border: "1px solid transparent",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "0.25rem",
  transition:
    "color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
};
