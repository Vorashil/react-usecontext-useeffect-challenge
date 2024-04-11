const LoginPageButtons = ({onClick, text}: {onClick: () => void, text: string}) => {
    return (
        <button
            className={"border-2 p-2 m-2 rounded-md border-blue-400 hover:bg-blue-400 hover:text-white"}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
export default LoginPageButtons