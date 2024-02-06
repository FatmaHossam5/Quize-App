interface Props {
  message: string;
}
export default function AlertMessage(props: Props) {
  return (
    <>
      <div className="group">
        <i className="fa-solid fa-circle-exclamation text-red-300 p-2 "></i>

        <span className="hidden absolute group-hover:block w-auto bg-red-200 text-red-800 border border-red-500 px-2 py-1 rounded z-[1]">
          {String(props.message)}
        </span>
      </div>
    </>
  );
}
