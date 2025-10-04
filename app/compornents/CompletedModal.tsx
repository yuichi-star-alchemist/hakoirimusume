export default function CompletedModal({}) {
  return (
    <div
      className="w-[480px] z-20 absolute bg-blue-200 h-full pt-12 text-3xl leading-loose"
    >
      <p>
        おめでとうございます！
      </p>
      <p>
        ゲームをクリアしました！
      </p>
      <p>
        Congratulations!!
      </p>
      <p>
        Thank you for playing!!
      </p>
      <button
        className="bg-orange-300 p-2 rounded-3xl cursor-pointer mt-8"
        onClick={() => location.reload()}
      >
        <p>
          もう一度プレイする！
        </p>
      </button>
    </div>
  )
}