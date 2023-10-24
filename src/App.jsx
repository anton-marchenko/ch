import { createSignal } from "solid-js";
import { pinyin } from "./convert.utils";
import "./App.css";

// 切的图标集 由

const convert = (data) => {
  const rows = data.split("\n");

  return rows.map((row) => {
    const arr = row.split("");

    return arr.map((item) => ({ pinyin: pinyin(item), hanzi: item }));
  });
};

const resSpace = (char) => (char === " " ? "&nbsp;&nbsp;" : char);

function Char(props) {
  return (
    <div class="ch-box">
      <span class="pinyin">{props.pinyin}</span>
      <span class="ch">{props.hanzi}</span>
    </div>
  );
}

function App() {
  const [text, setText] = createSignal("由");

  return (
    <>
      <textarea
        value={text()}
        onInput={(e) => {
          console.log(e.currentTarget.value);
          setText(e.currentTarget.value);
        }}
      ></textarea>

      <div>
        {convert(text()).map((row) => (
          <div>
            {row.map((item) => (
              <Char pinyin={item.pinyin} hanzi={item.hanzi}></Char>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
