import "./Card.css";
export default function Card(props) {
  //to avoid missing some of the CSS, we pass the className of Children into Card
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
