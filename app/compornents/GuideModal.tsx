export default function GuideModal({
  setShowGuide,
}) {
  return (
    <div
      className="w-[480px] z-10 absolute bg-yellow-200 h-full pt-12"
    >
      <p>
        「箱入り娘」は、実在するパズルゲームの一つです。
      </p>
      <p>
        盤面には大小さまざまな駒が配置されていて、<br/>
        駒を上下左右に動かして遊びます。
      </p>
      <p>
        目的は大きな駒（娘）を一番下の出口まで動かすこと。
      </p>
      <p>
        駒は他の駒に重なったり飛び越えたりすることはできません。
      </p>
      <p>
        動かし方を工夫しないと出口までたどり着けない、<br/>
        頭を使う奥深いパズルです。
      </p>
      <button
        className="bg-gray-400 cursor-pointer hover:opacity-0.8 rounded-md p-2 mt-4"
        onClick={() => setShowGuide((prev) => !prev)}
      >
        <p>
          ゲームに戻る！
        </p>
      </button>
    </div>
  )
}