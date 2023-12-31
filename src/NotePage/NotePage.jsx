import { createSignal } from "solid-js";
import { pinyin } from "../convert.utils";
import "./NotePage.css";

// 切的图标集 由

const resSpace = (char) => (char === " " ? " " : char);

const convert = (data) => {
  const rows = data.split("\n");

  return rows.map((row) => {
    const hanziArr = row.split("").map(resSpace);

    return hanziArr.map((item) => ({ hanzi: item, pinyin: pinyin(item) }));
  });
};

function NotePage({noteText, setNoteText}) {
  const [isPinyinVisible, setPinyinVisibility] = createSignal(true);
  const convertedText = () => convert(noteText());

  return (
    <>
      <div class="editor">
        <textarea
          value={noteText()}
          onInput={(e) => {
            setNoteText(e.currentTarget.value);
          }}
        ></textarea>
        <div>
          <button onClick={() => setPinyinVisibility(!isPinyinVisible())}>
            {isPinyinVisible() ? "Hide Pinyin" : "Show Pinyin"}
          </button>
        </div>
      </div>

      <div class="reader">
        {convertedText().map((row) => (
          <div class="row">
            {row.map((item) =>
              item.hanzi === item.pinyin ? (
                <span class="hanzi">{item.hanzi}</span>
              ) : (
                <ruby>
                  <span class="hanzi">{item.hanzi}</span>
                  {isPinyinVisible() ? (
                    <rt>
                      <span class="pinyin">{item.pinyin}</span>
                    </rt>
                  ) : null}
                </ruby>
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default NotePage;
