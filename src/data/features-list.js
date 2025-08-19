
import svg from "../components/svg"
import clock from '../../static/img/time.png'
import trophe from '../../static/img/quality-work.png'
import call from '../../static/img/call.png'
export const features = [
  {
    title: "Clean & cool",
    desc: "Whitespace plays a big role and borders result in the layout that is clean at the users' first sight.",
    className: "feature-1",
    svg: svg.eyesight,
    // svg:mypicture
  },
  {
    title: "Concise but powerful",
    desc: "With only ~15 kb size, you can start a new project having just must-haves like components, helper classes, and so on.",
    className: "feature-2",
    svg: svg.artist,
  },
];

export const features_horizontal = [
  {
    title: "Reliabilty",
    desc: "You can trust me to deliver consistently and meet deadlines.",
    className: "feature-1",
    img: clock
    // svg: svg.components,
  },
  {
    title: "Quality",
    desc: "Expect work that’s polished, detailed,and up to quality high standards.",
    className: "feature-1",
    img: trophe,
  },
  {
    title: "Communication",
    desc: "Clear, open, and timely updates from start to finish.",
    className: "feature-1",
    img: call,
  },
];