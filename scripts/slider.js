
const body = document.getElementsByTagName("body")[0];

const radioFirst = document.getElementById("slider_radio_first");
const radioSecond = document.getElementById("slider_radio_second");
const radioThird = document.getElementById("slider_radio_third");

const slideTextFirst = document.getElementsByClassName(
  "page_main__slider--first"
)[0];
const slideTextSecond = document.getElementsByClassName(
  "page_main__slider--second"
)[0];
const slideTextThird = document.getElementsByClassName(
  "page_main__slider--third"
)[0];

const bodyFirst = "body_first_slide";
const bodySecond = "body_second_slide";
const bodyThird = "body_third_slide";

function Slide(radio, slideText, body) {
  return {
    radio,
    slideText,
    body,
  };
}

const first = new Slide(radioFirst, slideTextFirst, bodyFirst);
const second = new Slide(radioSecond, slideTextSecond, bodySecond);
const third = new Slide(radioThird, slideTextThird, bodyThird);

const slides = [first, second, third];

function addChangeListener(slide) {
  slide.radio.addEventListener("change", function () {
      console.log('changed');
    if (this.checked) {
      slides.forEach((el) => {
        if (el.body === slide.body) {
            body.classList.add(el.body);
            console.log(el.body);
            el.slideText.classList.remove(VISIBILITY_CLASS);
        }
        else {
            console.log('Removing ' + el.body);
            body.classList.remove(el.body);
            el.slideText.classList.add(VISIBILITY_CLASS);
        }
      });
    }
  });
}

slides.forEach((el) => addChangeListener(el));
