interface Props {
  status: 'loading' | 'error',
  msg?:   string,
}
const Status = ({ status, msg }: Props) => {
  return <div className="text-main-text-secondary text-center text-sm sm:text-base">
    {
      (status === 'loading')?
      msg || "Loading...":
      "ERROR: " + msg
    }
  </div>;
}

export default Status;
