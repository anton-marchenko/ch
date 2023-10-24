import { createSignal } from "solid-js";
import { pinyin } from "./convert.utils";
import "./App.css";

// 切的图标集 由

const resSpace = (char) => (char === " " ? "   " : char);

const convert = (data) => {
  const rows = data.split("\n");

  return rows.map((row) => {
    const hanziArr = row.split("");
    const pinyinArr = hanziArr.map((item) => pinyin(item));

    return {
      hanziArr,
      pinyinArr
    }
  });
};

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
          <table class="row-table" border="0" cellspacing="1" cellpadding="1">
            <tbody>
            <tr>
            {row.pinyinArr.map(itm => (
              <td><span class="pinyin">{itm}</span></td>
            ))}
            </tr>
            <tr>
            {row.hanziArr.map(itm => (
              <td><span class="hanzi">{itm}</span></td>
            ))}
            </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}

export default App;
