import { createSignal } from "solid-js";
import { pinyin } from "./convert.utils";
import "./App.css";

// 切的图标集 由

const resSpace = (char) => (char === " " ? " " : char);

const convert = (data) => {
  const rows = data.split("\n");

  return rows.map((row) => {
    const hanziArr = row.split("").map(resSpace);

    return hanziArr.map((item) => ({ hanzi: item, pinyin: pinyin(item) }));
  });
};

function App() {
  const [isPinyinVisible, setPinyinVisibility] = createSignal(true);
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
        <button onClick={() => setPinyinVisibility(!isPinyinVisible())}>
          {isPinyinVisible() ? 'Hide Pinyin' : 'Show Pinyin'}
        </button>
      </div>

      <div>
        {convert(text()).map((row) => (
          <div class="row">
            {row.map((item) => (
              <ruby>
                <span class="hanzi">{item.hanzi}</span>
                {isPinyinVisible() ? (
                  <rt>
                    <span class="pinyin">{item.pinyin}</span>
                  </rt>
                ) : null}
              </ruby>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
